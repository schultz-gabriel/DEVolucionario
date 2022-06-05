/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';

import { HocProps } from './types';

export default function websitePageHOC(
  PageComponent:any,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props:HocProps) => (
    <WebsitePageWrapper
      {...pageWrapperProps}
      {...props.pageWrapperProps}
      toggleTheme={props.toggleTheme}
      theme={props.theme}
    >
      <PageComponent {...props} />
    </WebsitePageWrapper>
  );
}
