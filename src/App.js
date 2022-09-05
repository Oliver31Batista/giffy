import { useEffect, useState } from 'react';
import './App.css';
import { getGifs } from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'rick'}).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-header">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="" />
        ))}
      </section>
    </div>
  );
}

export default App;
