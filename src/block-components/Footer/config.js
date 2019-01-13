export default {
  name: 'Footer',
  type: 'Footer',
  icon: 'widget-footer',
  desc: 'A footer section with copyright information and a bunch of links.',
  config: [
    {
      prop: 'showCopyrightInfo',
      label: 'Show copyright text?',
      type: 'yesno',
      value: true
    },
    {
      prop: 'copyrightText',
      label: 'Copyright text',
      type: 'string',
      value: '© 2019 Codecraftor',
      placeholder: 'Type a copyright text'
    },
    {
      prop: 'menuLinks',
      label: 'Menu links',
      type: 'list',
      schema: [
        {
          prop: 'label',
          label: 'Label',
          type: 'string'
        },
        {
          prop: 'goto',
          label: 'Links to',
          type: 'string'
        }
      ],
      value: [
        {
          label: 'Twitter',
          goto: '#'
        },
        {
          label: 'FAQ',
          goto: '#'
        },
        {
          label: 'About us',
          goto: '#'
        },
        {
          label: 'Privacy',
          goto: '#'
        },
        {
          label: 'Terms',
          goto: '#'
        }
      ]
    }
  ]
};
