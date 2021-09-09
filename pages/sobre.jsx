import React from 'react';
import PropTypes from 'prop-types';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import SobrePage from '../src/screens/SobrePage';

function Sobre({ contributorsData }) {
  return (
    <SobrePage contributorsData={contributorsData} />
  );
}

export default websitePageHOC(Sobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre Nós',
    },
  },
});

export async function getStaticProps() {
  const url = 'https://api.github.com/repos/SchultzGabriel/Aluralunos/contributors';
  const githubApiKey = process.env.GITHUB_API_KEY;
  const headers = {
    Authorization: `token ${githubApiKey}`,
  };

  const contributorsData = await fetch(url, {
    method: 'GET',
    headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Erro ao pegar dados da api.');
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));

  return {
    props: {
      contributorsData,
    },
  };
}

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contributorsData: PropTypes.array,
};

Sobre.defaultProps = {
  contributorsData: [],
};
