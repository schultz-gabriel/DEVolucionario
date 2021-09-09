import React from 'react';
import Box from '../../components/foundation/layout/Box';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import IndexWrapper from '../IndexPage/style/IndexWrapper';
import WrapperLinks from './style';

const JSONQUALQUER = [
  {
    titulo: 'Utilidades',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, a.',
    link: 'https://www.google.com/',
  },
  {
    titulo: 'Utilidades',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, a.',
    link: 'https://www.google.com/',
  },
];

function Javascript() {
  return (
    <IndexWrapper>
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        textAlign="center"
        margin="1rem"
      >
        JAVASCRIPT
      </Text>
      <TextArea>
        <TextArea.ContentCol>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign={{
              xs: 'justify',
            }}
          >
            Enquanto, em geral, HTML é para conteúdo e CSS é para apresentação,
            JavaScript é para interatividade.
            Originalmente projetado para adicionar pequenas quantidades de interatividade
            a uma página (como focos e animações), o JavaScript agora é usado para quase tudo,
            até grandes aplicativos e jogos.
          </Text>
          <WrapperLinks>
            {JSONQUALQUER.map((item) => (
              <li key={item.titulo}>
                <a
                  href={item.link}
                  title={item.titulo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    className="link"
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    padding="20px"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      textAlign="left"
                    >
                      <Text
                        variant="subTitle"
                        tag="p"
                        color="secondary.main"
                        textAlign="left"
                      >
                        {item.titulo}
                      </Text>
                      <Text
                        variant="paragraph1"
                        tag="p"
                        color="secondary.main"
                        textAlign="justify"
                      >
                        {item.descricao}
                      </Text>
                    </Box>
                    <svg className="arrow" width="55" height="50" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                </a>
              </li>
            ))}
          </WrapperLinks>
        </TextArea.ContentCol>
      </TextArea>
    </IndexWrapper>
  );
}

export default Javascript;
