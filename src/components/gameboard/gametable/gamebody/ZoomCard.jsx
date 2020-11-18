import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MurderContext from '../../MurderContext';
import ChoiceContext from '../../ChoiceContext';
import StepContext from '../../StepContext';
import '../../../../styles/css/component/ZoomCard.css';

const ZoomCard = ({ className, content }) => {
  const { charWeaponPlace } = useContext(MurderContext);
  const { choiceContextValue, updateChoice } = useContext(ChoiceContext);
  const { stepContextValue, updateStepValue } = useContext(StepContext);

  const handleChoice = (e) => {
    const idChoice = e.target.parentNode.parentNode.id.slice(-1);

    updateChoice({
      places: null,
      weapons: Number(idChoice),
      characters: null,
    });

    if (
      choiceContextValue.choices.weapons !== null &&
      choiceContextValue.choices.weapons === charWeaponPlace.weapon.content.id
    ) {
      charWeaponPlace.weapon.isFound = true;

      let currentStep = '';
      let stepNumber = '';
      const newStep = { step1: false, step2: false, step3: false };

      /* eslint-disable */
      for (const property in stepContextValue.step) {
        currentStep = stepContextValue.step[property] && property;

        if (currentStep === property) {
          stepNumber = currentStep.slice(-1);

          if (stepNumber <= 2) {
            newStep[`step${Number(stepNumber) + 1}`] = true;
          } else {
            newStep.step3 = true;
          }
        }
      }

      updateStepValue(newStep);
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
