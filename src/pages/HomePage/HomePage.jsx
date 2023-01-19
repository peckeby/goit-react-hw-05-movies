import React, { useEffect } from 'react';
import { fetchTrendingMovies } from 'api/api';
import {
  MovieGallery,
  MovieItem,
  PageLoadButton,
  MovieLink,
} from './HomePage.styled';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const pageChange = evt => {
    evt.preventDefault();
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    async function movieGallerySetting() {
      setIsLoading(true);
      try {
        const trendindMovies = await fetchTrendingMovies(page);
        page > 1
          ? setMovies(prevState => prevState.concat(trendindMovies.results))
          : setMovies(trendindMovies.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    movieGallerySetting();
  }, [page]);

  return (
    <>
      {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
      {movies.length > 0 && (
        <>
          <MovieGallery>
            {movies.map(movie => (
              <MovieItem key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={`${movie.name} poster`}
                    height={300}
                    loading="lazy"
                  ></img>
                  <p>{movie?.name ?? movie.original_title}</p>
                </MovieLink>
              </MovieItem>
            ))}
          </MovieGallery>
          <PageLoadButton type="button" onClick={pageChange}>
            More movies
          </PageLoadButton>
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
};

export default HomePage;
