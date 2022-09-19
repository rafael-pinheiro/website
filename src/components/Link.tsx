import { Link as MLink, LinkProps as MLinkProps } from '@mui/material';
import React from 'react';
import { forwardRef } from 'react';
import { Link as RLink } from "react-router-dom";

export interface LinkProps extends MLinkProps {
  to: string;
}



export const Link: React.FC<LinkProps> = ({ children, to, className, ...props }) => {

  const ActualLink = forwardRef<HTMLAnchorElement, { children: React.ReactNode }>(
    ({ children }, ref) => <RLink ref={ref} className={className} to={to}>{children}</RLink>
  );
  return (
    <MLink
      component={ActualLink}
      color='primary'
      underline='none'
      {...props}
    >
      {children}
    </MLink>
  );
}