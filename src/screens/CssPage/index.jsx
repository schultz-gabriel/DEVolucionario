import React from 'react';
import Box from '../../components/foundation/layout/Box';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import IndexWrapper from '../IndexPage/style/IndexWrapper';
import WrapperLinks from './style';
import Links from '../../../Links';

function Css() {
  return (
    <IndexWrapper>
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        textAlign="center"
        margin="1rem"
      >
        CSS
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
            CSS existe para estilizar seu HTML - para apresentar seu conteúdo.
            A linguagem das Cascading Style Sheets é um pouco diferente do HTML,
            mas permanece simples e direta.
          </Text>
          <WrapperLinks>
            {Links.css.map((item) => (
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
                    alignItems="center"
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
                        textShadow="2px 2px 3px black"
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

export default Css;
