import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProtectedRoute } from './routes/ProtectedRoute';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Admin from './components/Admin';
import './App.css';

function App() {
  document.title = 'Sample project Turing';
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={UserProfile} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
