import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: ${({ withBorder, theme, borderStyle }) =>
    withBorder ? `2px solid ${theme.colors[borderStyle]}` : 0}
  color: ${({ theme, fontStyle }) =>
    theme ? theme.colors[fontStyle] : '#000'};
  background-color: ${({ theme, backgroundStyle }) =>
    theme ? theme.colors[backgroundStyle] : '#fff'};
`;

const Button = ({ theme, withBorder, fontStyle, borderStyle, backgroundStyle, children }) => {
  return (
    <StyledButton
      fontStyle={fontStyle}
      backgroundStyle={backgroundStyle}
      withBorder={withBorder}
      borderStyle={borderStyle}
      theme={theme}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  withBorder: false,
  fontStyle: 'primary',
  borderStyle: 'dark',
  backgroundStyle: 'light'
};

export default Button;
