import axios from 'axios';

export const fetchTrendingMovies = async num => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=369463d5ad6fe666accc0e43886b3c6a&page=${num}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US`
  );
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=369463d5ad6fe666accc0e43886b3c6a&language&language=en-US
    `
  );
  return response.data;
};

export const fetchMovieReviews = async (movieId, num) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&page=${num}`
  );
  return response.data;
};
export const fetchMovieSearch = async (search, num) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&query=${search}&page=${num}&include_adult=true`
  );
  return response.data;
};
