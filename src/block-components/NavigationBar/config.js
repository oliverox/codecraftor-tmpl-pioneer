export default {
  name: 'Navigation Bar',
  type: 'NavigationBar',
  icon: 'widget-header',
  desc: 'A navigation bar composed of links to other pages.',
  config: [{
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
        label: 'Home',
        goto: '#'
      },
      {
        label: 'Features',
        goto: '#'
      },
      {
        label: 'Team',
        goto: '#'
      }
    ]
  }]
};
