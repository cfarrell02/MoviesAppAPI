import express from 'express';
import uniqid from 'uniqid';
import asyncHandler from 'express-async-handler';
import { getSearchResults } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10, query } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)
    const results = await getSearchResults(page, query);
    console.log(page)
    console.log(query)
    console.log(results)
    res.status(200).json(results);
}));

export default router;