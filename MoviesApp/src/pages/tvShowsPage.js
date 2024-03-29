import React, { useContext } from "react";
import { getTVShows } from "../api/movie-api";
import PageTemplate from '../components/tvComponents/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIconTV from '../components/cardIcons/addToFavouritesTV'
import { TVContext } from "../contexts/tvContext";
import { useParams } from "react-router-dom";

const TVPage = (props) => {
  const {setPageNumber, setShowType} = useContext(TVContext);
  const {pageNumber} = useParams();
  const {  data, error, isLoading, isError }  = useQuery([`discover-tv-${pageNumber}`,{pageNum:pageNumber}], getTVShows)
  setPageNumber(pageNumber);
  setShowType('discover');
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TV = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = TV.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (tvId) => true 

  return (
    <PageTemplate
      title="Discover TV"
      TV={TV}
      action={(TV) => {
        return <AddToFavouritesIconTV TV={TV} />
      }}
    />
  );
};
export default TVPage;