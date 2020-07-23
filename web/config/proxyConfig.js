// 设置代理
module.exports = {
    '/api': {
        target: 'http://localhost:3001',   // 修改成自己本地的ip地址
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
}