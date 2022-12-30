

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({username: username, password:password })
    }).then(res => res.json());
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({username: username, password: password })
    }).then(res => res.json());
}

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };

  export const getTVShows = () => {
    return fetch(
         '/api/tvshows',{headers: {
              'Authorization': window.localStorage.getItem('token')
              }
            }
    ).then(res => res.json());
    };
    export const getTVShow = (args) => {
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        return fetch(
             `/api/tvshows/${id}`,{headers: {
                  'Authorization': window.localStorage.getItem('token')
                  }
                }
        ).then(res => res.json());
        };

  export const getUpcomingMovies = (args) => {
    const [, pageNumPart] = args.queryKey;
    const {pageNum} = pageNumPart;
    return fetch(
        `/api/movies/tmdb/upcoming?page=${pageNum}`,{headers:{
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
    };

  export const getTopRatedMovies = (args) => {
    const [, pageNumPart] = args.queryKey;
    const {pageNum} = pageNumPart;
    return fetch(
        `/api/movies/tmdb/toprated?page=${pageNum}`,{headers:{
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
    }
    export const getTopRatedTVShows = (args) => {
      const [, pageNumPart] = args.queryKey;
      const {pageNum} = pageNumPart;
      return fetch(
          `/api/tvshows/tmdb/toprated?page=${pageNum}`,{headers:{
              'Authorization': window.localStorage.getItem('token')
          }
      }
      ).then(res => res.json());
      }

  export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/people/tmdb/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };

  export const getGenres = async () => {
    return fetch(
        '/api/genres',{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };

  export const getPersonMovies = (id) => {
    return fetch(
        `/api/people/tmdb/${id}/movie_credits`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };

  export const getPersonTV = (id) => {
    return fetch(
        `/api/people/tmdb/${id}/tv_credits`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }

    ).then(res => res.json());
    };

  export const getMovieImages = ({queryKey}) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/tmdb/movieimages/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };
    export const getTVImages = ({queryKey}) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
          `/api/tvshows/tmdb/tvshowimages/${id}`,{headers: {
              'Authorization': window.localStorage.getItem('token')
              }
              }
      ).then(res => res.json());
      };

  export const getMovieCredits = (id) => {

    return fetch(
        `/api/movies/tmdb/${id}/credits`,{headers: {
            'Authorization': window.localStorage.getItem('token')
            }
            }
    ).then(res => res.json());
    };
    export const getTVCredits = (id) => {

      return fetch(
          `/api/tvshows/tmdb/${id}/credits`,{headers: {
              'Authorization': window.localStorage.getItem('token')
              }
              }
      ).then(res => res.json());
      }
    export const getSimilarMovies = (id) => {
        
        return fetch(
            `/api/movies/tmdb/${id}/similar`,{headers: {
                'Authorization': window.localStorage.getItem('token')
                }
                }
        ).then(res => res.json());
        }
    export const getSimilarTVShows = (id) => {    
        return fetch(
            `/api/tvshows/tmdb/${id}/similar`,{headers: {
                'Authorization': window.localStorage.getItem('token')
                }
                }
        ).then(res => res.json());
        }


        export const getMovieReviews = (id) => {
            console.log(id)
            return fetch(
              `/api/movies/${id}/reviews`,{headers: {

                'Authorization': window.localStorage.getItem('token')
                }
                }
            )
              .then((res) => {return res.json()})
          };

          export const getTVReviews = (id) => {
            console.log(id)
            return fetch(
              `/api/tvshows/tmdb/${id}/reviews`,{headers: {

                'Authorization': window.localStorage.getItem('token')
                }
                }
            )
              .then((res) => {return res.json()})
          };

          export const getSearchResults = (pageNum,searchTerm) => {
            return fetch(
              `/api/search/?page=${pageNum}&query=${searchTerm}`,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
                }
            ).then((response) => { 
               return response.json() 
            })
          };