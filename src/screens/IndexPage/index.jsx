import React from 'react';
import IndexWrapper from './style/IndexWrapper';
import Text from '../../components/foundation/text';

export default function Main() {
  return (
    <IndexWrapper>
      <Text
        variant="title"
        tag="h1"
        color="primary.main"
        textAlign={{
          md: 'center',
        }}
        margin="1rem"
        textShadow="2px 2px 2px black"
      >
        SEJA BEM-VINDO!
      </Text>
    </IndexWrapper>
  );
}
