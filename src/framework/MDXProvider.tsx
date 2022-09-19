// @ts-nocheck
import { MDXProvider as Provider } from '@mdx-js/react';
import type React from 'react';
import { LinkWithPreview } from '../components/LinkWithPreview';
import { Typography } from '@mui/material';

const components = {
  h1: ({ children }) => <Typography variant='h1'>{children}</Typography>,
  h2: ({ children }) => <Typography variant='h2'>{children}</Typography>,
  h3: ({ children }) => <Typography variant='h3'>{children}</Typography>,
  h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
  h5: ({ children }) => <Typography variant='h5'>{children}</Typography>,
  h6: ({ children }) => <Typography variant='h6'>{children}</Typography>,
  a: (props) => <LinkWithPreview path={props.href}> {props.children}</LinkWithPreview>
};

export const MDXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider components={components}>
    {children}
  </Provider>
);