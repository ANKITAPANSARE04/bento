import React from 'react';

const MovieRatings = () => {
  return (
    <div className="movie-ratings">
      <h2>Cruella Movie Ratings</h2>

      <div className="rating">
        <h3>Rotten Tomatoes</h3>
        <div className="rating-details">
          <span className="score">Critic Score: 74% (Certified Fresh)</span>
          <span className="score">Audience Score: 80%</span>
        </div>
      </div>

      <div className="rating">
        <h3>IMDb</h3>
        <div className="rating-details">
          <span className="score">Rating: 7.4/10</span>
        </div>
      </div>

      <div className="rating">
        <h3>Metacritic</h3>
        <div className="rating-details">
          <span className="score">Metascore: 59/100</span>
          <span className="score">User Score: 7.3/10</span>
        </div>
      </div>
      
      <style jsx>{`
        .movie-ratings {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .rating {
          margin: 15px 0;
        }

        .rating h3 {
          font-size: 18px;
          color: #333;
        }

        .rating-details {
          margin-top: 10px;
          font-size: 16px;
        }

        .score {
          display: block;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default MovieRatings;
