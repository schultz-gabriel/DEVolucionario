import React from 'react';
import Box from '../../components/foundation/layout/Box';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import IndexWrapper from '../IndexPage/style/IndexWrapper';
import WrapperLinks from './style';
import Links from '../../../Links';

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
            {Links.javascript.map((item) => (
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
                        tag="h3"
                        color="secondary.main"
                        textAlign="left"
                        textShadow="2px 2px 3px #808080"
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
                    <Box
                      display="grid"
                      placeItems="center"
                    >
                      <svg className="arrow" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Box>
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
