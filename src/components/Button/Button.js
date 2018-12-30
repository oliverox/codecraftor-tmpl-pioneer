import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme, intent }) =>
    theme && intent === 'primary' ? theme.colors.light : theme.colors.dark};
  background-color: ${({ theme, intent }) =>
    intent && theme ? theme.colors[intent] : theme.colors.background};
`;

const Button = ({ theme, intent, children }) => {
  return (
    <StyledButton intent={intent} theme={theme}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  intent: 'primary'
};

export default Button;
