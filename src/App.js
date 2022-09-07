import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import Home from './pages/Home/Home'
import Detail from './pages/Details/Detail'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'><h1>GiffyLand</h1></Link>
        <Route component={Home} path='/'/>

        <Route component={ListOfGifs} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id"/>
      </section>
    </div>
  );
}

export default App;
