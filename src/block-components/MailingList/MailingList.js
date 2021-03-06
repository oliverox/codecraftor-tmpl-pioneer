import React from 'react';
import styled from 'styled-components';
import { Subscribe } from '../../base-components';

const StyledMailingListBlock = styled.section`
  display: flex;
  color: ${props => (props.theme ? props.theme.colors.dark : 'inherit')}
  min-height: 50px;
  justify-content: center;
  background-color: ${props =>
    props.theme ? props.theme.colors.background : 'inherit'};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 1140px;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  padding: 35px 35px 50px 35px;
  border-bottom: ${({ withBottomBorder, theme }) =>
    withBottomBorder ? `2px solid ${theme.colors.dark}` : '0'}};
`;

const MailingList = ({
  theme,
  withBottomBorder,
  subscribeButtonFontColor,
  subscribeButtonBackgroundStyle,
  subscribeSectionText
}) => {
  return (
    <StyledMailingListBlock theme={theme}>
      <ContentContainer theme={theme} withBottomBorder={withBottomBorder}>
        <Subscribe
          theme={theme}
          layoutStyle="row"
          subscribeButtonFontStyle={subscribeButtonFontColor}
          subscribeButtonBackgroundStyle={subscribeButtonBackgroundStyle}
          subscribeSectionText={subscribeSectionText}
        />
      </ContentContainer>
    </StyledMailingListBlock>
  );
};

MailingList.defaultProps = {
  withBottomBorder: true,
  subscribeButtonFontColor: 'background',
  subscribeButtonBackgroundStyle: 'secondary',
  subscribeSectionText:
    'Interested to learn more about what we do? Enter your email to receive our bi-weekly updates.'
};

export default MailingList;
