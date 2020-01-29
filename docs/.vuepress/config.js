module.exports = {
    base: '/VuePress-Simple-Docs/',
    title: 'My Docs Site',
    description: 'My Documentation for My Site',
    smoothScroll: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Me', link: 'https://github.com/moaalaa' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'courses',
                'development',
            ]
        }
    },
}
