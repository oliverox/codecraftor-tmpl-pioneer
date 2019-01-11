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
      value: 'Pioneer'
    },
    {
      prop: 'showSubscribeSection',
      label: 'Display "Subscribe" section?',
      type: 'yesno',
      value: true
    },
    {
      prop: 'subscribeSectionTitle',
      label: 'Subscribe section title',
      type: 'string',
      value: 'Stay up to date',
      placeholder: 'Type a title'
    },
    {
      prop: 'subscribeSectionText',
      label: 'Subscribe section outline',
      type: 'string',
      value:
        'The Pioneer Tournament runs monthly. Enter your email to get occasional updates from us, including when we open our doors again for applicants.',
      placeholder: 'Type a short outline'
    },
    {
      prop: 'title',
      label: 'Section title',
      type: 'string',
      value: 'A home for the ambitious outsiders of the world',
      placeholder: 'Type a title'
    },
    {
      prop: 'subtitle',
      label: 'Section subtitle',
      type: 'string',
      value:
        "We're building a community of creative young people working on interesting projects around the globe.",
      placeholder: 'Type a subtitle'
    },
    {
      prop: 'showBottomBorder',
      label: 'Show bottom section border?',
      type: 'yesno',
      value: true
    }
  ]
};
