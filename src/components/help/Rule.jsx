import React from 'react';
import Slider from 'react-slick';
import '../../styles/css/Rule.css';

const Rule = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rule-container">
      <h2> Règles de jeu</h2>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div>
          <h3>Bienvenue dans Mysterium!</h3>
          <img src="https://via.placeholder.com/800x450" alt="screenshots" />
          <p>
            Je suis l&apos;esprit qui hante ces lieux, aidez moi à retrouver mon
            Je ne me rappelle pas précisément du coupable mais j&apos;ai
            quelques visions...
          </p>
        </div>
        <div>
          <h3>Cartes Visions</h3>
          <img src="https://via.placeholder.com/800x450" alt="screenshots" />
          <p>
            Je vais tout d&apos;abord vous transmettre une vision qui va se
            matérialiser par une carte.
            <br /> En premier lieu il s&apos;agira de retrouver l&apos;arme du
            crime, puis le lieu et enfin le ou la coupable...
          </p>
        </div>
        <div>
          <h3>Carte armes, lieux et suspects</h3>
          <img src="https://via.placeholder.com/800x450" alt="screenshots" />
          <p>
            Vous devrez ensuite comparer la ou les cartes visions précédemment
            obtenues afin d&apos;identifier l&apos;arme, puis le lieu et enfin
            le coupable. chaque fois que vous trouvez la bonne réponse, vous
            passez à l&apos;étape suivante. Si vous ne trouvez pas, une nouvelle
            carte vision est distribuée.
          </p>
        </div>
        <div>
          <h3>Temps imparti</h3>
          <img src="https://via.placeholder.com/800x450" alt="screenshots" />
          <p>
            Vous avez 1 minute pour faire votre choix à chaque fois qu&apos;une
            carte vision est distribuée. Si vous n&apos;avez pas fait de choix à
            la fin du temps imparti, vous ne trouvez pas la bonne réponse et une
            carte vision vous est donnée.
          </p>
        </div>
        <div>
          <h3>Fin de la partie</h3>
          <img src="https://via.placeholder.com/800x450" alt="screenshots" />
          <p>
            Lorsque vous aurez réunis toute les preuves et trouvé le coupable
            vous apaiserez mes tourments et je pourrais alors cesser de hanter
            ces lieux. Si l&apos;on ne parvient pas à identifier mon tueur je
            crains que mon esprits ne deviennent incontrôlable...
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Rule;
