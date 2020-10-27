import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
