/* eslint-disable max-len */
import React from 'react';
import IndexWrapper from './style/IndexWrapper';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import Link from '../../components/foundation/link';
// import welcome from './animations/welcome';

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
      >
        BEM-VINDO!
      </Text>
      <TextArea>
        <TextArea.ContentCol>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign="justify"
            margin="1rem"
            // textShadow="2px 2px 2px black"
            padding={{
              md: '2rem',
            }}
            textJustify="justify"
          >
            Se você está aqui, é porque está dando seus primeiros mergulhos em tecnologia. Ficamos muito felizes com isso, e nos unimos para ajudar você nesse incrível início de jornada e criamos essa biblioteca de materiais que irá auxiliá-lo. Desejamos uma maravilhosa imersão dev a todos!
          </Text>
          <div className="links">
            <Link href="/htmlpage">HTML</Link>
            <Link href="/csspage">CSS</Link>
            <Link href="/jspage">JAVASCRIPT</Link>
          </div>
        </TextArea.ContentCol>
        <TextArea.DecorativeCol
          maxWidth="30%"
        >
          <img src="/images/saly.png" alt="" />
        </TextArea.DecorativeCol>
      </TextArea>
    </IndexWrapper>
  );
}
