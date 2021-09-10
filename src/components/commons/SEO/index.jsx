import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Aluralunos';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;

  const description = 'Saiba como dar os primeiros passos no mundo da programação com essa iniciativa dos alunos da alura!';
  const image = 'https://media.cuponeria.com.br/2020/07/63f02582-cupom-de-desconto-alura.png';
  const urlBase = 'https://aluralunos.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
