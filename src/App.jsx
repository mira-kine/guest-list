import './App.css';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Home/Auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
