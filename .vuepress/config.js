module.exports = {
    base: '/',
    title: 'Bifrost Wiki ',
    description: 'bifrost developer',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon_icon.png' }]
    ],
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'Bifrost Wiki',
            description: "Bifrost Developer Documentation",
        },
    },
    themeConfig: {
        displayAllHeaders: true,
        search: true,
        locales: {
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit Page',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    },
                },
                nav: [
                    {text: 'Home', link: 'https://bifrost.finance'},
                    {
                        text: 'Documentation',
                        items: [
                          {text: 'Developer', link: 'https://developer.bifrost.finance'},
                          {text: 'Whitepaper',  link: 'https://whitepaper.bifrost.finance'},
                          {text: 'Wiki', link: 'https://wiki.bifrost.finance'},
                        ],
                    },
                    {text: 'GitHub', link: 'https://github.com/bifrost-finance'},
                ],
                sidebar: [
                    
                     {
                    title: 'General',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        {   
                            title: 'Getting Started',
                            children: [ 
                            {title:'What is Bifrost', path:'/en/getting_started/01_overview.md'},
                            {title:'Why Bifrost?', path:'/en/getting_started/01_run_bifrost_node.md'},
                            {title:'How does Bifrost work?', path:'/en/getting_started/02_run_bifrost_node.md'},
                            {title:'Why should you use Bifrost?', path:'/en/getting_started/03_run_bifrost_node.md'}   
                              ]
                        },
                        {title:'Glossary',path:'/en/others/glossary.md'}, 
                        {
                            title: 'Frequently Asked Questions (FAQs)',
                            children: [ 
                            {title:'Launch', path:'en/others/launch.md'},
                            {title:'Roadmap', path:'en/others/roadmap.md'}
                              ]
                        },
                    ],
                },
                    {
                        title: 'Learn',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/getting_started/01_run_bifrost_front_end.md', 'Launch Phases'],
                            ['/en/getting_started/02_run_bifrost_front_end.md', 'Basics'],
                        ],
                    },

                    {
                        title: 'Develop',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/others/environment.md', 'Environment'],
                            ['/en/cross-chain/build.md', 'Build & Run'],
                            ['/en/cross-chain/rococo.md', 'Rococo'],
                            ['/en/cross-chain/asgard.md', 'Asgard'],
                            ['/en/cross-chain/poa.md', 'PoA Network'],
                            ['/en/cross-chain/bifrostJS.md', 'BifrostJS'],
                        ],
                    },
                    
                    {
                        title: 'Research',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/cross-chain/zenlink.md', 'Zenlink'],
                            ['/en/cross-chain/bancor.md', 'Bancor'],
                            ['/en/cross-chain/balancer.md', 'Balancer'],  
                        ],
                    },

                    {
                        title: 'Publicity',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            {title:'Token Distribution', path:'/en/rpc/token.md'},
                            {title:'Progress', path:'/en/rpc/progress.md'},
                            {title:'Contribute', path:'/en/others/contribute.md'},  
                        {
                               title: 'vToken Minting History',
                                children: [
                                {title:'vETH', path:'/en/rpc/veth.md'},
                                {title:'vEOS', path:'/en/rpc/veos.md'},
                                {title:'vDOT', path:'/en/rpc/vdot.md'},
                                {title:'vKSM', path:'/en/rpc/vksm.md'}
                            ],
                        },
                    ],
                },
            {
                title: 'Governance',
                collapsable: true,
                sidebarDepth: 0,
                children: [
                    ['/en/rpc/Committee.md', 'Technical Committee'],
                ],
            },

            {
                title: 'Activity',
                collapsable: true,
                sidebarDepth: 0,
                children: [
                    ["en/others/create-module-for-bifrost.md", "Hello" ]
                ],
            },

                ],
            },
        },
    },
}