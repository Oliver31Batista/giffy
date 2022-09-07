import { Link, Route } from 'wouter';
import './App.css';
import SearchResults from './pages/SearchResults/SearchResults'
import Home from './pages/Home/Home'
import Detail from './pages/Details/Detail'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'><h1>GiffyLand</h1></Link>
        <Route component={Home} path='/'/>

        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id"/>
      </section>
    </div>
  );
}

export default App;
