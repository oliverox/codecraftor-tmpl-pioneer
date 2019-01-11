import React from 'react';
import styled from 'styled-components';
import { H2 } from '../../base-components';

const StyledMissionBlock = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100px;
  background-color: ${({ theme, backgroundStyle }) =>
    theme ? theme.colors[backgroundStyle] : 'inherit'};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1140px;
  margin-bottom: 10px;
  justify-content: center;
  padding: 45px 35px 50px 35px;
  border-bottom: ${props =>
    props.showBottomBorder && props.theme.colors ? `2px solid ${props.theme.colors.background}` : 0};
`;

const ConstrainedText = styled.div`
  line-height: 50px;
  letter-spacing: 1px;
  max-width: 650px;
`;

const MissionBlock = ({
  theme,
  backgroundStyle,
  content,
  showBottomBorder
}) => {
  return (
    <StyledMissionBlock theme={theme} backgroundStyle={backgroundStyle}>
      <ContentContainer theme={theme} showBottomBorder={showBottomBorder}>
        <ConstrainedText>
          <H2>{content}</H2>
        </ConstrainedText>
      </ContentContainer>
    </StyledMissionBlock>
  );
};

MissionBlock.defaultProps = {
  backgroundStyle: 'transparent',
  showBottomBorder: true,
  content: 'The world is but one country and mankind its citizens.'
};

export default MissionBlock;
