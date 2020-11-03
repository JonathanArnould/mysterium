import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Gameboard from './components/gameboard/GameBoard';
import Medium from './components/medium/Medium';
import End from './components/end/End';
import Help from './components/help/Help';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/medium" component={Medium} />
        <Route path="/board" component={Gameboard} />
        <Route path="/end" component={End} />
        <Route path="/help" component={Help} />
      </Switch>
    </div>
  );
};

export default App;
