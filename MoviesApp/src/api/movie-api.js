

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