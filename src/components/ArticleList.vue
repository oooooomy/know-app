<template>
  <div>
    <div v-for="(item,index) in list" :key="index">

      <div class="item">
        <router-link :to="'/article/details/' + index ">
          <div class="content">
            <div class="title">苹果公司知道有人使用Hacintosh吗?苹果公司知道有人使用Hacintosh吗?</div>
            <div style="display: flex">
              <div>
                <div class="author">
                  <van-image
                      round
                      width="20"
                      height="20"
                      src="https://img01.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span class="author-name">Soanr</span>
                  <van-icon color="#06f" style="padding-left: 7px;" name="wechat-pay"/>
                  <span class="author-des">河南科技学院认证</span>
                </div>
                <div class="article">
                  NVIDIA RTX 30系列略显不足的一点就是显存容量普遍很“吝啬”，比如RTX 3070也才只有8GB，在高分辨率的大型3A游戏中有点捉襟见肘，特别是开了光追、高纹理之后。
                </div>
              </div>
              <img class="poster" alt="" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            </div>
            <div class="star-bar">
              <span class="star-bar-count">22.13万人赞同 · 131条评论</span>
              <van-icon color="#909399" style="float: right;padding-top: 3px" name="ellipsis"/>
            </div>
          </div>
        </router-link>
      </div>

      <div class="item">
        <router-link :to="'/article/details/' + index ">
          <div class="content">
            <div class="title">苹果公司知道有人使用Hacintosh吗?苹果公司知道有人使用Hacintosh吗?</div>
            <div class="author">
              <van-image
                  round
                  width="20"
                  height="20"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <span class="author-name">Soanr</span>
              <van-icon color="#06f" style="padding-left: 7px;" name="wechat-pay"/>
              <span class="author-des">河南科技学院认证</span>
            </div>
            <div class="article">
              NVIDIA RTX 30系列略显不足的一点就是显存容量普遍很“吝啬”，比如RTX 3070也才只有8GB，在高分辨率的大型3A游戏中有点捉襟见肘，特别是开了光追、高纹理之后。
            </div>
            <div class="star-bar">
              <span class="star-bar-count">22.13万人赞同 · 131条评论</span>
              <van-icon color="#909399" style="float: right;padding-top: 3px" name="ellipsis"/>
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    list: {
      type: Array,
    }
  },
}
</script>

<style scoped>
.poster {
  width: 100px;
  height: 63px;
  border-radius: 5px;
  margin: 15px 0 0 10px;
  object-fit: cover;
}

.item {
  width: 100%;
  background: #ffffff;
  margin-bottom: 10px;
}

.content {
  padding: 10px;
}

.title {
  letter-spacing: 1px;
  font-weight: 500;
  color: rgba(0, 0, 0, .9);
}

.author {
  display: flex;
  padding-top: 10px;
}

.author-name {
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, .9);
}

.author-des {
  padding-left: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, .6);
}

.article {
  font-size: 14px;
  letter-spacing: 1px;
  padding: 5px 0;
  color: rgba(0, 0, 0, .8);
  max-height: 35px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.star-bar {
  height: 25px;
  padding-top: 8px;
}

.star-bar-count {
  font-size: 13px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, .5);
}

</style>