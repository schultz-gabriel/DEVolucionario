import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import NotFoundScreen from '../src/screens/NotFoundScreen';

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
