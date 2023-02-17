console.log('cv');


const info = Object.freeze({
  name: '何晓龙',
  gender: '男',
  age: '23 岁',
  jobTitle: '前端开发工程师（1年）',
  phone: '178 6427 0724',
  email: '3417237276@qq.com',
  address: '上海，宝山',
});

const skills = Object.freeze([
  {
    index: 1,
    content: `能够使用 HTML + CSS 还原设计稿，熟悉<strong> HTML5 </strong> 新属性以及语义化、掌握
              <strong> CSS3 </strong> 动画和浮动<strong> Flex </strong>、<strong> Grid </strong>、等布局方式。`,
  },
  {
    index: 2,
    content: `熟悉 JS 数据类型及常用 API，深入理解原型链、闭包、this 等特性， 熟悉<strong> ES6+ </strong>，包括 <strong>Promise</strong> / async / await / 析构赋值等`,
  },
  {
    index: 3,
    content: `掌握<strong> Vue（2/3）全家桶 </strong>的使用，包括 Vite/VueCli、VueRouter、Pinia/Vuex 等。`,
  },
  {
    index: 4,
    content: '熟悉 <strong>Uniapp</strong> + Vue2/Vue3 的开发',
  },
  {
    index: 4,
    content: `了解<strong> React </strong> 的使用，包括 create-react-app、ReactRouter、Redux 等`,
  },
  {
    index: 5,
    content: `熟悉 <strong>TypeScript</strong> 的使用，熟悉 Typescript + Vue3 的开发。`,
  },
  {
    index: 6,
    content: `了解 <strong> Webpack 的配置和优化</strong>`,
  },
]);

const experience = Object.freeze([
  {
    jobTitle: '前端开发工程师，上海',
    company: '上海阿特拓客数组科技有限公司，2022.3 ~ 至今',
    content: [
      '开发维护 <a src="https://arttokyoglobal.com/" target="_break">公司官网</a>（https://arttokyoglobal.com）。',
      '和后端对接接口，开发维护艺术品管理后台页面。',
      '参与项目初期原型产品需求分析，并根据设计稿实现前端页面。 ',
      '搭建 Vue3 + TypeScript + Vite 的项目框架。',
      '使用 Uniapp + Vue3 开发项目原型。'
    ],
  },
]);

