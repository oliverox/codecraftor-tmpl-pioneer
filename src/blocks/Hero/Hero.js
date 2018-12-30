import React from 'react';
import styled from 'styled-components';
import { H1, Logo, Button } from '../../components';

const StyledHeroBlock = styled.section`
  display: flex;
  color: ${props => (props.theme ? props.theme.colors.light : 'inherit')}
  min-height: 50px;
  justify-content: center;
  background-color: ${props =>
    props.theme ? props.theme.colors.dark : 'inherit'};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1140px;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  padding: 35px 35px 50px 35px;
  border-bottom: 2px solid
    ${props => (props.theme ? props.theme.colors.background : '#fff')};
`;

const StyledSubtitle = styled.span`
  font-size: 19px;
  line-height: 32px;
  font-family: ${props =>
    props.theme ? props.theme.font.family[1] : 'inherit'};
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  width: 300px;
  padding: 50px;
  background-position: left;
  background-size: 2px 6px;
  background-repeat: repeat-y;
  background-image: linear-gradient(${props => (props.theme ? props.theme.colors.light : '#f00')} 30%, rgba(255, 255, 255, 0) 0%);
`;

const RightSectionTitle = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 10px;
  text-transform: uppercase;
`;

const RightSectionText = styled.span`
  font-size: 16px;
  line-height: 26px;
  font-family: ${props =>
    props.theme ? props.theme.font.family[1] : 'inherit'};
`;

const RightSectionEmailContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const RightSectionEmailInput = styled.input`
  flex: 1;
  border: 0;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  margin-right: 2px;
  letter-spacing: 1px;
`;

const HeroBlock = ({
  theme,
  showLogo,
  showSubscribeSection,
  title,
  subTitle,
  subscribeSectionTitle,
  subscribeSectionText
}) => {
  return (
    <StyledHeroBlock theme={theme}>
      <ContentContainer theme={theme}>
        <LeftSection>
          {showLogo && <Logo theme={theme} />}
          <H1>{title}</H1>
          <StyledSubtitle theme={theme}>{subTitle}</StyledSubtitle>
        </LeftSection>
        {showSubscribeSection && (
          <RightSection theme={theme}>
            <RightSectionTitle>{subscribeSectionTitle}</RightSectionTitle>
            <RightSectionText theme={theme}>
              {subscribeSectionText}
            </RightSectionText>
            <RightSectionEmailContainer>
              <RightSectionEmailInput
                placeholder="Email address"
                type="email"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
              />
              <Button intent="background" theme={theme}>
                Subscribe
              </Button>
            </RightSectionEmailContainer>
          </RightSection>
        )}
      </ContentContainer>
    </StyledHeroBlock>
  );
};

HeroBlock.defaultProps = {
  showLogo: true,
  showSubscribeSection: true,
  subscribeSectionTitle: 'Stay up to date',
  subscribeSectionText:
    'The Pioneer Tournament runs monthly. Enter your email to get occasional updates from us, including when we open our doors again for applicants.',
  title: 'A home for the ambitious outsiders of the world',
  subTitle:
    'We’re building a community of creative young people working on interesting projects around the globe.'
};

export default HeroBlock;
