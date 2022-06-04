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
      color: match ? colors.primary : colors.text,
      fontSize: '1.5rem'}} to={to} {...props}>
      {children}
    </Link>
  );
}

export default CustomLink;