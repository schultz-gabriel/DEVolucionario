/* eslint-disable import/prefer-default-export */
import React from 'react';

export default ({ color }) => (
  <svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="14" fill={color} />
    <rect y="30" width="100" height="14" fill={color} />
    <rect y="60" width="100" height="14" fill={color} />
  </svg>
);
