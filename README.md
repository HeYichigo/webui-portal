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

已经实装了=安全切换服务器的功能，但是需要在 storage 当中保存这个用户选择的服务

### 未解决的问题

1. 目前不适合使用路由

   - 退出 iframe 页面时需要发送 beacon
     目前 beacon 只在 unload 事件中发送，切换路由时也应该发送才对
     但是需要判断路由切换的目的地

   * 所以暂时使用 store 的 login 状态来控制组件切换
