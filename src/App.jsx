import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Help from './components/help/Help';
import Gameboard from './components/game/gameboard/Gameboard';

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
