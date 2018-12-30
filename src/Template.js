import React from 'react';
import styled from 'styled-components';
import { Hero, Features, NavigationBar } from './blocks';

const StyledTemplate = styled.div`
  width: 100%;
  background-color: ${props =>
    props.theme ? props.theme.colors.background : '#fff'};
`;

const Template = ({ theme, layout }) => {
  return (
    <StyledTemplate theme={theme}>
      <NavigationBar theme={theme} layout={layout} />
      <Hero theme={theme} showSubscribeSection={true} />
      <Features theme={theme} />
    </StyledTemplate>
  );
};

export default Template;
