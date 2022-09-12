import { Link, Route } from 'wouter';
import './App.css';
import SearchResults from './pages/SearchResults/SearchResults';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Detail';
import StaticContext from './context/StaticContext';

function App() {
  return (
    //una vez se usa el provider, automaticamente estamos obligados a pasarle un value
    <StaticContext.Provider value={{ name: 'Oliver', sigueme: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>GiffyLand</h1>
          </Link>
          <Route component={Home} path="/" />

          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
