import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/css/component/Card.css';

const Card = ({
  card,
  className,
  id,
  classNameImage,
  handleClick,
  handleZoom,
}) => {
  return (
    <div className={className} id={id}>
      {/* eslint-disable */}

      <img
        src={card.image}
        alt={card.name}
        className={classNameImage}
        onClick={() => handleZoom()}
        aria-hidden="true"
      />
    </div>
  );
};

Card.defaultProps = {
  card: {},
  className: null,
  id: null,
  classNameImage: null,
  handleClick: null,
};

Card.propTypes = {
  card: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  classNameImage: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Card;
