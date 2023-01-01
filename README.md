# Assignment 2 - Web API.

Name: Cian Farrell

## Features.


 + All Previous TMDB Calls routed through new API - This includes, toprated movie and tv shows, upcoming tv shows, actors, movie/show credits, actor details/credits and db searching.
 + TV Shows - TVShows have been added to the API.
 + Full React App support - React app now works soley off of new API.
 + Movie Reviews - Movie reviews now added from API.

## Installation Requirements


Clone, repo. Download and set up all 3rd party software listed in package.json. Set up mongoDB. Start both servers.


## API Configuration
Set up a .env file with the following attributes, replacing with ones relevent to you.

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```

## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/tmdb/topRatedMovies | Gets top rated movies | N/A | N/A | N/A 
| /api/users | Gets users | Login | N/A | N/A 
| /api/users/{userid}| Gets individual user | N/A | N/A | N/A 
| /api/users?action=register | N/A | Adds a new user  | N/A | N/A 
| /api/tvShows | Gets list of TV shows | N/A  | N/A | N/A 
| /api/tvShows/{tvShowid} | Gets individual TV Show | N/A | N/A | N/A 

There are a number of TMDB routes from the previous project not listed above.

## Security and Authentication
Every route, except for user related routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 
React App - https://github.com/cfarrell02/MoviesApp

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

N/A

## Independent learning.

N/A
