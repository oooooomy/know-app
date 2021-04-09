<template>
  <div>
    <van-nav-bar :border="false" fixed ref="navbar" @click-right="onClickRight">
      <template #left>
        <p class="header-logo">知否</p>
      </template>
      <template #title>
        <van-search
            shape="round"
            placeholder="请输入搜索关键词"
        />
      </template>
      <template #right>
        <img class="add-img" src="../assets/add.svg" alt="">
      </template>
    </van-nav-bar>
    <div style="width: 100%;height: 46px"/>

    <van-popup v-model="show" round position="bottom" :style="{ height: '240px' }">
      <div style="padding: 20px">
        <div class="author">
          <van-image
              round
              width="40"
              height="40"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span style="padding-top: 10px;padding-left: 15px">你在 2021-01-22 21:14:21 来到了知否</span>
        </div>

        <van-row gutter="20">
          <van-col span="12">
            <router-link to="/upload?type=article">
              <div class="card">
                <div class="card-d">发个文章</div>
                <img class="image" src="../assets/post-article.svg" alt="">
              </div>
            </router-link>
          </van-col>
          <van-col span="12">
            <router-link to="/upload?type=video">
              <div class="card">
                <div class="card-d">发个视频</div>
                <img class="image" src="../assets/post-video.svg" alt="">
              </div>
            </router-link>
          </van-col>
        </van-row>

      </div>
    </van-popup>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: false,
    }
  },

  methods: {
    onClickRight() {
      this.show = true
    },
  },

}
</script>

<style scoped>
.image {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 10px;
}

.card-d {
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, .8);
  padding-top: 20px;
  padding-left: 20px;
}

.author {
  padding: 3px;
  letter-spacing: 1px;
  font-size: 13px;
  color: rgba(0, 0, 0, .5);
  font-weight: 500;
  display: flex;
  margin-bottom: 20px;
}

.card {
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.d1 {
  color: rgba(0, 0, 0, .5);
  letter-spacing: 1px;
  font-size: 11px;
  text-align: center;
  padding-top: 30px;
}

.van-nav-bar {
  background: #ffffff;
  z-index: 99;
  height: 50px;
}

>>> .van-nav-bar__title {
  margin-right: 13vw;
  margin-left: 18vw;
  width: 70vw;
  max-width: 100%;
}

.van-search {
}

>>> .van-tabs__wrap {
  padding-bottom: 10px;
}

>>> .van-tabs__line {
  width: 15px;
}

.add-img {
  width: 25px;
  height: 25px;
}

.header-logo {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: bold;
  padding-left: 3px;
  color: #06f;
}
</style>
