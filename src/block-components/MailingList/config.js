export default {
  name: 'Mailing List',
  type: 'MailingList',
  icon: 'envelope',
  desc: 'A section for collecting email addresses of your visitors.',
  config: [
    {
      prop: 'subscribeButtonBackgroundStyle',
      label: 'Button background color',
      type: 'dropdown',
      value: 'background',
      list: [
        {
          name: 'Background',
          value: 'background'
        },
        {
          name: 'Primary',
          value: 'primary'
        },
        {
          name: 'Secondary',
          value: 'secondary'
        },
        {
          name: 'Tertiary',
          value: 'tertiary'
        },
        {
          name: 'Quaternary',
          value: 'quaternary'
        }
      ]
    },
    {
      prop: 'subscribeButtonFontColor',
      label: 'Button font color',
      type: 'dropdown',
      value: 'secondary',
      list: [
        {
          name: 'Primary',
          value: 'primary'
        },
        {
          name: 'Secondary',
          value: 'secondary'
        },
        {
          name: 'Tertiary',
          value: 'tertiary'
        },
        {
          name: 'Quaternary',
          value: 'quaternary'
        },
        {
          name: 'Light',
          value: 'light'
        },
        {
          name: 'Dark',
          value: 'dark'
        }
      ]
    },
    {
      prop: 'subscribeSectionText',
      label: 'Subscribe text',
      type: 'string',
      multiline: true,
      value:
        'Interested to learn more about what we do? Enter your email to receive our bi-weekly updates.'
    },
    {
      prop: 'withBottomBorder',
      label: 'Show bottom border?',
      type: 'yesno',
      value: true
    }
  ]
};
