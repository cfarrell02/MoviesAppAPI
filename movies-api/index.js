import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import showsRouter from './api/shows';
import genresRouter from './api/genres';
import peopleRouter from './api/persons';
import searchRouter from './api/search';
import session from 'express-session';
import passport from './authenticate';
import './seedData';
import './db';
import usersRouter from './api/users';

dotenv.config();

const errHandler = (err, req, res) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/tvshows', passport.authenticate('jwt', {session: false}), showsRouter);
app.use('/api/people', passport.authenticate('jwt', {session: false}), peopleRouter);
app.use('/api/search', passport.authenticate('jwt', {session: false}), searchRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});