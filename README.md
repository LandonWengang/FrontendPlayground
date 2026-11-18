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

### 第二阶段：Astro

```sh
npm run dev
```

`src/pages/index.astro` 对应首页 `/`。对照 React 版看看同一份数据如何在构建时生成 HTML：简介和学习日志是静态内容，项目列表也预先渲染，只有筛选区通过 `client:load` 在浏览器中启用 React 交互。

动手练习：在浏览器中禁用 JavaScript，确认仍能读到完整项目列表；重新启用后，再试试在 `src/pages/` 添加一个 `about.astro` 页面。

## 持续维护与发布

- 在 `src/content.js` 更新简介、添加项目和日志。为每条记录使用不同且稳定的 `id`，两个版本会共用这些内容。
- 在 `src/styles.css` 调整两个版本共用的样式。
- 运行 `npm run build`，再用 `npm run preview` 在本地预览；将根目录下的 `dist/` 发布到静态托管服务即可。

开发和预览服务器仅用于本地。构建工具间接依赖的 `picomatch` 存在尚未修复的 [ReDoS 告警](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)；站点不处理用户提供的 glob 模式，发布时只需上传静态产物。
