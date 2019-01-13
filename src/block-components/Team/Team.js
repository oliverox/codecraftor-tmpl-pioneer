import React from 'react';
import styled from 'styled-components';
import { H2, Button, StyledParagraph, StyledText } from '../../base-components';

const StyledTeamBlock = styled.section`
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

const Excerpt = styled.div`
  float: left;
  display: flex;
  width: 530px;
  margin-right: 40px
  flex-direction: column;
`;

const ExcerptText = styled(StyledParagraph)`
  line-height: 32px;
`;

const MemberContainer = styled.div`
  float: left;
  width: 241px;
  padding-right: 40px;
  padding-bottom: 40px;
`;

const MemberPhoto = styled.img`
  width: 237px;
  height: 237px;
  border: 2px solid black;
`;

const MemberName = styled.span`
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px dotted;
`;

const MemberDept = styled(StyledText)`
  display: block;
  line-height: 30px;
  font-style: italic;
`;

const MemberRole = styled(StyledText)`
  line-height: 25px;
`;

const ActionButtonContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
`;

const TeamBlock = ({ theme, backgroundStyle, ...props }) => {
  let numMembersToShow = Math.min(6, props.members.length);
  const teamMembers = [];
  if (!props.showExcerpt) {
    numMembersToShow = Math.min(8, props.members.length);
  }
  for (let i = 0; i < numMembersToShow; i++) {
    teamMembers.push(props.members[i]);
  }
  return (
    <StyledTeamBlock theme={theme} backgroundStyle={backgroundStyle}>
      <ContentContainer>
        {props.showExcerpt && (
          <Excerpt>
            <H2>{props.excerptTitle}</H2>
            <ExcerptText theme={theme}>{props.excerptText}</ExcerptText>
          </Excerpt>
        )}
        {teamMembers.map((member, key) => (
          <MemberContainer key={key}>
            <MemberPhoto src={member.photoUrl} alt={member.name} />
            <MemberName theme={theme}>{member.name}</MemberName>
            <MemberDept theme={theme}>{member.department}</MemberDept>
            <MemberRole theme={theme}>{member.role}</MemberRole>
          </MemberContainer>
        ))}
        {((props.showExcerpt && props.members.length > 6) ||
          (!props.showExcerpt && props.members.length > 8)) && (
          <ActionButtonContainer>
            <Button
              theme={theme}
              fontStyle="dark"
              backgroundStyle="background"
              withBorder={true}
            >
              {props.actionButtonLabel}
            </Button>
          </ActionButtonContainer>
        )}
      </ContentContainer>
    </StyledTeamBlock>
  );
};

TeamBlock.defaultProps = {
  backgroundStyle: 'transparent',
  showExcerpt: false,
  excerptTitle: 'World class team members',
  excerptText:
    'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat.',
  members: [
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Isabelle Gardiner',
      department: 'Design',
      role: 'Head of design'
    },
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Aaliya Stokes',
      department: 'Design',
      role: 'UX designer'
    },
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Nikki Mooney',
      department: 'Engineering',
      role: 'Lead developer'
    },
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Owen Arias',
      department: 'Engineering',
      role: 'Senior developer'
    },
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Matt Salgado',
      department: 'Engineering',
      role: 'Junior developer'
    },
    {
      photoUrl: 'https://codecraftor.com/images/pioneer/team-placeholder.jpg',
      name: 'Sulaiman Gomez',
      department: 'Marketing',
      role: 'Sales and marketing rep'
    }
  ],
  actionButtonLabel: 'See all',
  actionButtonLinkTo: '#'
};

export default TeamBlock;
