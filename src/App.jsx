import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import MurderContext from './components/gameboard/MurderContext';
import Home from './components/home/Home';
import Medium from './components/medium/Medium';
import Gameboard from './components/gameboard/GameBoard';
import Win from './components/end/Win';
import Lose from './components/end/Lose';
import firstSound from './styles/sounds/mysterium-first.mp3';
import secondSound from './styles/sounds/Mysterium_Stephaaaaaane.mp3';
import thirdSound from './styles/sounds/End_win.mp3';
import fourthSound from './styles/sounds/End_Lose.mp3';
import './App.css';

const App = () => {
  const location = useLocation();
  const [sound, setSound] = useState(firstSound);
  const audioElement = useRef(null);
  const [charWeaponPlace, setCharWeaponPlace] = useState({});
  const isHomeMedium =
    location.pathname === '/' || location.pathname === '/medium';
  const isBoard = location.pathname === '/board';
  const isWin = location.pathname === '/win';
  const isLose = location.pathname === '/lose';

  useEffect(() => {
    if (isHomeMedium) {
      setSound(firstSound);
    } else if (isBoard) {
      setSound(secondSound);
    } else if (isWin) {
      setSound(thirdSound);
    } else if (isLose) {
      setSound(fourthSound);
    } else {
      setSound(firstSound);
    }
  }, [isHomeMedium, isBoard, isWin, isLose]);

  return (
    <div className="App">
      <div className="controlAudio">
        <audio
          className="controlAudioStyle"
          // ref={audioElement}
          style={{ position: 'absolute', zIndex: 200000 }}
          src={sound}
          controls
          autoPlay
          loop
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
