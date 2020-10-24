import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Help from './components/help/Help';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Help" component={Help} />
      </Switch>
    </div>
  );
}

export default App;
