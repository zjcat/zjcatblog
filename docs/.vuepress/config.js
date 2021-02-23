module.exports = {
    title: "静静是只猫",
    description: "just palying around",
    themeConfig: {
        smoothScroll:true,
        nav: [{
            text: "指南",
            link: "/vue/vue.md"
        }, ],
        sidebar: [
            '/zh/',
            {
                title:"vue",
                path:'/vue/',
                children:[
                    '/vue/one',
                    '/vue/two',
                    '/vue/three',
                    '/vue/four',
                    '/vue/five',
                    '/vue/six',
                    '/vue/other'
                ]
            }
        ]
    }
}