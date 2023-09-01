import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      ViteRestart({
          restart:['vite.config.js']
      })
  ],
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    },
    base: './', // 打包路径
    server: {
        port: 4000, // 服务端口号
        open: false, // 服务启动时是否自动打开浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // 设置代理目标地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '') // 可选的路径重写规则
            }
        }
    }
})
