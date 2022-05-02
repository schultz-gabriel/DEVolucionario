import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../foundation/layout/Grid';

import ContentWrapper from './style/ContentWrapper';

function ContentBox(props) {
  const { children } = props;
  return (
    <Grid.Container>
      <Grid.Row
        marginTop={{ xs: '32px', md: '120px' }}
        flex="1"
      >
        <Grid.Col
          value={{ xs: 12, md: 10, lg: 8 }}
          offset={{ md: 1, lg: 2 }}
          flex={1}
        >
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentBox;
