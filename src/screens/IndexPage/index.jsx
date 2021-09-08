/* eslint-disable max-len */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import IndexWrapper from './style/IndexWrapper';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import welcome from './animations/welcome';

export default function Main() {
  return (
    <IndexWrapper>
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        textAlign={{
          md: 'center',
        }}
        margin="1rem"
        // textShadow="2px 2px 2px black"
      >
        BEM-VINDO!
      </Text>
      <TextArea>
        <TextArea.ContentCol>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              xs: 'left',
            }}
            margin="1rem"
            // textShadow="2px 2px 2px black"
            padding={{
              md: '3rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TextArea.ContentCol>
        <TextArea.DecorativeCol
          width="30%"
        >
          <Lottie
            width="100%"
            height="100%"
            config={{ animationData: welcome, loop: true, autoplay: true }}
          />
        </TextArea.DecorativeCol>
      </TextArea>
    </IndexWrapper>
  );
}
