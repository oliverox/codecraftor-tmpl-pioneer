import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const StyledRoot = styled.div`
  flex: 1;
  width: 100%;
  padding-bottom: 140px;
  box-sizing: border-box;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-family: "${({ fontFamily }) => fontFamily}";
    font-size: ${({ fontSize }) => fontSize};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = ({ fontFamily, fontSize, backgroundColor, children }) => {
  return (
    <>
      <GlobalStyle
        backgroundColor={backgroundColor}
        fontFamily={fontFamily}
        fontSize={fontSize}
      />
      <StyledRoot>{children}</StyledRoot>
    </>
  );
};

Root.defaultProps = {
  backgroundColor: '#fff',
  fontFamily: 'Open Sans',
  fontSize: '12px'
};

export default Root;
