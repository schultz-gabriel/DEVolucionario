import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Studies from '../src/screens/studiesPage';

function Home() {
  return (
    <Studies />
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Estudos',
    },
  },
});
