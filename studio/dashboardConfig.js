export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609e9a2661eaec000c111d71',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-opipc1y3',
                  apiId: '7b9d671c-f429-4049-a068-dbeba5c00d6e'
                },
                {
                  buildHookId: '609e9a26af8de30dc98b1d66',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xbacwng8',
                  apiId: '20a2f5dc-cbe3-431d-825c-d17caca74228'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ddrango19/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xbacwng8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
