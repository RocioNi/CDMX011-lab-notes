// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Feed from './components/Feed';

export function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Feed" component={Feed} />
        </Switch>
      </div>
    </Router>
  );
}
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Feed">Feed</Link>
      </li>
      <li>
        <Link to="/Register">Register</Link>
      </li>
    </ul>
  </nav>;

export default App;
