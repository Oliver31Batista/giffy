import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import './Home.css';

const POPULAR_GIFS = ['Rick & Mortys', 'Pandas', 'Aliens', 'Metal'];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navigate to another route
    pushLocation(`/search/${keyword}`)
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} placeholder='Search a gif here... 🔍'/>
        <button>Buscar</button>
        {/*el formulario identifica al ultimo boton como el boton de submit, por eso es una ventaja manejar el onSubmit desde el form directamente*/}
      </form>
      <h3 className="App-Title">Los Gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
