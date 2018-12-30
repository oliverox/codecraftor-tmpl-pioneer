import React from 'react';
import styled from 'styled-components';
import { H2, Paragraph } from '../../components';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from 'react-icons/md';

const StyledFeaturesBlock = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100px;
  background-color: ${({ theme }) =>
    theme ? theme.colors.background : 'inherit'};
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
  padding: 35px 35px 50px 35px;
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 500px 500px;
`;

const FeatureContainer = styled.div`
  display: flex;
  padding: 20px;
  min-height: 400px;
  flex-direction: column;
  border-right: ${({ index, theme }) => (index % 2 ? 'none' : `1px dashed ${theme ? theme.colors.dark : 'black'}`)};
  border-bottom: ${({ index, theme }) => (index > 1 ? 'none' : `1px dashed ${theme ? theme.colors.dark : 'black'}`)};
`;

const FeatureImg = styled.div`
  height: 170px;
  text-align: center;
`;

const FeaturesBlock = ({ theme, features }) => {
  return (
    <StyledFeaturesBlock theme={theme}>
      <ContentContainer theme={theme}>
        <Grid>
          {features.map((feature, key) => {
            return (
              <FeatureContainer key={`ftr-${key}`} index={key} theme={theme}>
                <FeatureImg>{feature.image}</FeatureImg>
                <H2>{feature.title}</H2>
                <Paragraph theme={theme}>{feature.description}</Paragraph>
              </FeatureContainer>
            );
          })}
        </Grid>
      </ContentContainer>
    </StyledFeaturesBlock>
  );
};

FeaturesBlock.defaultProps = {
  features: [
    {
      title: 'Feature Un',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooksOne size="10em" />
    },
    {
      title: 'Feature Deux',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooksTwo size="10em" />
    },
    {
      title: 'Feature Trois',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooks3 size="10em" />
    },
    {
      title: 'Feature Quatre',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooks4 size="10em" />
    }
  ]
};

export default FeaturesBlock;
