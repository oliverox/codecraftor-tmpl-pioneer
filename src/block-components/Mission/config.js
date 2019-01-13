export default {
  name: 'Mission',
  type: 'Mission',
  icon: 'crown',
  desc: 'A section to clearly display your mission statement (or any quote).',
  config: [
    {
      prop: 'content',
      label: 'Mission statement',
      type: 'string',
      value:
        'Regard man as a mine rich in gems of inestimable value. Education can, alone, cause it to reveal its treasures, and enable mankind to benefit there from.',
      placeholder: 'Type a mission statement'
    },
    {
      prop: 'backgroundStyle',
      label: 'Background color',
      type: 'dropdown',
      value: 'transparent',
      list: [
        {
          name: 'Transparent',
          value: 'transparent'
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
      prop: 'showBottomBorder',
      label: 'Show bottom section border?',
      type: 'yesno',
      value: true
    }
  ]
};
