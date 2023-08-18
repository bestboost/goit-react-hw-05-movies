function fetchCast({movieId}) {
     const options = {
          method: 'GET', 
          headers: {accept: 'application/json'}};

     return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
       .then(response =>  response.json())
       .then(response => console.log(response))
     //       {
     //      if(response.ok) {
     //           return response.json()
     //      }
     // return Promise.reject(
     //      new Error(`Something go wrong, please try again`))
     // }) 
}

const api = {
     fetchCast,
}; 

export default api;