export default {
  name: 'Mission',
  type: 'Mission',
  icon: 'crown',
  desc: 'A section to clearly display your mission statement, vision, or any quote.',
  config: [
    {
      prop: 'content',
      label: 'Visionary statement',
      type: 'string',
      value: 'Your vision statement should be an audacious dream of a future reality based on the work you do. It should be bursting-at-the-seams with possibility. It’s where “begin with the end in mind” lives. It’s the heart and DNA construct of your organization. Your vision should be so big, it feels nearly impossible. Your vision should require people to dream.',
      placeholder: 'Type some visionary stuff'
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
