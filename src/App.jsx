import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import MurderContext from './components/gameboard/MurderContext';
import Home from './components/home/Home';
import Medium from './components/medium/Medium';
import Gameboard from './components/gameboard/GameBoard';
import Win from './components/end/Win';
import Lose from './components/end/Lose';
import firstSound from './styles/sounds/mysterium-first.mp3';
import './App.css';

const App = () => {
  const location = useLocation();
  const [sound, setSound] = useState(firstSound);
  const audioElement = useRef(null);

  const [charWeaponPlace, setCharWeaponPlace] = useState({});

  const isFirstSound =
    location.pathname === '/' || location.pathname === '/medium';
  // const isSecondSound = location.pathname === '/board';
  // const isThirdSound = location.pathname === '/win';
  // const isFourthSound = location.pathname === '/loose';

  useEffect(() => {
    if (isFirstSound) {
      setSound(firstSound);
    } else {
      setSound(firstSound);
    }
  }, [isFirstSound]);

  // } else if (isSecondSound) {
  //   return secondSound;
  // } else if (isThirdSound) {
  //   return thirdSound;
  // } else if (isFourthSound) {
  //   return fourthSound;
  // } else {
  //    firstSound;
  // }

  return (
    <div className="App">
      <div className="controlAudio">
        <audio
          className="controlAudioStyle"
          ref={audioElement}
          style={{ position: 'absolute', zIndex: 1 }}
          src={sound}
          controls
          controlsList="nodownload"
          type="audio/mpeg"
        >
          <track default kind="captions" />
        </audio>
      </div>
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
