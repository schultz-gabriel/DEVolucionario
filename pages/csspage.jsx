import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Css from '../src/screens/CssPage';

function CSSPage() {
  return (
    <Css />
  );
}

export default websitePageHOC(CSSPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'CSS',
    },
  },
});
