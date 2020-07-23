const Router = require('koa-router');
const path = require('path');
const fs = require('fs');
const common = require('../libs/common');

let router = new Router()
const qiniu = require("qiniu");
//客户端调用接口，生成token
router.get('/qiniu', async ctx => {
    // 用自己的七牛云Key
    let accessKey = 'RkN04hhjswEmdBwur5G1SmYlqTR3BZaWc12bs6H';
    let secretKey = 'SL0XC56q_wp2beHBmdIR0cvJT1YDSUWDU9o1-DN';
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let options = {
        scope: 'wusshuang' //七牛资源目录
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);
    ctx.body = common.handleResulte(200, uploadToken)
})
// 上传图片
router.post('/fileds', async ctx => {
    if (ctx.request.fields['file']) {
        let suffix = ctx.request.fields['file'][0].name.split('.')[1];
        let path = ctx.request.fields['file'][0].path
        let newPath = `${path}.${suffix}` 
        fs.renameSync(path, newPath)
        let url = newPath.substr(newPath.indexOf('upload'));
        let origin = `http://localhost/${url}`
        ctx.body = common.handleResulte(200, origin, '上传成功')
    } else {
        ctx.body = common.handleResulte(201, '', '请添加图片')
    }
})

module.exports = router.routes()