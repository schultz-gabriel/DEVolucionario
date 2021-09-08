import React from 'react';
import FooterWrapper from './style/FooterWrapper';
import Text from '../../foundation/text';

export default function Nav() {
  return (
    <FooterWrapper>
      <Text
        variant="paragraph1"
        tag="p"
        color="secondary.main"
        textAlign={{
          xs: 'center',
        }}
        margin="0"
        padding={{
          md: '1rem',
        }}
      >
        Aluralunos &copy; - 2021
      </Text>
    </FooterWrapper>
  );
}
