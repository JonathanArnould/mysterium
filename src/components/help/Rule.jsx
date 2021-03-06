import React from 'react';
import Slider from 'react-slick';
import '../../styles/css/Rule.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import tuto1 from '../../styles/images/tuto-1.jpg';
import tuto2 from '../../styles/images/tuto-2.png';
import tuto3 from '../../styles/images/tuto-3.png';
import tuto4 from '../../styles/images/tuto-4.png';
import tuto5 from '../../styles/images/tuto-5.png';

const Rule = ({ setModalIsOpen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="modal-container">
      <div className="rule-container">
        <button type="button" onClick={setModalIsOpen}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="title-modal"> Règles de jeu</h2>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div>
            <h3 className="subtitle-modal">Bienvenue dans Mysterium!</h3>
            <img className="image-modal-1" src={tuto1} alt="screenshots" />
            <p className="paragraphe-modal">
              Je suis l&apos;esprit qui hante ces lieux, aidez moi à retrouver
              mon assassin. Je ne me rappelle pas précisément du coupable mais
              j&apos;ai quelques visions...
            </p>
          </div>
          <div>
            <h3 className="subtitle-modal">Cartes Visions</h3>
            <img className="image-modal" src={tuto2} alt="screenshots" />
            <p className="paragraphe-modal">
              Je vais tout d&apos;abord vous transmettre une vision qui va se
              matérialiser par une carte.
              <br /> En premier lieu il s&apos;agira de retrouver l&apos;arme du
              crime, puis le lieu et enfin le ou la coupable...
            </p>
          </div>
          <div>
            <h3 className="subtitle-modal">Carte armes, lieux et suspects</h3>
            <img className="image-modal" src={tuto3} alt="screenshots" />
            <p className="paragraphe-modal">
              Vous devrez ensuite comparer la ou les cartes visions précédemment
              obtenues afin d&apos;identifier l&apos;arme, puis le lieu et enfin
              le coupable. chaque fois que vous trouvez la bonne réponse, vous
              passez à l&apos;étape suivante. Si vous ne trouvez pas, une
              nouvelle carte vision est distribuée.
            </p>
          </div>
          <div>
            <h3 className="subtitle-modal">Temps imparti</h3>
            <img className="image-modal" src={tuto4} alt="screenshots" />
            <p className="paragraphe-modal">
              Vous avez 1 minute pour faire votre choix à chaque fois
              qu&apos;une carte vision est distribuée. Si vous n&apos;avez pas
              fait de choix à la fin du temps imparti, vous ne trouvez pas la
              bonne réponse et une carte vision vous est donnée.
            </p>
          </div>
          <div>
            <h3 className="subtitle-modal">Fin de la partie</h3>
            <img className="image-modal" src={tuto5} alt="screenshots" />
            <p className="paragraphe-modal">
              Lorsque vous aurez réunis toute les preuves et trouvé le coupable
              vous apaiserez mes tourments et je pourrais alors cesser de hanter
              ces lieux. Si l&apos;on ne parvient pas à identifier mon tueur je
              crains que mon esprits ne deviennent incontrôlable...
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

Rule.defaultProps = {
  setModalIsOpen: null,
};

Rule.propTypes = {
  setModalIsOpen: PropTypes.func,
};

export default Rule;
