module.exports = {
    title: "静静是只猫",
    description: "just palying around",
    themeConfig: {
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
                    '/vue/one'
                ]
            }
        ]
    }
}