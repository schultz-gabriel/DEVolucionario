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
            textAlign={{
              xs: 'left',
            }}
            margin="1rem"
            // textShadow="2px 2px 2px black"
            padding={{
              md: '2.5rem',
            }}
            textJustify="justify"
          >
            A imersão dev_ será divida em 10 aulas gratuitas para você poder aprender a criar seus primeiros códigos e começar a sua carreira em programação. Esse site tem o intuito de reunir vários materiais sobre HTML, CSS e JS para auxiliar os alunos nessa jornada!
          </Text>
          <div className="links">
            <Link href="/htmlpage">HTML</Link>
            <Link href="/index">CSS</Link>
            <Link href="/index">JS</Link>
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
