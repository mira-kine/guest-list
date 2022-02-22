import './App.css';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Home/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <Route exact path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
