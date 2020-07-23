// ecosystem.config.js
// pm2 线上环境的环境变量配置文件，回头有时间了要学习一下pm2 
module.exports = {
	apps: [
		{
			// 生产环境
			name: 'prod-implant',
			// 项目启动入口文件
			script: './app.js',
			// 项目环境变量
			env: {
				NODE_ENV: 'production'
				// "PORT": 3555
			}
		},
		{
			// 测试环境
			name: 'test-implant',
			script: './app.js',
			env: {
				NODE_ENV: 'test'
				// "PORT": 3555
			}
		},
		{
			// 预发布环境
			name: 'release-implant',
			script: './app.js',
			env: {
				NODE_ENV: 'release'
				// "PORT": 3555
			}
		}
	]
};
