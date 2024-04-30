# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Tips for next week

最外层组件在卸载时也要退出当前服务

已经实装了=安全切换服务器的功能，但是需要在storage当中保存这个用户选择的服务

### 未解决的问题

1. 将卡片组纵向排列
2. 将服务器选择列表做成一个侧边栏，第一项可以是首页
3. 在storage当中存储用户选择的服务
