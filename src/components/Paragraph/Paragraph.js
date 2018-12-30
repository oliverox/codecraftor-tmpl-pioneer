import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => (theme ? theme.font.family[1] : 'inherit')};
`;

const Paragraph = ({ theme, children }) => {
  return <StyledParagraph theme={theme}>{children}</StyledParagraph>;
};

export default Paragraph;
