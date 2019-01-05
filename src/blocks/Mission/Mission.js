import React from 'react';
import styled from 'styled-components';
import { H2 } from '../../components';

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
  border-bottom: 2px solid;
  padding: 45px 35px 50px 35px;
`;

const ConstrainedText = styled.div`
  line-height: 50px;
  letter-spacing: 1px;
  max-width: 650px;
`;

const MissionBlock = ({ theme, backgroundStyle, content }) => {
  return (
    <StyledMissionBlock theme={theme} backgroundStyle={backgroundStyle}>
      <ContentContainer>
        <ConstrainedText>
          <H2>{content}</H2>
        </ConstrainedText>
      </ContentContainer>
    </StyledMissionBlock>
  );
};

MissionBlock.defaultProps = {
  backgroundStyle: 'quaternary',
  content: `The world is full of extraordinarily creative people that are 
  struggling to fit in. They find their current life is too bland. They’ve 
  read all the books in the local library. They don’t find lectures engaging. 
  They just want to go somewhere more interesting, where they can be with peers 
  that will motivate them. Our goal is to provide the necessary funding, 
  guidance and community in order to nurture those minds into the great 
  scientists, artists and entrepreneurs of the future.`
};

export default MissionBlock;
