import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>GifLand</h1>
        <Link to='/gif/rickandmorty'>Gifs de Rick y Mortis</Link>
        <Link to='/gif/pandas'>Gifs de Pandas</Link>
        <Link to='/gif/metallica'>Gifs de Metallica</Link>
        <Link to='/gif/alien'>Gifs de Aliens</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
