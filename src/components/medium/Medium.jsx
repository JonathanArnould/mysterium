import React from 'react';
import axios from 'axios';
import '../../styles/css/Medium.css';

class Medium extends React.Component {
  constructor() {
    super();
    this.state = {
      mediumCards: null,
      currentCard: 0,
      theta: null,
    };
    this.next = this.next.bind(this);
  }
  getMedium() {
    axios
      .get('https://mysterium-game.herokuapp.com/api/mediums')
      .then((responses) => responses.data)
      .then((data) =>
        this.setState({
          mediumCards: data,
          theta: (2 * Math.PI) / data.length,
        })
      );
  }

  next() {
    console.log(this.state);
    this.setState({ currentCard: this.state.currentCard + 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (this.state.currentCard !== prevState.currentCard) {
      const carousel = document.querySelector('.carousel'),
        figure = carousel.querySelector('figure');
      figure.style.transform = `rotateY(${
        this.state.currentCard * -this.state.theta
      }rad)`;
    }
  }
  componentDidMount() {
    this.getMedium();
  }

  render() {
    return (
      <div className="Medium">
        <div className="titleMedium">
          <h2 className="titleMediumStyle">Choisissez votre Medium</h2>
        </div>
        <div className="carousel" id="carousel">
          <figure>
            {this.state.mediumCards ? (
              this.state.mediumCards.map((card, index) => (
                <img
                  style={
                    index !== 0
                      ? {
                          transform: `rotateY(${index * this.state.theta}rad)`,
                        }
                      : {}
                  }
                  src={card.image}
                />
              ))
            ) : (
              <p className="loadingText">Loading...</p>
            )}
          </figure>
          <nav>
            <button className="buttonMediumStyle" onClick={this.next}>
              Switch
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Medium;
