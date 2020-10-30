import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  return <img src={data.image} alt={data.image} />;
};

Card.propTypes = {
  data: PropTypes.shape({ image: PropTypes.string.isRequired }).isRequired,
};

export default Card;
