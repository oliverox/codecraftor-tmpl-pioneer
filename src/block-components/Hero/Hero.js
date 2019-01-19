import React from 'react';
import styled from 'styled-components';
import { H1, Logo, Subscribe } from '../../base-components';

const StyledHeroBlock = styled.section`
  display: flex;
  color: ${props => (props.theme ? props.theme.colors.light : 'inherit')}
  min-height: 50px;
  justify-content: center;
  background-color: ${props =>
    props.theme ? props.theme.colors.dark : 'inherit'};
`;

const StyledH1 = styled(H1)`
  font-family: "${props => props.theme ? props.theme.font.family[0] : 'Rajdhani'}";
  font-size: 3em;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1140px;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  padding: 35px 35px 50px 35px;
  border-bottom: ${props =>
    props.showBottomBorder && props.theme.colors ? `2px solid ${props.theme.colors.background}` : 0};
`;

const StyledSubtitle = styled.span`
  font-size: 19px;
  line-height: 32px;
  font-family: ${props =>
    props.theme ? props.theme.font.family[1] : 'inherit'};
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 50px;
`;

const RightSection = styled.div`
  width: 350px;
  background-position: left;
  background-size: 2px 6px;
  background-repeat: repeat-y;
  background-image: linear-gradient(
    ${props => (props.theme ? props.theme.colors.light : '#f00')} 30%,
    rgba(255, 255, 255, 0) 0%
  );
`;

const HeroBlock = ({
  theme,
  showLogo,
  logoTitle,
  showSubscribeSection,
  title,
  subTitle,
  subscribeSectionTitle,
  subscribeSectionText,
  showBottomBorder
}) => {
  return (
    <StyledHeroBlock theme={theme}>
      <ContentContainer theme={theme} showBottomBorder={showBottomBorder}>
        <LeftSection>
          {showLogo && <Logo theme={theme} title={logoTitle} />}
          <StyledH1>{title}</StyledH1>
          <StyledSubtitle theme={theme}>{subTitle}</StyledSubtitle>
        </LeftSection>
        {showSubscribeSection && (
          <RightSection theme={theme}>
            <Subscribe
              theme={theme}
              subscribeSectionTitle={subscribeSectionTitle}
              subscribeSectionText={subscribeSectionText}
            />
          </RightSection>
        )}
      </ContentContainer>
    </StyledHeroBlock>
  );
};

HeroBlock.defaultProps = {
  showLogo: true,
  logoTitle: 'Company Name',
  showSubscribeSection: false,
  subscribeSectionTitle: 'Subscribe me please',
  subscribeSectionText: 'Enter your email below to subscribe to our newsletter.',
  title: 'Beyond the impossible',
  subTitle: 'We develop amazing things at an amazing pace.',
  showBottomBorder: false
};

export default HeroBlock;
