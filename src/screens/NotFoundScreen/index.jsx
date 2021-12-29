import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../../components/commons/Button';
import Text from '../../components/foundation/text';
import Box from '../../components/foundation/layout/Box';
import ContentBox from '../../components/commons/ContentBox';

const NotFoundScreen = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100%"
  >
    <ContentBox>
      <Text
        color="secondary.main"
        tag="span"
        variant="paragraph1"
        textAlign="center"
      >
        OPS! Página não encontrada!
      </Text>
      <Button
        variant="secondary.main"
        href="/"
      >
        <Text
          color="primary.main"
          tag="span"
          variant="paragraph1"
          textAlign="center"
        >
          Voltar ao início
        </Text>
      </Button>
    </ContentBox>
  </Box>
);

NotFoundScreen.propTypes = {

};

export default NotFoundScreen;
