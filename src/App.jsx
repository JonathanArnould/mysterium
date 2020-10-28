import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Medium from './components/medium/Medium';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/medium" component={Medium} />
      </Switch>
    </div>
  );
}

export default App;
