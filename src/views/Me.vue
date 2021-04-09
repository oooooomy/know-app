<template>
  <div class="main">
    <div style="display: flex;padding: 10px">
      <van-image
          round
          width="60"
          height="60"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="des">
        <div class="des-name">Soanr</div>
        <div style="display: flex;padding-top: 7px">
          <van-icon color="#06f" name="wechat-pay"/>
          <span class="author-des">河南科技学院认证</span>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">我的数据</div>
      <van-row style="text-align: center">
        <van-col span="6" class="card-item">12
          <div class="card-d1">文章</div>
        </van-col>
        <van-col span="6" class="card-item">8
          <div class="card-d1">视频</div>
        </van-col>
        <van-col span="6" class="card-item">9
          <div class="card-d1">收藏</div>
        </van-col>
        <van-col span="6" class="card-item">31
          <div class="card-d1">评论</div>
        </van-col>
      </van-row>
    </div>
    <img src="../assets/me.png" alt="" style="width: 100%;margin-top: 100px">
  </div>
</template>

<script></script>

<style scoped>
.card {
  width: 100%;
  height: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
  letter-spacing: 1px;
}

.card-title {
  font-size: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, .7);
  padding-left: 25px;
  padding-top: 12px;
  padding-bottom: 10px;
}

.card-item {
  font-size: 18px;
}

.card-d1 {
  font-size: 11px;
  padding-top: 5px;
  color: rgba(0, 0, 0, .8);
}

.main {
  padding: 20px;
}

.des {
  padding-left: 20px;
  letter-spacing: 1px;
  padding-top: 6px;
}

.des-name {
  font-size: 18px;
  padding-left: 3px;
}

.author-des {
  font-size: 12px;
  color: rgba(0, 0, 0, .6);
  padding-left: 2px;
}
</style>