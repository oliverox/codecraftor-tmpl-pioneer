import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
font-size: 3em;
line-height: 50px;
letter-spacing: 1px;
`;

const H1 = ({ text, children }) => {
  return (
    <StyledH1>{text ? text : children}</StyledH1>
  )
};

export default H1;