const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDUzMzlhMWU3YjAwMzk0YjRjM2FjNWEyM2IzZDNhYSIsInN1YiI6IjY1NGIzYTBmMWFjMjkyN2IyZGNmNTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k8U5KZQA4vEtL4f6fWe5kGf1eJ8ub5E4MEkgRK7Bgbw'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));