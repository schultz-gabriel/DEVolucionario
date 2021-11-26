import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import WrapperContributorsData from './style';
import ContentBox from '../../components/commons/ContentBox';

function SobrePage({ contributorsData }) {
  return (
    <ContentBox>
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        textAlign="center"
        margin="1rem"
      >
        Sobre Nós
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
            Somos alunos da Alura e também começamos nossas jornadas nas imersões passadas.
            Nós não teríamos chegado até aqui sem ajuda dos
            colegas e da comunidade da Alura, por isso, fazemos questão de ajudar você,
            pois ninguém chega a lugar algum sozinho. Abaixo, você encontra o Github dos
            alunos que ajudaram a criar esse projeto.
          </Text>
          <WrapperContributorsData>
            {contributorsData.map((contributor) => {
              if (contributor.login === 'dependabot[bot]') {
                return null;
              }

              return (
                <Tooltip
                  title={contributor.login}
                  key={contributor.login}
                  arrow
                >
                  <a href={contributor.html_url} target="_blank" rel="noreferrer">
                    <img
                      src={contributor.avatar_url}
                      alt={`Foto de perfil de ${contributor.login}`}
                      className="drop-target"
                    />
                    <span>
                      github.com/
                      {contributor.login}
                    </span>
                  </a>
                </Tooltip>
              );
            })}
          </WrapperContributorsData>
        </TextArea.ContentCol>
      </TextArea>
    </ContentBox>
  );
}

export default SobrePage;

SobrePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contributorsData: PropTypes.array,
};

SobrePage.defaultProps = {
  contributorsData: [],
};
