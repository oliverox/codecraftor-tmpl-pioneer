import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 2em;
  margin: 0.3em 0;
`;

const H2 = ({ text, children }) => {
  return (
    <StyledH2>{text ? text : children}</StyledH2>
  )
};

export default H2;