<template>
  <div>
    <div class="header">
      <div style="display: flex">
        <van-icon @click="handleBack" size="23" class="left-icon" name="arrow-left"/>
        <van-image
            class="avatar"
            round
            width="37"
            height="37"
            :src="base + '/file/image/' + data.author.avatar"
        />
        <div class="des">
          <div class="des-name">{{ data.author.nickname }}</div>
          <div class="des-school">
            {{ data.author.school }}
          </div>
        </div>
      </div>
      <div class="follow" @click="showShare = true">
        <van-icon name="share"/>
        分享
      </div>
    </div>
    <div class="content">
      <div class="content-title">
        {{ data.article.title }}
      </div>
      <van-divider/>
      <div class="content-main">
        <MarkdownContent :content="content"/>
      </div>
      <div class="content-time">发布于 {{ data.article.createAt }} · 未经作者允许禁止转载</div>
    </div>

    <div class="bottom-bar">
      <van-button :loading="agreeLoading"
                  loading-text="加载中..."
                  round type="info"
                  @click="agree">
        <div style="display: flex">
          <van-icon class="bottom-bar-icon" size="20" name="play"/>
          <span class="s1">赞同 {{ data.article.agreeCount }}</span>
        </div>
      </van-button>
      <a @click="show = true" style="float: right">
        <div class="comments-count">{{ data.article.commentCount }}条评论</div>
        <van-icon color="#909399" size="25" class="comments-icon" name="chat-o"/>
      </a>
    </div>
    <van-popup closeable
               close-icon="clear"
               v-model="show"
               round
               position="bottom"
               :style="{ height: '90%' }">
      <div style="padding: 15px">
        <div class="popup-title">全部评论</div>
        <div class="popup-content">
          <div style="padding-top: 10px;letter-spacing: 1px;padding-bottom: 20px">评论 {{ commentList.length }}
          </div>
          <div v-for="(item, index) in commentList" :key="index" class="comments-item">
            <van-image
                style="margin-top: 5px"
                round
                width="30"
                height="30"
                :src="base + '/file/image/' + item.user.avatar"
            />
            <div style="margin-left: 15px">
              <div class="comments-item-d1">{{ item.user.nickname }}</div>
              <div class="comments-item-d2">{{ item.comment.content }}</div>
              <div class="comments-item-d3">{{ item.comment.createAt }}</div>
            </div>
          </div>
        </div>
        <div class="popup-bottom">
          <label>
            <input placeholder="发一条友善的评论" v-model="commentForm.content" class="bottom-bar-input"/>
          </label>
          <div class="popup-bottom-send" @click="submitComment">发布</div>
        </div>
      </div>
    </van-popup>

    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
    />
  </div>
</template>

<script>
import MarkdownContent from "@/components/MarkdownContent";
import {Agree, FindArticleById} from "@/api/article";
import {BASE_RUL} from "@/utils/request";
import {FindAllComment, SaveComment} from "@/api/comment";

export default {

  components: {MarkdownContent},

  data() {
    return {
      showShare: false,
      options: [
        {name: '微信', icon: 'wechat'},
        {name: '微博', icon: 'weibo'},
        {name: '复制链接', icon: 'link'},
        {name: '分享海报', icon: 'poster'},
        {name: '二维码', icon: 'qrcode'},
      ],
      agreeLoading: false,
      commentForm: {
        uid: localStorage.getItem("uid"),
        aid: this.$route.params.id,
        content: ''
      },
      commentList: [],
      base: BASE_RUL,
      data: {
        article: {},
        author: {},
      },
      content: '',
      show: false,
    }
  },

  mounted() {
    FindArticleById(this.$route.params.id).then((res) => {
      if (res.status) this.data = res.data
      this.content = this.data.article.content.toString()
    })
    FindAllComment(this.$route.params.id).then((res) => {
      if (res.status) this.commentList = res.data
    })
  },

  methods: {

    handleBack() {
      this.$router.back()
    },

    submitComment() {
      SaveComment(this.commentForm).then((res) => {
        if (res.status) {
          this.commentList.push(res.data)
          this.data.article.commentCount = this.data.article.commentCount + 1
          this.$toast.success("感谢你的评论")
        }
      })
    },

    agree() {
      this.agreeLoading = true
      Agree(this.$route.params.id).then((res) => {
        if (res.status) {
          this.data.article.agreeCount = this.data.article.agreeCount + 1
        }
        setTimeout(() => {
          this.$toast.success("谢谢你的赞同")
          this.agreeLoading = false
        }, 700)
      })
    },

  },

}
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.left-icon {
  padding-top: 23px;
  padding-left: 15px;
  margin-right: 20px;
}

.avatar {
  margin-top: 16px;
}

.des {
  font-size: 12px;
  padding-top: 13px;
  padding-left: 10px;
  letter-spacing: 1px;
  width: 47vw;
}

.des-name {
  font-size: 15px;
  color: rgba(0, 0, 0, .8);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 可以显示的行数，超出部分用...表示*/
  -webkit-box-orient: vertical;
}

.des-school {
  display: flex;
  padding-top: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, .5);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 可以显示的行数，超出部分用...表示*/
  -webkit-box-orient: vertical;
}

.follow {
  float: right;
  margin-top: -28px;
  margin-right: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #0066ff;
}

.content {
  padding: 15px;
}

.content-title {
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 2px;
}

.content-main {

}

.content-time {
  font-size: 13px;
  color: rgba(0, 0, 0, .4);
  letter-spacing: 1px;
  padding: 20px 0;
}

.bottom-bar {
  width: 100%;
  height: 45px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  padding: 10px;
}

.bottom-bar-icon {
  transform: rotate(-90deg);
}

.s1 {
  font-size: 15px;
  letter-spacing: 2px;
  padding-left: 10px;
}

.comments-icon {
  float: right;
  padding-right: 5px;
  padding-top: 8px;
}

.comments-count {
  float: right;
  padding-right: 25px;
  color: #909399;
  letter-spacing: 1px;
  padding-top: 11px;
  font-size: 13px;
}

.popup-content {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 75vh;
}

.popup-content ::-webkit-scrollbar {
  display: none !important;
}

.popup-title {
  text-align: center;
  letter-spacing: 1px;
  font-size: 17px;
  font-weight: bold;
}

.popup-bottom {
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 99;
  background: #ffffff;
  bottom: 0;
  left: 0;
}

.popup-bottom-send {
  letter-spacing: 3px;
  float: right;
  color: #0066ff;
  line-height: 70px;
  font-weight: 400;
  font-size: 15px;
  padding-right: 15px;
}

.bottom-bar-input {
  height: 40px;
  font-size: 13px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, .4);
  margin-top: 13px;
  margin-left: 20px;
  width: 70%;
  border: none;
}

.comments-item {
  display: flex;
  margin-bottom: 20px;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 20px;
}

.comments-item-d1 {
  color: rgba(0, 0, 0, .9);
}

.comments-item-d2 {
  color: rgba(0, 0, 0, .7);
  padding: 4px 0;
}

.comments-item-d3 {
  color: rgba(0, 0, 0, .4);
  font-size: 11px;
}

</style>