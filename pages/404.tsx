import React from 'react';
import websitePageHOC from '../src/wrappers/websitePage/hoc/index';
import NotFoundScreen from '../src/screens/HomeScreen';

export default function NotFound() {
  return (
    <NotFoundScreen />
  );
}
// fazer o header props false
websitePageHOC(NotFound, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404 - não encontrado',
    },
  },
});
