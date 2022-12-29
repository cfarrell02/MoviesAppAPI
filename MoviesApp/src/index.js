import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TVPage from "./pages/tvShowsPage";
import TVDetailsPage from './pages/tvShowDetailsPage'
import SiteHeader from './components/siteHeader'
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";
import TopRatedMoviesPage from "./pages/topratedMoviesPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import {Link} from 'react-router-dom'
import FavouriteTVPage from "./pages/favouriteTVPage";
import MustWatchMovies from "./pages/mustWatchMoviePage";
import { useEffect, useState } from "react";
import TVReviewPage from "./pages/tvReviewPage";
import TopRatedTVPage from "./pages/topratedTVPage";
import TVContextProvider from "./contexts/tvContext";
import LoginPage from "./pages/loginPage";
import { AuthContext } from "./contexts/authContext";
import PersonDetailsPage from "./pages/actorDetailsPage";
import AboutPage from "./pages/aboutPage";
import PrivateRoute from "./privateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  const context = React.useContext(AuthContext);

  return (

    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <>
               
          <AuthContextProvider>
          <MoviesContextProvider>
            <TVContextProvider>
            <SiteHeader /> 
              
      <Routes>
        <Route exact path="/movies/favourites" element={<PrivateRoute> <FavouriteMoviesPage /></PrivateRoute>} />
        <Route path="/movies/:id" element={<PrivateRoute><MoviePage /></PrivateRoute>} />
        <Route path="/reviews/:id" element={ <PrivateRoute><MovieReviewPage /> </PrivateRoute>} />
        <Route path="/tvshows/reviews/:id" element = {<PrivateRoute><TVReviewPage/></PrivateRoute>}/>
        <Route path="/reviews/form" element={<PrivateRoute><AddMovieReviewPage/></PrivateRoute>} />
        <Route path="/mustwatch" element={<PrivateRoute><MustWatchMovies/></PrivateRoute>} />
        <Route path="/movies/upcoming/page=:pageNumber" element={<PrivateRoute><UpcomingMoviesPage /></PrivateRoute> } />
        <Route path= "/movies/toprated/page=:pageNumber" element = {<PrivateRoute><TopRatedMoviesPage/></PrivateRoute>}/>
        <Route path="/tvshows/page=:pageNumber" element = {<PrivateRoute><TVPage/></PrivateRoute>}/>
        <Route path="/tvshows/:id" element = {<PrivateRoute><TVDetailsPage/></PrivateRoute>}/>
        <Route path="/tvshows/toprated/page=:pageNumber" element={ <PrivateRoute><TopRatedTVPage /></PrivateRoute> } />
        <Route path="/tvshows/favourites" element={ <PrivateRoute><FavouriteTVPage /> </PrivateRoute>} />
        <Route path="/page=:pageNumber" element={<PrivateRoute><HomePage /></PrivateRoute>} />

        <Route path="/person/:id" element={<PrivateRoute><PersonDetailsPage/></PrivateRoute>}/>
        <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>} />
        
        
        <Route path="*" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
              
      </TVContextProvider>
      </MoviesContextProvider>
      </AuthContextProvider>
      </>

    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );

