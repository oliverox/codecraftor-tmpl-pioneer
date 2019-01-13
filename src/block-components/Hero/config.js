export default {
  name: 'Hero',
  type: 'Hero',
  icon: 'comment',
  desc:
    'A large captivating title and headline. Optionally reveal a user subscription component.',
  config: [
    {
      prop: 'showLogo',
      label: 'Display logo?',
      type: 'yesno',
      value: true
    },
    {
      prop: 'logoTitle',
      label: 'Logo title',
      type: 'string',
      value: 'Company Name'
    },
    {
      prop: 'title',
      label: 'Section title',
      type: 'string',
      value: 'Beyond the impossible',
      placeholder: 'Type a title'
    },
    {
      prop: 'subTitle',
      label: 'Section subtitle',
      type: 'string',
      value: 'We develop amazing things at an amazing pace.',
      placeholder: 'Type a sub title'
    },
    {
      prop: 'showSubscribeSection',
      label: 'Display "Subscribe" section?',
      type: 'yesno',
      value: false
    },
    {
      prop: 'subscribeSectionTitle',
      label: 'Subscribe me',
      type: 'string',
      value: 'Subscribe me please',
      placeholder: 'Type a subscription title'
    },
    {
      prop: 'subscribeSectionText',
      label: 'Subscribe section outline',
      type: 'string',
      multiline: true,
      value: 'Enter your email below to subscribe to our newsletter.',
      placeholder: 'Type a short outline'
    },
    {
      prop: 'showBottomBorder',
      label: 'Show bottom section border?',
      type: 'yesno',
      value: false
    }
  ]
};
