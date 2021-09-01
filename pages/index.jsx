import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Main from '../src/screens/IndexPage';

function Home() {
  return (
    <Main />
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
