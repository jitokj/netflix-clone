const API_KEY = "57a551c3b12cac2158bc36cd9242767c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&genres=28`,
  fetchComedyMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-us`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&genres=27`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-us`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-us`,
};

export default requests;
