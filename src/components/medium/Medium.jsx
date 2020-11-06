import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../../styles/css/Medium.css';
import cadreImage from '../../styles/images/cadreBouton.png';

class Medium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediumCards: null,
      currentCard: 0,
      theta: null,
    };
    this.next = this.next.bind(this);
    this.hundleOnClickMedium = this.hundleOnClickMedium.bind(this);
  }

  componentDidMount() {
    this.getMedium();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentCard, theta } = this.state;
    const carousel = document.querySelector('.carousel');
    if (currentCard !== prevState.currentCard) {
      const figure = carousel.querySelector('figure');
      figure.style.transform = `rotateY(${currentCard * -theta}rad)`;
    }
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
    const { currentCard } = this.state;
    this.setState({ currentCard: currentCard + 1 });
  }

  hundleOnClickMedium(medium) {
    const { history } = this.props;
    localStorage.setItem('medium', JSON.stringify(medium));
    history.push('/board');
  }

  render() {
    const { mediumCards, theta } = this.state;
    return (
      <div className="Medium">
        <div className="titleMedium">
          <h2 className="titleMediumStyle">Choisissez votre Medium</h2>
        </div>
        <div className="carousel" id="carousel">
          <figure>
            {mediumCards ? (
              mediumCards.map((card, index) => (
                <img
                  key={card.id}
                  style={
                    index !== 0
                      ? {
                          transform: `rotateY(${index * theta}rad)`,
                        }
                      : {}
                  }
                  src={card.image}
                  alt={card.name}
                  onClick={() => this.hundleOnClickMedium(card)}
                />
              ))
            ) : (
              <p className="loadingText">Loading ...</p>
            )}
          </figure>
        </div>
        <div className="buttonMedium">
          <img className="buttonImage" src={cadreImage} alt="Cadre" />
          <div className="buttonBackground" />
          <button
            type="button"
            className="buttonMediumStyle"
            onClick={this.next}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }
}

Medium.defaultProps = {
  history: [],
};

Medium.propTypes = {
  history: PropTypes.string,
};

export default Medium;
