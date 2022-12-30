import express from 'express';
import {movies, movieReviews} from './movieData.js';
import uniqid from 'uniqid';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import {
    getUpcomingMovies, getTopRatedMovies,getMovieImages, getSimilarMovies, getMovieCredits
  } from '../tmdb-api';

const router = express.Router();

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)
    const upcomingMovies = await getUpcomingMovies(page);
    res.status(200).json(upcomingMovies);
  }));

  router.get('/tmdb/:id/credits', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const movieCredits = await getMovieCredits(id);
    res.status(200).json(movieCredits);
    }));
    router.get('/tmdb/:id/similar', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const similarMovies = await getSimilarMovies(id);
    res.status(200).json(similarMovies);
    }));

  router.get('/tmdb/movieimages/:id', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
    }));

  router.get('/tmdb/toprated', asyncHandler( async(req, res) => {
    let { page = 1, limit = 10 } = req.query;
    [page, limit] = [+page, +limit]; 
    const topRatedMovies = await getTopRatedMovies(page);
    res.status(200).json(topRatedMovies);
    }));

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = movieModel.estimatedDocumentCount(); //Kick off async calls
    const moviesPromise = movieModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const movies = await moviesPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: movies };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    if(movieReviews.id == id){
        console.log(movieReviews);
        res.status(200).json(movieReviews);
    }else{
        res.status(404).json ({
        message: 'The resource you requested could not be found.',
        status_code: 404
        });
    }

});

router.use(express.json());

router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    if(movieReviews.id == id){
        
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body);
        res.status(201).json(req.body);
    }else{
        res.status(404).json ({
        message: 'The resource you requested could not be found.',
        status_code: 404
        });
    }
})

export default router;