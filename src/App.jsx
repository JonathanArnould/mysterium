import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Help from './components/help/Help';
import Gameboard from './components/gameboard/GameBoard';
import Win from './components/end/Win';
import Medium from './components/medium/Medium';
import Lose from './components/end/Lose';

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
          <Route path="/medium" component={Medium} />
          <Route path="/board" component={Gameboard} />
          <Route path="/win" component={Win} />
          <Route path="/lose" component={Lose} />
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
