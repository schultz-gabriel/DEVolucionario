/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Box from '../../components/foundation/layout/Box';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import IndexWrapper from '../IndexPage/style/IndexWrapper';
import Link from '../../components/foundation/link';

export default function Studies() {
  return (
    <IndexWrapper>
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        textAlign="center"
        margin="1rem"
      >
        GUIA DE ESTUDOS
      </Text>
      <TextArea>
        <TextArea.ContentCol
          fullWidth
        >
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign="left"
            margin="1rem"
            padding={{
              md: '2rem',
            }}
          >
            Na vida, tudo tem um começo, e o primeiro passo é o mais importante para a conquista de um grande futuro.
            Ao iniciar essa jornada, você pode se deparar com as mais diversas dificuldades, e esse artigo tem como objetivo lhe
            ensinar como superar algumas dessas barreiras, mostrando o caminho das pedras para os iniciantes em programação.
          </Text>
        </TextArea.ContentCol>
        <Text
          variant="subTitle"
          tag="h2"
          color="secondary.main"
          textAlign="center"
          margin="1rem"
          width="100%"
        >
          O CAMINHO DA FORÇA
        </Text>
        <TextArea.ContentCol>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign="left"
            margin="1rem"
            padding={{
              md: '2rem',
            }}
          >
            Se você é iniciante na área da programação, pode estar se perguntando por onde começar seus estudos.
            Antes de tudo, é preciso saber
            <strong> como </strong>
            começar.
            <br />
            Muitos começam a estudar e logo ficam perdidos por não saber o caminho a trilhar.
            Esse é um grande erro dos devs iniciantes, por isso, procure saber exatamente em que etapa você se encontra em sua jornada.
            Após, procure entender o que você precisa aprender para chegar ao próximo nível.
            <br />
            <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/omariosouto/awesome-dev-guide-devsoutinho"
              color="primary.main"
            >
              Veja um exemplo de guia para JavaScript.
            </Link>
            <br />
            <br />
            Procure mais guias como este e use-os para montar sua própria rotina de estudo.
            Procure mais guias como este e use-os para montar sua própria rotina de estudo.
          </Text>
        </TextArea.ContentCol>
        <TextArea.DecorativeCol
          maxWidth="30%"
        >
          <Box
            width="70%"
          >
            <img src="/images/yoda.png" alt="" />
          </Box>
          <Text
            variant="paragraph2"
            tag="p"
            color="secondary.main"
            textAlign="left"
          >
            "Faça ou não faça. Tentativa não há."
          </Text>
          <Text
            variant="paragraph2"
            tag="p"
            color="secondary.main"
            padding="5px"
          >
            -Mestre Yoda
          </Text>
        </TextArea.DecorativeCol>
        <Text
          variant="subTitle"
          tag="h2"
          color="secondary.main"
          textAlign="center"
          margin="1rem"
          width="100%"
        >
          DEV - O ANIMAL POLÍTICO
        </Text>
        <TextArea.DecorativeCol
          maxWidth="30%"
        >
          <Box
            width="100%"

          >
            <img src="/images/aristoteles.png" alt="" />
          </Box>
          <Text
            variant="paragraph2"
            tag="p"
            color="secondary.main"
            textAlign="left"
          >
            “A dúvida é o principio da sabedoria e onde encontramos ideias.”
          </Text>
          <Text
            variant="paragraph2"
            tag="p"
            color="secondary.main"
            padding="5px"
          >
            -Aristoteles
          </Text>
        </TextArea.DecorativeCol>
        <TextArea.ContentCol>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            textAlign="left"
            margin="1rem"
            padding={{
              md: '2rem',
            }}
          >
            A essas alturas, você já deve ter entendido isso, mas vamos repetir só pra garantir:
            <strong> você não vai a lugar algum sozinho</strong>
            !
            <br />
            Daremos ênfase sempre que possível ao fato de que todo dev precisa de ajuda, independente do nível em que se encontra.
            <br />
            Portanto, integre-se à comunidade! Participe de fóruns, acompanhe eventos e notícias, saiba quais são as linguagens e frameworks da moda e seja um membro ativo nesse balaio de gatos que é a comunidade dev.
            <br />
            Uma grande vantagem de estudar na Alura é justamente sua comunidade unida e ativa, oque facilita muito o aprendizado enquanto se interage com professores e colegas.
          </Text>
        </TextArea.ContentCol>
      </TextArea>
    </IndexWrapper>
  );
}
