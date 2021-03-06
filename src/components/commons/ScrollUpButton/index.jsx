import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../../foundation/text';

function ScrollButton({ children, ghost }) {
  const isGhost = Boolean(ghost);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} variant="primary.main" fullWidth margin="1rem 0" ghost={isGhost}>
      <Text
        variant="paragraph1"
        tag="span"
        color="secondary.main"
        textAlign={{
          xs: 'center',
        }}
        margin="0"
      >
        {children}
      </Text>
    </Button>
  );
}

ScrollButton.propTypes = {
  children: PropTypes.node.isRequired,
  ghost: PropTypes.bool,
};

ScrollButton.defaultProps = {
  ghost: false,
};

export default ScrollButton;
