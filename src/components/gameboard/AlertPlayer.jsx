import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/component/AlertPlayer.css';

const AlertPlayer = ({ count, chance, handleAlert }) => {
  let alertTitle;
  let alertMessage;

  if (count === 1) {
    alertTitle = " l'arme du crime !";
    alertMessage =
      'Saurez-vous trouver dans quelle pièce a été commis cet effroyable meurtre ?';
  } else {
    alertTitle = ' le lieu du crime !';
    alertMessage =
      ' Le dénouement est proche... Il est temps de démasquer le coupable !';
  }
  return (
    <div className="AlertPlayer modal-container">
      <div className="alert-container">
        {chance && (
          <h2 className="alert-title">
            Manqué ! Mais le fantôme vous communique une ultime vision ...
          </h2>
        )}
        {!chance && (
          <h2 className="alert-title">
            Félicitations, vous avez trouvé {alertTitle}
          </h2>
        )}
        {!chance && <p className="alert-message">{alertMessage}</p>}

        <button className="alert-button" type="button" onClick={handleAlert}>
          OK
        </button>
      </div>
    </div>
  );
};

AlertPlayer.propTypes = {
  count: PropTypes.number.isRequired,
  chance: PropTypes.bool.isRequired,
  handleAlert: PropTypes.func.isRequired,
};
export default AlertPlayer;
