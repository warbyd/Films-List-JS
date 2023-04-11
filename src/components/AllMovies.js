// AllMovies.js

import React from 'react';
import '../AllMovies.css'; 

const AllMovies = () => {
  return (
    <div className="all-movies-container">
      <a href="https://www.imdb.com/calendar/?region=gb" target="_blank" rel="noopener noreferrer" className="all-movies-link">
        All Upcoming Films
      </a>
    </div>
  );
};

export default AllMovies;
