import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return <h1>My page</h1>;
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
