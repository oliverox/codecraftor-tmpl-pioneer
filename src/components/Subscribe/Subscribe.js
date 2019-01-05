import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';

const SubscribeSection = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: ${({ layoutStyle }) =>
    layoutStyle === 'column' ? 'column' : 'row'};
`;

const SubscribeSectionTextContainer = styled.div`
  padding-right: ${({ layoutStyle }) =>
    layoutStyle === 'column' ? 0 : '80px'};
`;

const SubscribeSectionTitle = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 10px;
  text-transform: uppercase;
`;

const SubscribeSectionText = styled.span`
  font-size: 16px;
  line-height: 26px;
  font-family: ${props =>
    props.theme ? props.theme.font.family[1] : 'inherit'};
`;

const SubscribeSectionEmailContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

const SubscribeSectionEmailInput = styled.input`
  flex: 1;
  border: 2px solid ${({ theme }) => (theme ? theme.colors.dark : 'inherit')};
  border-right: 0;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  letter-spacing: 1px;
`;

const Subscribe = ({
  theme,
  layoutStyle,
  subscribeSectionTitle,
  subscribeSectionText,
  subscribeButtonFontStyle,
  subscribeButtonBackgroundStyle
}) => {
  return (
    <SubscribeSection layoutStyle={layoutStyle}>
      <SubscribeSectionTextContainer layoutStyle={layoutStyle}>
        <SubscribeSectionTitle>{subscribeSectionTitle}</SubscribeSectionTitle>
        <SubscribeSectionText theme={theme}>
          {subscribeSectionText}
        </SubscribeSectionText>
      </SubscribeSectionTextContainer>
      <SubscribeSectionEmailContainer layoutStyle={layoutStyle}>
        <SubscribeSectionEmailInput
          placeholder="Email address"
          type="email"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          theme={theme}
        />
        <Button
          withBorder={true}
          backgroundStyle={subscribeButtonBackgroundStyle}
          fontStyle={subscribeButtonFontStyle}
          theme={theme}
        >
          Subscribe
        </Button>
      </SubscribeSectionEmailContainer>
    </SubscribeSection>
  );
};

Subscribe.defaultProps = {
  layoutStyle: 'column',
  subscribeButtonFontStyle: 'dark',
  subscribeButtonBackgroundStyle: 'primary',
  subscribeSectionTitle: 'Stay up to date',
  subscribeSectionText: `The Pioneer Tournament runs monthly. Enter your email 
  to get occasional updates from us, including when we open our doors again for 
  applicants.`
};

export default Subscribe;
