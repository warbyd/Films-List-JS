import '../Film.css'

import React from 'react';

const Film = ({ film }) => {
  return (
    <div className="film">
      <a href={film.url} target="_blank" rel="noopener noreferrer" className="film-url">{film.name}</a>
    </div>
  );
};

export default Film;
