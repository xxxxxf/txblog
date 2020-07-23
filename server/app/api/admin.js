const Router = require('koa-router');
const common = require('../libs/common');
let router = new Router();
// 添加token 用的
const addtoken = require('../token/addtoken');
// 注册接口
// router.post('/register', async ctx => {
//     let { username, password, email } = ctx.request.fields;
//     // 密码加密
//     ctx.request.fields.password = common.md5(ctx.config.ADMIN_PREFIX + password)
//     let vals = Object.values(ctx.request.fields);
//     let data = await ctx.db.query(`SELECT * FROM admin`);
//     let isTrue = data.findIndex(item => item.email === email)
//     if (isTrue !== -1) return ctx.body = common.handleResulte(201, '', '此邮箱已被注册')
        
//     await ctx.db.query(`INSERT INTO admin (nickname, email, password) VALUES(?,?,?)`, vals)
//     ctx.body = common.handleResulte(200, '', '注册成功')
// })

// 登录接口
router.post('/login', async ctx => {
    let { username, password } = ctx.request.fields;
    let data = await ctx.db.query(`SELECT * FROM admin`);
    let result = data.find(item => item.nickname === username)
    if ( result && result instanceof Object && Object.keys(result).length) {
        let pass = common.md5(ctx.config.ADMIN_PREFIX + password);

        if (pass !== result.password) return ctx.body = common.handleResulte(201, '', '密码不正确')
        
        let token = addtoken({email: result.email, username: result.nickname})
        ctx.body = common.handleResulte(200, result, '登录成功', '', token)
    } else {
        ctx.body = common.handleResulte(201, '', '没有此用户')
    }
})

// 测试接口
router.get('/test', async ctx => {
    let data = '测试的啊'
    ctx.body = common.handleResulte(200, data, '')
})

module.exports = router.routes()