import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Gameboard from './components/gameboard/GameBoard';
import Medium from './components/medium/Medium';
import End from './components/end/End';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/medium" component={Medium} />
        <Route path="/board" component={Gameboard} />
        <Route path="/end" component={End} />
      </Switch>
    </div>
  );
};

export default App;
