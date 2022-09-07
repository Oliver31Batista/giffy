import React from 'react'
import { Link } from 'wouter'
import './Home.css'

const POPULAR_GIFS = ["Rick & Mortys", "Pandas", "Aliens", "Metal"];

const Home = () => {
  return (
    <>
    <h3 className='App-Title'>Los Gifs más populares</h3>

    <ul>
        {POPULAR_GIFS.map((popularGif) => (
            <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export default Home