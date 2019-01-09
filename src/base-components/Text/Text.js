import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => (theme ? theme.font.family[1] : 'inherit')};
`;

const Text = ({ theme, children }) => {
  return <StyledText theme={theme}>{children}</StyledText>;
};

export default Text;
export { StyledText };
