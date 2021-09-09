import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Javascript from '../src/screens/JsPage';

function JSPage() {
  return (
    <Javascript />
  );
}

export default websitePageHOC(JSPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'JAVASCRIPT',
    },
  },
});
