import React from 'react';
import styled from 'styled-components';
import { Link } from '../../components';

const StyledFooterBlock = styled.section`
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
  justify-content: center;
  align-items: center;
`;

const CopyrightInfo = styled.div`
  flex: 1;
  font-family: ${props =>
    props.theme ? props.theme.font.family[1] : 'inherit'};
  color: ${props => (props.theme ? props.theme.colors.background : 'inherit')};
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  padding: 12px;
  text-transform: uppercase;
`;

const FooterBlock = ({
  theme,
  showCopyrightInfo,
  copyrightText,
  footerMenu
}) => {
  return (
    <StyledFooterBlock theme={theme}>
      <ContentContainer>
        {showCopyrightInfo && (
          <CopyrightInfo theme={theme}>{copyrightText}</CopyrightInfo>
        )}
        <FooterMenu>
          {footerMenu.map((footer, key) => {
            return (
              <StyledLink key={key} goto={footer.goto} theme={theme}>
                {footer.label}
              </StyledLink>
            );
          })}
        </FooterMenu>
      </ContentContainer>
    </StyledFooterBlock>
  );
};

FooterBlock.defaultProps = {
  showCopyrightInfo: true,
  copyrightText: '© 2019 Codecraftor',
  footerMenu: [
    {
      label: 'Twitter',
      goto: '#'
    },
    {
      label: 'FAQ',
      goto: '#'
    },
    {
      label: 'About us',
      goto: '#'
    },
    {
      label: 'Privacy',
      goto: '#'
    },
    {
      label: 'Terms',
      goto: '#'
    }
  ]
};

export default FooterBlock;
