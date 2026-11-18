# FrontendPlayground

用同一个个人主页学习前端：先用 React 做练习，再用 Astro 发布静态站点。主页包含自我介绍、项目与练习、学习日志。

## 开始

需要 Node.js 22.23.4 或更高版本。首次安装依赖：

```sh
npm ci
```

### 第一阶段：React

```sh
npm run dev:react
```

打开终端打印的本地地址。先读 `react/main.jsx`，看 JSX 如何组成页面，以及如何用 `map` 和 `key` 渲染日志。再读 `src/components/ProjectList.jsx`，看如何用 props 接收项目、用 `useState` 保存筛选条件、用 `onChange` 更新列表。

动手练习：在 `src/content.js` 新增一条项目记录，再试着给筛选器加一个「重置」按钮。

运行 `npm run build:react` 可生成 `react/dist/`，验证 React 练习页能独立构建。
