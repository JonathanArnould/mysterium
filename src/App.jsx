import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MurderContext from './components/gameboard/MurderContext';
import Home from './components/home/Home';
import Gameboard from './components/gameboard/GameBoard';
import Medium from './components/medium/Medium';
import Win from './components/end/Win';
import Lose from './components/end/Lose';

const App = () => {
  const [charWeaponPlace, setCharWeaponPlace] = useState({});

  return (
    <div className="App">
      <MurderContext.Provider value={{ charWeaponPlace, setCharWeaponPlace }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/medium" component={Medium} />
          <Route path="/board" component={Gameboard} />
          <Route path="/win" component={Win} />
          <Route path="/lose" component={Lose} />
        </Switch>
      </MurderContext.Provider>
    </div>
  );
};

export default App;
