# ddzy.github.io

个人主页

## 技术栈

- Vue 3 + TypeScript + Vite
- UnoCSS
- Node.js 24.18.0 + pnpm 11.7.0

## 本地开发

```bash
pnpm install
pnpm dev
```

默认地址为 `http://localhost:3008`。

## 构建

```bash
pnpm build
```

构建产物位于 `dist/`，部署目标为 `https://yyge.top`。

## 部署

[Jenkinsfile](./Jenkinsfile) 构建并发布静态产物到服务器的 `/srv/ddzy.github.io`
