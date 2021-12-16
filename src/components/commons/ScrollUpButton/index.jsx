import React from 'react';
import Button from '../Button';
import Text from '../../foundation/text';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} variant="primary.main" fullWidth margin="1rem 0">
      <Text
        variant="paragraph1"
        tag="span"
        color="secondary.main"
        textAlign={{
          xs: 'center',
        }}
        margin="0"
      >
        Voltar ao topo
      </Text>
    </Button>
  );
};

export default ScrollButton;
