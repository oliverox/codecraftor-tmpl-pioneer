export default {
  name: 'Team',
  type: 'Team',
  icon: 'mugshot',
  desc: 'A section to display your team members.',
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
      prop: 'showExcerpt',
      label: 'Show excerpt',
      type: 'yesno',
      value: false
    },
    {
      prop: 'excerptTitle',
      label: 'Excerpt',
      type: 'string',
      value: 'World class team members'
    },
    {
      prop: 'excerptText',
      label: 'Excerpt text',
      type: 'string',
      value: 'Lorem ipsum dolor sit amet, in delenit maiestatis qui, ei vis posse porro. Minimum suscipit delectus id sit, pro diam paulo te. Mea rebum vocibus et, at hinc dicat consul cum, at cum eius intellegebat.'
    },
    {
      prop: 'members',
      label: 'Members',
      type: 'list',
      schema: [
        {
          prop: 'photoUrl',
          label: 'Photo',
          type: 'string'
        },
        {
          prop: 'name',
          label: 'Name',
          type: 'string'
        },
        {
          prop: 'department',
          label: 'Department',
          type: 'string'
        },
        {
          prop: 'role',
          label: 'Role',
          type: 'string'
        }
      ],
      value: [
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Isabelle Gardiner',
          department: 'Design',
          role: 'Head of design'
        },
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Aaliya Stokes',
          department: 'Design',
          role: 'UX designer'
        },
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Nikki Mooney',
          department: 'Engineering',
          role: 'Lead developer'
        },
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Owen Arias',
          department: 'Engineering',
          role: 'Senior developer'
        },
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Matt Salgado',
          department: 'Engineering',
          role: 'Junior developer'
        },
        {
          photoUrl:
            'https://d1zhjck9imo0be.cloudfront.net/assets/views/landing/experts/hollis-robbins@2x-be5617c3c82ff6b3d241b00877a26f9e9c313a5c44dd0b6c965f4a0f875a1a1c.jpg',
          name: 'Sulaiman Gomez',
          department: 'Marketing',
          role: 'Sales and marketing rep'
        }
      ]
    }
  ]
};
