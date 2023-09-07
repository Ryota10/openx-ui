import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OpenxUiButton',
      fileName: 'openx-ui-button',
    },
    minify: false,
    rollupOptions: {
      external: [
        // 除了 @openx-ui/button，未来可能还会依赖其他内部模块，不如用正则表达式将 @openx-ui 开头的依赖项一起处理掉
        /@openx-ui.*/,
        'vue'
      ],
    },
  }
})
