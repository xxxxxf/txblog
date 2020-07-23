<template>
    <div class="login" @keydown.enter="handleSubmit('formInline')">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          天行涧后台管理
        </p>
        <div class="form-con">
          <Form ref="formInline" :model="loginData" :rules="ruleInline">
            <FormItem prop="username">
              <i-input v-model="loginData.username" placeholder="请输入用户名">
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input type="password" v-model="loginData.password" placeholder="请输入密码">
              </i-input>
            </FormItem>
            <FormItem>
              <Button :loading="buttonLoading" @click="handleSubmit('formInline')" type="primary" long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            loginData: {
                username: '',
                password: ''
            },
            ruleInline: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blue' },
                    { type: 'string', min: 6, message: '请输入正确的用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blue' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$post('/api/admin/login', this.loginData).then(res => {
                        if (res.code === 200) {
                            this.$Message.success('登录成功!')
                            this.$Lockr.set('token', res.token)
                            this.$Lockr.set('userinfo', res.data)
                            this.$router.push({path: '/home'})
                        } else {
                            this.$Message.error(res.msg)
                        }
                    })
                }
            })
        }
    },
    watch: {}
}
</script>
<style lang="less">
html, body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }

  .login {
    width: 100%;
    height: 100%;
    background-image: url('./../../assets/images/login-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

  }

  .login-con {
    position: absolute;
    right: 14%;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
  }

  .login-header {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    padding: 30px 0;
  }

  .form-con {
    padding: 10px 0 0;
  }

  .login-tip {
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
  }
</style>
