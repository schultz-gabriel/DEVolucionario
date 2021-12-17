import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import BlogScreen from '../src/screens/BlogScreen';

function Home() {
  return (
    <BlogScreen />
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Blog',
    },
  },
});
