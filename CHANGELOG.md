# Change Log

## [2.0.0] - 2026-07-20

### Changed

- 将旧版原生 HTML、Less 与 Canvas 动画主页重构为 Vue 3、TypeScript、Vite 与 UnoCSS 工程。
- 首页调整为响应式个人项目入口页，适配桌面端与移动端。
- 统一 Node.js、pnpm 与 Prettier 配置，并将本地开发端口设为 `3008`。
- 部署目标调整为主域名 `https://yyge.top`。
- 新增 Jenkins 静态站点流水线，构建产物发布至 `/srv/ddzy.github.io`。

### Removed

- 移除旧版 `source/` 目录、百度统计、Canvas 气泡动画、Less 样式与 `live-server` 依赖。
- 移除旧域名 `CNAME` 配置。
