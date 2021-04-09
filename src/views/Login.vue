<template>
  <div class="main">
    <div class="header">
      <div class="header-d1">登录知否</div>
      <div class="header-d2">面向研究生的学术交流网站</div>
    </div>
    <van-tabs style="width: 200px;padding-top: 30px;text-align: center;margin: auto" v-model="active">
      <van-tab title="账号登录"/>
      <van-tab title="账号注册"/>
    </van-tabs>
    <div class="form" v-if="active === 0">
      <input placeholder="请输入手机" v-model="signInForm.phone" class="input"/>
      <input placeholder="请输入密码" v-model="signInForm.phone" class="input"/>
      <van-button @click="submitSignIn" type="info" class="btn">登 录</van-button>
    </div>
    <div class="form" v-if="active === 1">
      <van-uploader v-model="fileList"
                    multiple
                    :max-count="1">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
      <div style="font-size: 12px;color: #909399;padding-left: 15px;margin-bottom: 10px">上传头像</div>
      <input placeholder="请输入手机号码" v-model="signInForm.phone" class="input"/>
      <input placeholder="请输入密码" v-model="signInForm.phone" class="input"/>
      <input placeholder="请输入昵称" v-model="signInForm.phone" class="input"/>
      <input placeholder="请输入就读高校" v-model="signInForm.password" type="password" class="input"/>
      <van-button @click="submitSignUp" type="info" class="btn">注 册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      fileList: [],
      signInForm: {
        phone: '',
        password: '',
      },
      signUpForm: {
        phone: '',
        password: '',
      },
    };
  },

  methods: {
    submitSignIn() {
      console.log(this.signInForm)
    },
    submitSignUp() {

    },
  },

};
</script>

<style scoped>
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}

>>> .van-tab__text {
  font-size: 16px;
  letter-spacing: 1px;
}

.main {
  width: 100%;
  height: 100%;
}

.header {
  height: 110px;
  background: #0066ff;
  text-align: center;
  letter-spacing: 1px;
}

.header-d1 {
  color: #ffffff;
  font-size: 22px;
  padding-top: 25px;
}

.header-d2 {
  color: #f5f6f7;
  font-size: 13px;
  padding-top: 10px;
}

.form {
  width: 90%;
  height: 300px;
  margin: 20px auto;
}

.input {
  width: 94%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  color: rgba(0, 0, 0, .4);
  letter-spacing: 1px;
  margin: 10px 0;
  padding: 10px;
  font-size: 13px;
}

.btn {
  width: 100%;
  margin: 30px 0;
}

>>> .van-tabs__line {
  background-color: #0066ff;
  width: 30px;
}
</style>