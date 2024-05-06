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

1. 当页面刷新或关闭时都会触发的事件，如何设计流程
   关闭时令用户退出当前服务器，刷新时不退出当前服务器
   通过session状态可知重新加载时用户是刷新还是关闭
   所以采取以下策略：
   beforeunload时退出服务器
   load时根据session状态重新进入服务器

### PS：

还是typescript好哇！
