import React from 'react';
import PropTypes from 'prop-types';
import { GlassMagnifier } from 'react-image-magnifiers';
import '../../../../styles/css/component/Card.css';

const Card = ({ card, className, id, classNameImage, handleClick }) => {
  return (
    <div className={className} id={id}>
      {/* eslint-disable */}

      {className.indexOf('zoomcard-card') === 0 ? (
        <GlassMagnifier
          imageSrc={card.image}
          alt={card.name}
          magnifierSize="150"
        />
      ) : (
        <img
          src={card.image}
          alt={card.name}
          className={classNameImage}
          onClick={handleClick}
          aria-hidden="true"
        />
      )}
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
