/* eslint-disable func-names */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return function (props) {
    return (
      <WebsiteGlobalProvider>
        <WebsitePageWrapper
          {...pageWrapperProps}
          {...props.pageWrapperProps}
          toggleTheme={props.toggleTheme}
        >
          <PageComponent {...props} />
        </WebsitePageWrapper>
      </WebsiteGlobalProvider>
    );
  };
}
