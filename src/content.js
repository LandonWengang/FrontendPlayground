export const profile = {
  name: 'Landon Wang',
  intro: '这是我的个人主页，也是记录前端练习与学习心得的地方。',
  github: 'https://github.com/LandonWengang',
};

export const projects = [
  {
    id: 'react-home',
    framework: 'React',
    title: 'React 个人主页',
    description: '用组件、列表渲染和状态做出一份可筛选的项目清单。',
  },
  {
    id: 'astro-home',
    framework: 'Astro',
    title: 'Astro 静态主页',
    description: '将主页预渲染为 HTML，只在项目筛选区运行 React。',
  },
];

export const notes = [
  { id: 'react', text: '第一阶段：学习 JSX、组件、props、列表渲染和 useState。' },
  { id: 'astro', text: '第二阶段：学习 Astro 文件路由、静态构建和 React Island。' },
];
