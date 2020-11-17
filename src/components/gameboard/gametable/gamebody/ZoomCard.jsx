import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MurderContext from '../../MurderContext';
import ChoiceContext from '../../ChoiceContext';
import '../../../../styles/css/component/ZoomCard.css';

const ZoomCard = ({ className, content }) => {
  const { charWeaponPlace } = useContext(MurderContext);
  const { choiceContextValue, updateChoice } = useContext(ChoiceContext);

  const handleChoice = (e) => {
    const idChoice = e.target.parentNode.parentNode.id.slice(-1);

    updateChoice({
      places: Number(idChoice),
      weapons: null,
      characters: null,
    });

    if (
      choiceContextValue.choices.places !== null &&
      choiceContextValue.choices.places === charWeaponPlace.place.content.id
    ) {
      charWeaponPlace.place.isFound = true;
    }
  };

  return (
    <div
      onClick={handleChoice}
      role="button"
      className={`zoomcard ${className}`}
      tabIndex={0}
      aria-hidden="true"
    >
      {content}
    </div>
  );
};

ZoomCard.defaultProps = {
  className: null,
  content: null,
};

ZoomCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

export default ZoomCard;
