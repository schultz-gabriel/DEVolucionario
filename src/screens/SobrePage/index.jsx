import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import TextArea from '../../components/foundation/layout/TextArea';
import Text from '../../components/foundation/text';
import IndexWrapper from '../IndexPage/style/IndexWrapper';
import WrapperContributorsData from './style';

function SobrePage({ contributorsData }) {
  return (
    <IndexWrapper>
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
            Velit consequat reprehenderit non fugiat labore anim et.
            Reprehenderit nulla amet sit ex minim occaecat sint qui
            mollit velit eu. Elit tempor ullamco nostrud magna esse
            quis veniam incididunt pariatur anim ipsum velit. Ipsum
            ullamco amet esse anim ex enim.
            Velit consequat reprehenderit non fugiat labore anim et.
            Reprehenderit nulla amet sit ex minim occaecat sint qui
            mollit velit eu. Elit tempor ullamco nostrud magna esse
            quis veniam incididunt pariatur anim ipsum velit. Ipsum
            ullamco amet esse anim ex enim.
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
    </IndexWrapper>
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
