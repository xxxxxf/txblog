<template>
    <div class="footer">
        <div class="copy-right">
            <p>www.jiankou.top - 天行涧博客 Copyright© Author无双 544863848@qq.com</p>
            <p>豫ICP备36803136</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homefooter'
}
</script>
<style lang="less">
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 3000;
    background-color: #262626;
    color: #ffffff;
    text-align: center;
    .copy-right {
        padding: 26px 0;
        p {
            font-size: 14px;
            line-height: 28px;
        }
    }
}
</style>
