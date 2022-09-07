import React from 'react';
import './Gif.css';

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className="gifs-body">
      <h3>{title}, </h3>
      <h3>
      </h3>
      <img src={url} alt={title} />
    </a>
  );
};

export default Gif;