const projects = Object.freeze({
  company: [
    {
      title: 'nft 艺术品电影宣传官网（pc & mobile）',
      preview: 'https://www.ship-film.com',
      source: '',
      content: [
        // 'nft 电影宣传官网，基于 HTML5 + CSS4 + JavaScript',
        '整体使用现代 <strong>Flex</strong> 布局，使用原生 <strong>Javascript</strong> 实现, 无任何第三方库。使用了 <strong>CSS3 的动画</strong>和过渡效果，实现了页面的动态效果。',
        '采用 <strong>rem<strong> 适配 pc 端，并适配移动端。',
        '使用 ajax 发送请求，并根据 css 类名实现了<strong>多语言切换</strong>，',
        '手写了一个轮播图组件，实现了自动轮播、手动轮播、无缝轮播、轮播图切换动画等功能。',
        // '合理的使用了 HTML5 的语义化标签，提高了页面的可读性。',
        '拆分了页面的功能模块，使用了模块化的思想，提高了代码的可维护性。',
      ],
    },
    {
      title: 'nft 电影同步展示艺术品项目（mobile）',
      preview: 'https://www.ship-film.net',
      source: '',
      content: [
        '用于观看艺术品电影的同时，能够<strong>根据时间同步展示艺术品</strong>，能够收藏艺术品。',
        '基于 HTML5 + CSS3 + JavaScript，无任何第三方库。',
        '使用 <strong>rem</strong> 适配移动端。',
        '使用 <strong>ajax</strong> 发送请求，与后端交互，包括个登录、注册、个人信息的获取修改、艺术品的获取、艺术品的收藏等。',
        '设计并实现了一个简单的<strong>路由系统</strong>，实现了页面的跳转。',
      ],
    },
    {
      title: 'nft 平台 （mobile）',
      preview: '',
      source: '',
      content: [
        'nft 移动端平台原型开发',
        '原型 1.0 使用 Vue2 相关技术开发。',
        '原型 2.0 使用 <strong>Vue3 + TypeScript + Vite</strong> 等技术栈。',
        '使用 Vue3 的 <strong>Composition API</strong> 实现逻辑复用。',
        '使用 <strong>rem</strong> 适配移动端。',
        '基于 VantUI 组件库，封装一些通用组件。',
      ],
    },
  ],
  personal: [
    {
      title: 'Wheel-UI 组件库',
      preview: 'http://draganet.gitee.io/wheel-ui-website',
      source: 'https://github.com/Drwna/v3-wheel-ui',
      content: [
        `这是一个基于 <strong>Vue3</strong> + <strong>TypeScript</strong> 的 UI 组件库，涵盖了 Button、Switch、Dialog 等常用组件。`,
        ` <strong>模块化</strong> 简洁明了，易于阅读。并推出了官方文档，可在线查看示例代码。支持 PC 和手机浏览。 `,
        ` 使用了 <strong>setup</strong>、onMounted、<strong>watchEffect</strong>、ref 等 Composition API。 `,
      ],
    },
    {
      title: '大屏可视化',
      preview: 'http://draganet.gitee.io/bigscreen-website',
      source: 'https://github.com/Drwna/bigScreen',
      content: [
        // '与<strong> Echart </strong>时，仿的开源项目做的。',
        `本项目是仿照其它开源项目，完全自主实现的数据大屏可视化。`,
        '使用 <strong>React + TypeScript + ECharts</strong> 等技术栈。',
        `页面布局使用了 <strong>Grid</strong> 和 <strong>Flex </strong> 布局， 使用 <strong> rem </strong> 动态记算适配不同尺寸的屏幕，具体思路见
                <a href="https://draganet.gitee.io/2022/02/05/08/#%E9%80%82%E9%85%8D%E5%B1%8F%E5%B9%95" target="_break">博客</a>`,
        `项目中包含的图例有柱形图、折线图、饼图、地图和表格等。`,
        // `通过这个项目，掌握了大屏可视化项目的制作技巧。`,
      ],
    },
    {
      title: '随手记帐的小应用-Vue版',
      preview: 'http://draganet.gitee.io/morney-website',
      source: 'https://github.com/Drwna/morney',
      content: [
        '为了满足自己需求而独立开发的极简主义记账应用，特点是一键极速记账。',
        '一个基于 <strong>Vue2 + Vue Router + TypeScript</strong> 的移动端单页面应用。',
        '开发中对同时存在很多重复的逻辑和页面，进行封装提炼相关组件，移除大量冗余代码。极大的提升了开发效率。',
        '将数据存在 <strong>localStorage</strong> 中，并引入 Vuex 来进行数据管理，对 Vuex 的单向流等概念有充分的了解。',
        '熟悉了 Vue 结合 Typescript 开发，更多内容详见：<a src="https://drwna.github.io/2022/01/17/52/" target="_break"> 博客 </a>。'
      ],
    },
    {
      title: '随手记帐的小应用-React版',
      preview: 'http://draganet.gitee.io/morney-website',
      source: 'https://github.com/Drwna/morney',
      content: [
        '<strong> React + React Router + TypeScript</strong>',
        `熟悉了 React 结合 Typescript 开发，更多内容详见：<a href="https://draganet.gitee.io/2022/01/28/27/" target="_break"> 博客 </a>。`,
      ],
    },
  ],
});

Vue.createApp({
  data() {
    return {
      ...info,
      skills,
      experience,
      projects,
    };
  },
}).mount('#app');
