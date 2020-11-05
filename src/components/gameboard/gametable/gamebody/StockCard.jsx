import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({ className, id, content }) => {
  const handleClick = (e) => {
    e.target.parentNode.parentNode.classList.toggle('show');
  };
  return (
    <div className={`StockCard ${className}`}>
      <div className="StockCard" id={id}>
        <button type="button" className="open" onClick={handleClick}>
          OPEN
        </button>
        <button type="button" className="close" onClick={handleClick}>
          CLOSE
        </button>
        {content}
      </div>
    </div>
  );
};
StockCard.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StockCard;
