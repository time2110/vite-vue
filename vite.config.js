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
    },
    build: {
        // 单个 chunk 文件的大小超过 2048KB 时发出警告
        chunkSizeWarningLimit: 2048,
        // 禁用 gzip 压缩大小报告
        reportCompressedSize: false,
        // 打包后静态资源目录
        assetsDir: "static",
    },
    /** 混淆器 */
    esbuild: {
        // 打包时移除 console.log
        pure: ["console.log"],
        // 打包时移除 debugger
        drop: ["debugger"],
        // 打包时移除所有注释
        legalComments: "none"
    },
})
