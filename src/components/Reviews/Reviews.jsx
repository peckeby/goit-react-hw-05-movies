import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieReviews } from 'api/api';
import Loader from 'components/Loader/Loader';

function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function movieCastFetch() {
      setIsLoading(true);
      try {
        const reviewsFetch = await fetchMovieReviews(id, page);

        page > 1
          ? setReviews(prevState => prevState.concat(reviewsFetch.results))
          : setReviews(reviewsFetch.results);

        page === 1 && setTotalPages(reviewsFetch.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    movieCastFetch();
  }, [page, id]);

  const pageChange = evt => {
    evt.preventDefault();
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ul>
            {reviews.length > 0 ? (
              reviews.map(review => (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))
            ) : (
              <p>Whoops, there is no reviews for now 😢</p>
            )}
          </ul>
          {totalPages > 1 && page < totalPages && (
            <button type="button" onClick={pageChange}>
              More reviews
            </button>
          )}
        </div>
      )}
      {error && <p>Whoops, something went wrong 😢: {error.message}</p>}
    </>
  );
}

export default Reviews;
