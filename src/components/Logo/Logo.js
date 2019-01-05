import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from './default-logo.svg';

const StyledLogo = styled.div`
  display: flex;
  font-size: 35px;
  font-family: ${props => props.theme ? props.theme.font.family[1] : 'inherit'};
  font-weight: bolder;
  letter-spacing: 1px;
  align-items: center;
  text-transform: uppercase;
  color: ${props => (props.theme ? props.theme.colors.light : 'inherit')};
`;

const LogoContainer = styled.div`
  padding: 12px;
  margin-right: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme ? props.theme.colors.primary : '#fff'};
`;

const Logo = ({ theme, title, Svg }) => {
  return (
    <StyledLogo theme={theme}>
      <LogoContainer theme={theme}>
        <Svg />
      </LogoContainer>
      <span>{title}</span>
    </StyledLogo>
  );
};

Logo.defaultProps = {
  title: 'Pioneer',
  Svg: LogoSvg
};

export default Logo;
