<template>
    <div class="about-page">
        <h1>简介</h1>
        <p>
            项目使用Koa、Mysql、Vue构建。 
        </p>
        <p>
            这个博客以后不打算只写技术方面的文章，也会写一些自己对生活对人生的感悟，（肚子里墨水不多，不知道啥时候能写出来，先在这里吹个牛逼了，手动笑哭）。毕竟生活不止代码，还会有很多有趣快乐的事情。
        </p>
        <p>在这里希望能和大家一起分享生活中的快乐，和技术上的问题。</p>
        <div class="wximg">
            <img src="../../assets/images/wx.jpg" alt="">
            <div>微信公众号，欢迎关注，一起交流学习，共同进步。</div>
        </div>
    </div>
</template>
<style lang="less">
.about-page {
    width: 1180px;
    margin: 10px auto;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
    min-height: 680px;
    h1 {
        text-align: center;
        padding: 30px;
    }
    p {
        line-height: 34px;
        font-size: 16px;
        text-indent: 2em;
    }
    .wximg {
        margin-top: 72px;
        text-align: center;
        img {
            width: 160px;
        }
    }
}
</style>
