import React from 'react';
import styled from 'styled-components';
import { H2, Paragraph } from '../../base-components';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from 'react-icons/md';

const StyledFeaturesBlock = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100px;
  background-color: ${({ theme, backgroundStyle }) =>
    theme ? theme.colors[backgroundStyle] : 'inherit'};
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
  border-right: ${({ index, theme }) =>
    index % 2 ? 'none' : `1px dashed ${theme ? theme.colors.dark : 'black'}`};
  border-bottom: ${({ index, theme }) =>
    index > 1 ? 'none' : `1px dashed ${theme ? theme.colors.dark : 'black'}`};
`;

const FeatureImg = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: ${({ theme, featureImgBackgroundStyle }) =>
    theme ? theme.colors[featureImgBackgroundStyle] : 'transparent'};
`;

const FeaturesBlock = ({
  theme,
  features,
  backgroundStyle,
  featureImgBackgroundStyle
}) => {
  return (
    <StyledFeaturesBlock theme={theme} backgroundStyle={backgroundStyle}>
      <ContentContainer theme={theme}>
        <Grid>
          {features.map((feature, key) => {
            return (
              <FeatureContainer key={`ftr-${key}`} index={key} theme={theme}>
                <FeatureImg
                  theme={theme}
                  featureImgBackgroundStyle={featureImgBackgroundStyle}
                >
                  {typeof feature.image === 'string' &&
                  feature.image.length > 0 ? (
                    <img src={feature.image} alt="Feature" width={460} />
                  ) : (
                    feature.image
                  )}
                </FeatureImg>
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
  backgroundStyle: 'transparent',
  featureImgBackgroundStyle: 'dark',
  features: [
    {
      title: 'Elegant and beautiful templates',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooksOne size="10em" fill="#FFE44B" />
    },
    {
      title: 'Clean code',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooksTwo size="10em" fill="#FFE44B" />
    },
    {
      title: 'Support is just a message away',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooks3 size="10em" fill="#FFE44B" />
    },
    {
      title: 'Customizable themes and components',
      description: `Lorem ipsum dolor sit amet, in delenit maiestatis qui,
        ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo 
        te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius 
        intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, 
        saperet fierent sea ut.`,
      image: <MdLooks4 size="10em" fill="#FFE44B" />
    }
  ]
};

export default FeaturesBlock;
