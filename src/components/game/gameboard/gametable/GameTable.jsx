import Axios from 'axios';
import React from 'react';
import Card from './Card';

class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visions: [],
    };
  }

  componentDidMount() {
    Axios.get('https://mysterium-game.herokuapp.com/api/visions/characters')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          visions: data.filter((vision) => vision.id_character === 3),
        });
      });
  }

  render() {
    const { visions } = this.state;
    return (
      <div>
        {visions.map((vision) => (
          <Card key={vision.id} type="vision" data={vision} />
        ))}
      </div>
    );
  }
}

export default GameTable;
