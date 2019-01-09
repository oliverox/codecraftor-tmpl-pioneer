import React from 'react';
import styled from 'styled-components';
import {
  Hero,
  Team,
  Features,
  Mission,
  NavigationBar,
  MailingList,
  Footer
} from './block-components';

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
      <Team theme={theme} />
      <Mission theme={theme} />
      <MailingList theme={theme} withBottomBorder={false} />
      <Footer theme={theme} />
    </StyledTemplate>
  );
};

export default Template;
