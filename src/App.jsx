import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Gameboard from './components/gameboard/GameBoard';
import Medium from './components/medium/Medium';
import End from './components/end/End';
import './App.css';

import firstSound from '../src/styles/sounds/mysterium-first.mp3';

const App = () => {
  const location = useLocation();
  const [sound, setSound] = useState(firstSound);
  const audioElement = useRef(null);

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
        ></audio>
      </div>
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
