import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMovieCast } from 'api/api';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function movieCastFetch() {
      setIsLoading(true);
      try {
        const castFetch = await fetchMovieCast(id);
        setCast(castFetch.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    movieCastFetch();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
      <ul>
        {cast.length > 0 &&
          cast.map(castHero => (
            <li key={castHero.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${castHero.profile_path}`}
                alt={castHero.name}
                height={100}
              ></img>
              <p>{castHero.name}</p>
              <p>Character: {castHero.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

Cast.propTypes = {};

export default Cast;
