import React from 'react';
import Film from './Film';
import '../FilmList.css'
import '../FilmListContainer.css'



const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map(film => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmList;
