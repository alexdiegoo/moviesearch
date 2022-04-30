import axios from "axios";
import { Environment } from './environment';

export const getMovies = async (url, page) => {
  const res = await axios.get(`${Environment.BASE_URL}movie/${url}?api_key=${Environment.API_KEY}&page=${page}`);
  return res.data.results;
}

export const getMovieDetails = async (movie_id) => {
  const res = await axios.get(`${Environment.BASE_URL}movie/${movie_id}?api_key=${Environment.API_KEY}`);
  return res.data;
}

export const getSearchMovies = async (query) => {
  const res = await axios.get(`${Environment.BASE_URL}search/movie?api_key=${Environment.API_KEY}&query=${query}&page=1`);
  return res.data;
}