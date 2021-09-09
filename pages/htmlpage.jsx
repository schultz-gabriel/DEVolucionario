import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Html from '../src/screens/HtmlPage';

function HTMLPage() {
  return (
    <Html />
  );
}

export default websitePageHOC(HTMLPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'HTML',
    },
  },
});
