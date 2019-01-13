export default {
  name: 'Features',
  type: 'Features',
  icon: 'clean',
  desc: 'A list of features or highlights.',
  config: [
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
      prop: 'featureImgBackgroundStyle',
      label: 'Image background color',
      type: 'dropdown',
      value: 'dark',
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
        },
        {
          name: 'Dark',
          value: 'dark'
        },
        {
          name: 'Light',
          value: 'light'
        }
      ]
    },
    {
      prop: 'features',
      label: 'Features',
      type: 'list',
      schema: [
        {
          prop: 'title',
          label: 'Title',
          type: 'string'
        },
        {
          prop: 'description',
          label: 'Description',
          type: 'string'
        },
        {
          prop: 'image',
          label: 'Image',
          type: 'string'
        }
      ],
      value: [
        {
          title: 'Elegant and beautiful templates',
          image: '',
          description: 'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, saperet fierent sea ut.'
        },
        {
          title: 'Clean code',
          image: '',
          description: 'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, saperet fierent sea ut.'
        },
        {
          title: 'Support is just a message away',
          image: '',
          description: 'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, saperet fierent sea ut.'
        },
        {
          title: 'Customizable themes and components',
          image: '',
          description: 'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat. Nihil delenit mea at. Illud epicurei euripidis ea eos, saperet fierent sea ut.'
        }
      ]
    }
  ]
};
