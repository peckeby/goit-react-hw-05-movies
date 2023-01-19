import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import Loader from 'components/Loader/Loader';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

function MovieDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function movieDetailsSetting() {
      setIsLoading(true);
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    movieDetailsSetting();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
      {movie ? (
        <div>
          <Link to={backLinkHref}>Back to movies</Link>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie?.name ?? movie.original_title}
            height={300}
          ></img>
          <h1>{movie?.name ?? movie.original_title}</h1>
          <p>{movie.overview}</p>
          <p>Additional information</p>
          <Link to={'cast'}>Cast </Link>
          <Link to={'reviews'}>Reviews</Link>
          <Outlet />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default MovieDetailsPage;
