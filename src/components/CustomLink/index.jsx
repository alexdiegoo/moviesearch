import React from 'react';
import { 
  Link, 
  useMatch,
  useResolvedPath } from 'react-router-dom';
import { colors } from '../../GlobalStyle';

const CustomLink = ({ children, to, ...props}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link style={{ 
      textDecoration: 'none', 
      color: colors.text,
      borderBottom: match ? `3px solid ${colors.primary}` : 'none',
      paddingBottom: 10}} to={to} {...props}>
      {children}
    </Link>
  );
}

export default CustomLink;