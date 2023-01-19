import React, { useState, useEffect } from 'react';

import { fetchMovieSearch } from 'api/api';
import {
  MovieGallery,
  MovieLink,
  PageLoadButton,
} from 'pages/HomePage/HomePage.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { FormSearch, SubmitBtn, Input } from './Movies.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(() => (query ? query : ''));
  const [resultSearch, setResultSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements[0].value;
    if (searchValue === '') {
      return alert('Please, type any movie name!');
    }
    if (searchValue !== searchQuery) {
      setSearchQuery(searchValue);
    } else {
      alert('You have already searched for that movie!');
    }
    form.reset();
  };

  useEffect(() => {
    if (searchQuery) {
      async function searchMovieFetch() {
        setIsLoading(true);
        try {
          const searchedMovies = await fetchMovieSearch(searchQuery, page);
          page > 1
            ? setResultSearch(prevState =>
                prevState.concat(searchedMovies.results)
              )
            : setResultSearch(searchedMovies.results);

          page === 1 && setTotalPages(searchedMovies.total_pages);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
      searchMovieFetch();
    }
  }, [searchQuery, page]);

  const pageChange = evt => {
    evt.preventDefault();
    setPage(prevState => prevState + 1);
  };

  const updateQueryString = e => setSearchParams({ query: e.target.value });

  return (
    <main>
      <FormSearch onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          name="search"
          placeholder="Type name of movie"
          onChange={updateQueryString}
        />
        <SubmitBtn type="submit" name="btn-submit">
          <span>Search</span>
        </SubmitBtn>
      </FormSearch>
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
      {resultSearch.length > 0 && (
        <MovieGallery>
          {resultSearch.map(movie => (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.name} poster`}
                  height={300}
                  loading="lazy"
                ></img>
                <p>{movie?.name ?? movie.original_title}</p>
              </MovieLink>
            </li>
          ))}
          {totalPages > 1 && page < totalPages && (
            <PageLoadButton type="button" onClick={pageChange}>
              More movies
            </PageLoadButton>
          )}
        </MovieGallery>
      )}
    </main>
  );
};

export default MoviesPage;
