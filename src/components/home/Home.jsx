import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  componentDidMount() {
    axios

      .get('https://mysterium-game.herokuapp.com/api/mediums')
      .then((responses) => responses.data)
      .then();
  }

  render() {
    return <div>Home</div>;
  }
}
export default Home;
