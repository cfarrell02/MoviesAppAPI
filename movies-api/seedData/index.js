import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';
import movieModel from '../api/movies/movieModel';
import showModel from '../api/shows/showModel';
import movies from './movies.js';
import shows from './shows';
import users from './users';
import genres from './genres';
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres(){
    console.log('load genre Data');
    try {
        await genreModel.deleteMany();
        await genreModel.collection.insertMany(genres);
        console.info(`${genres.length} genres were successfully stored.`);
    }catch(err){
        console.error(`failed to Load genre Data: ${err}`);
    }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();//you may not need this line if you skipped the exercises
  loadMovies();//ADD THIS LINE
  loadShows();//ADD THIS LINE
}

export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadShows() {
  console.log('load seed data');
  console.log(shows.length);
  try {
    await showModel.deleteMany();
    await showModel.collection.insertMany(shows);
    console.info(`${shows.length} Shows were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load show Data: ${err}`);
  }
}