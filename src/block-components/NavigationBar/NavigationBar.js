import React from 'react';
import styled from 'styled-components';
import { Link } from '../../base-components';

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${props => (props.theme ? props.theme.colors.light : 'inherit')};
  background-color: ${props =>
    props.theme ? props.theme.colors.dark : 'inherit'};
`;

const StyledNavigationBar = styled.nav`
  width: 100%;
  height: 58px;
  display: flex;
  max-width: 1140px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const LinkContainer = styled.div`
  padding: 12px;
`;

const NavigationBarBlock = ({ theme, menuLinks }) => {
  return (
    <NavContainer theme={theme}>
      <StyledNavigationBar theme={theme}>
        {menuLinks.map((item, key) => (
          <LinkContainer key={`navbarItem-${key}`}>
            <Link goto={item.goto} theme={theme}>
              {item.label}
            </Link>
          </LinkContainer>
        ))}
      </StyledNavigationBar>
    </NavContainer>
  );
};

NavigationBarBlock.defaultProps = {
  menuLinks: [
    {
      label: 'Home',
      goto: '#'
    },
    {
      label: 'Features',
      goto: '#'
    },
    {
      label: 'Team',
      goto: '#'
    }
  ]
};

export default NavigationBarBlock;
