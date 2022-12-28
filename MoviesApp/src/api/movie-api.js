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