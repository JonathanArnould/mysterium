import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChoiceContext from '../../ChoiceContext';
import { GlassMagnifier } from 'react-image-magnifiers';
import '../../../../styles/css/component/ZoomCard.css';

const ZoomCard = ({ className, content }) => {
  const { choiceContextValue, updateChoice } = useContext(ChoiceContext);

  useEffect(() => {
    content && content.name && updateChoice(content.id);
  }, [content]);

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
