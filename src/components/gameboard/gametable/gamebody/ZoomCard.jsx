import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MurderContext from '../../MurderContext';
import ChoiceContext from '../../ChoiceContext';
import StepContext from '../../StepContext';
import {
  MagnifierContainer,
  Magnifier,
  GlassMagnifier,
} from 'react-image-magnifiers';
import '../../../../styles/css/component/ZoomCard.css';
import Card from './Card';

const ZoomCard = ({ className, content }) => {
  const { charWeaponPlace } = useContext(MurderContext);
  const { choiceContextValue, updateChoice } = useContext(ChoiceContext);
  const { stepContextValue, updateStepValue } = useContext(StepContext);

  useEffect(() => {
    content && updateChoice(content.id);
  }, [content]);

  /* const [choices, setChoices] = useState({});
   */

  // const handleChoice = (e) => {
  //   const idChoice = e.target.parentNode.parentNode.id.slice(-1);

  //   updat
  //     const newStep = { step1: false, step2: false, step3: false };
  /* eChoice({ */
  //     places: null,
  //     weapons: Number(idChoice),
  //     characters: null,
  //   });

  //   if (
  //     choiceContextValue.choices.weapons !== null &&
  //     choiceContextValue.choices.weapons === charWeaponPlace.weapon.content.id
  //   ) {
  //     charWeaponPlace.weapon.isFound = true;

  //     let currentStep = '';
  //     let stepNumber = '';
  //     /* eslint-disable */
  //     for (const property in stepContextValue.step) {
  //       currentStep = stepContextValue.step[property] && property;

  //       if (currentStep === property) {
  //         stepNumber = currentStep.slice(-1);

  //         if (stepNumber <= 2) {
  //           newStep[`step${Number(stepNumber) + 1}`] = true;
  //         } else {
  //           newStep.step3 = true;
  //         }
  //       }
  //     }

  //     updateStepValue(newStep);
  //   }
  // };
  return (
    <div className={`zoomcard ${className}`}>
      <div className="zoomcard-card">
        {content && (
          <GlassMagnifier
            imageSrc={content.image}
            imageAlt={content.name}
            magnifierSize="150"
          />
        )}
      </div>
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
