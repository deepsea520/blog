/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  lang: 'zh-CN', // 站点的 lang 属性 default: "en-US"
  title: 'deepsea', // 页面标题
  titleTemplate: '深海', // 标题的后缀 eg: 'title | titleTemplate' default: false
  description: 'FrontEnd 前端开发 深海侃前端 深海 Deepsea',
  appearance: true, // 是否开启暗夜主题 default: "true"
  base: '/blog/', // 部署站点的 URL default: "/"
  lastUpdated: true, //显示页面的最后更新时间 default: false
  markdown: {}, // Markdown 相关配置
  outDir: './.vitepress/dist', // 站点的构建输出位置 default: './.vitepress/dist'
  cleanUrls: 'with-subfolders', // 允许从 URL 中删除后面的“.html” default: 'disabled' | 'without-subfolders' | 'with-subfolders'
  // 主题配置
  themeConfig: {
    logo: '/logo2.png', // 需要展示的 logo
    siteTitle: 'Deepsea', // logo 旁的标题，不需要时设为 false
    outlineTitle: 'In hac pagina',
    // 右侧导航栏
    nav: [
      // { text: 'demo', link: '/demo' } 单个导航
      {
        text: '基础',
        activeMatch: '/basic/',
        items: [
          { 
            text: 'HTML',
            link: '/basic/html/',
            activeMatch: '/basic/html/'
          },
          { 
            text: 'CSS',  
            link: '/basic/css/',
            activeMatch: '/basic/css/'
          },
          { 
            text: 'JavaScript',
            link: '/basic/javascript/',
            activeMatch: '/basic/javascript/'
          },
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/vue' },
          { text: 'React', link: '/react' }
        ]
      },
      {
        text: '实验室',
        items: [
          { text: '物料库', link: '/materials' }
        ]
      },
      {
        text: '更多',
        items: [
          { text: '面试万金油', link: '/interview' },
          { 
            text: '开发指南',
            items: [
              { text: '规范文档', link: '/guide' }
            ]
          },
        ]
      },

      
    ],
    // 社交账号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/deepsea520' }
    ],
    sidebar: {
      // // 当用户在 `指南` 目录页面下将会展示这个侧边栏
      // '/guide/': [
      //   {
      //     text: 'Guide',
      //     items: [
      //       // This shows `/guide/index.md` page.
      //       { text: 'Index', link: '/guide/' }, // /guide/index.md
      //       { text: 'One', link: '/guide/one' }, // /guide/one.md
      //       { text: 'Two', link: '/guide/two' } // /guide/two.md
      //     ]
      //   }
      // ],

      // // 当用户在 `配置` 目录页面下将会展示这个侧边栏
      // '/config/': [
      //   {
      //     text: 'Config',
      //     items: [
      //       // This shows `/config/index.md` page.
      //       { text: 'Index', link: '/config/' }, // /config/index.md
      //       { text: 'Three', link: '/config/three' }, // /config/three.md
      //       { text: 'Four', link: '/config/four' } // /config/four.md
      //     ]
      //   }
      // ]
    },
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Powered by Deepsea',
      copyright: `Copyright © ${new Date().getFullYear()}`
    }
  }
}