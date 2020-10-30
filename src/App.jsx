import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Gameboard from './components/game/gameboard/Gameboard';
import Help from './components/help/Help';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Gameboard} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </div>
  );
};

export default App;
