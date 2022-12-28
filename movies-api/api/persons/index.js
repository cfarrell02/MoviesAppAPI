import express from 'express';
//import {shows} from './showData.js';
import uniqid from 'uniqid';
import personModel from './personModel';
import asyncHandler from 'express-async-handler';


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = personModel.estimatedDocumentCount(); //Kick off async calls
    const personsPromise = personModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const persons = await personsPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: persons };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const show = await personModel.findByShowDBId(id);
    if (show) {
        res.status(200).json(show);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

export default router;