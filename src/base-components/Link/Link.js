import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  letter-spacing: 1.2px;
  text-decoration: none;
  font-weight: bold;
  color: ${props => (props.theme ? props.theme.colors.light : '#000')};
  &:hover {
    color: #fff;
  }
`;

const Link = ({ theme, label, goto, newPage, className, children }) => {
  let target = '_self';
  if (newPage) {
    target = '_blank';
  }
  return (
    <StyledLink className={className} href={goto} target={target} theme={theme}>
      {label ? label : children}
    </StyledLink>
  );
};

Link.defaultProps = {
  goto: '#',
  className: '',
  newPage: false,
  children: 'I am a <Link/> component'
};

export default Link;
