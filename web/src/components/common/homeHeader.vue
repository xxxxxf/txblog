<template>
    <div class="header">
        <div class="center-wrap">
            <div class="logo">
                <img class="logo-img" :src="defaultImg" alt="">
            </div>
            <div class="btns">
                <Button @click="jumpPage('/article')" type="text" :class="{'active': currentRouter === '/article'}"><Icon class="icons" type="md-book" />文章</Button>
                <Button @click="jumpPage('/about')"  type="text" :class="{'active': currentRouter === '/about'}"><Icon class="icons" type="ios-chatbubbles-outline" />关于</Button>
            </div>
            <div class="search-input">
                <Input v-model="searchInputVal" @on-enter="handleSearchVal" clearable @on-clear="handleClearSearchVal" placeholder="请输入搜索内容">
                    <Icon type="ios-search" slot="prefix" />
                </Input>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'homeheader',
    watch: {
        $route (to, from) {
            this.currentRouter = to.path
        },
        searchVal (nVal) {
            this.searchInputVal = nVal
        }
    },
    data () {
        return {
            searchInputVal: null,
            currentRouter: '/article',
            defaultImg: require('@/assets/images/haibao3.png')
        }
    },
    created () {},
    computed: {
        ...mapState([
            'searchVal'
        ])
    },
    methods: {
        ...mapActions([
            'setSearchVal'
        ]),
        jumpPage (path) {
            this.currentRouter = path
            this.$router.push({path: path})
        },
        handleSearchVal () {
            this.setSearchVal(this.searchInputVal)
        },
        handleClearSearchVal () {
            this.searchInputVal = null
            this.setSearchVal(this.searchInputVal)
        }
    }
}
</script>
<style lang="less">
.header {
    width: 100%;
    height: 70px;
    box-shadow: 0.053333rem 0.053333rem 0.053333rem rgba(0, 0, 0, 0.03);
    border-bottom: 0.013333rem solid #f0f0f0;
    background-color: #ffffff;
    .center-wrap {
        width: 1180px;
        margin: 0 auto 0;
        display: flex;
        align-items: center;
        .logo {
            font-size: 20px;
            line-height: 70px;
            margin-right: 60px;
            .logo-img {
                width: 40px;
                height: 40px;
                vertical-align: middle;
                margin-left: 20px;
            }
        }
        .btns {
            .icons {
                font-size: 18px;
                margin-right: 5px;
            }
            button {
                font-size: 16px;
                &:focus {
                    box-shadow: none;
                }
            }
        }
        .search-input {
            margin-left: 20px;
            input {
                width: 400px;
            }
        }
    }
}
</style>
