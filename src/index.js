import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import WebFontLoader from 'webfontloader';
import { createGlobalStyle } from 'styled-components'
import Template from './Template';
import config from './config';
import 'normalize.css';

const { theme, layout } = config();

WebFontLoader.load({
  google: {
    families: theme.font.family
  }
});

console.log('theme=', theme);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.font.family[0]};
    font-size: ${theme.font.size};
    color: ${theme.colors.dark};
    -webkit-font-smoothing: antialiased;
  }
  #root {
    display: flex;
    justify-content: center;
  }
`
ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Codecraftor - Pioneer Template</title>
      <link rel="canonical" href="https://codecraftor.com" />
    </Helmet>
    <GlobalStyle />
    <Template theme={theme} layout={layout} />
  </>,
  document.getElementById('root')
);
