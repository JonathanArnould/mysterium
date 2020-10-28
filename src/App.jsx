import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Help from './components/help/Help';
import Gameboard from './components/game/gameboard/Gameboard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showHelp() {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/board" component={Gameboard} />
        </Switch>
        <button
          type="submit"
          className="help-btn"
          onClick={() => {
            this.showHelp();
          }}
        >
          Help Me!
        </button>
        <Help show={show} />
      </div>
    );
  }
}

export default App;
