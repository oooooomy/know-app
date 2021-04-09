<template>
  <div>
    <van-nav-bar
        :title="submitType === 'video' ? '上传视频' : '撰写文章'"
        left-text="取消"
        :border="false"
        left-arrow
        @click-left="onClickLeft"
    >
      <template #right>
        <van-button style="margin-top: 5px" color="#0066ff" round type="info" size="small">Submit</van-button>
      </template>
    </van-nav-bar>
    <div style="padding: 5px 20px">
      <div>
        <label>
          <input v-model="form.title" class="in-title" placeholder="请输入标题"/>
        </label>
        <label v-if="submitType === 'article'">
          <textarea style="height: 74vh"
                    v-model="form.content"
                    class="in-content"
                    placeholder="请输入正文 （Markdown文档）"
                    rows="20"/>
        </label>
        <div v-if="submitType === 'video'" style="margin: 20px 0">
          <van-uploader/>
        </div>
        <div class="footer" @click="onClickType">+ 稿件类型（必须选择）
          <van-tag round
                   style="font-size: 10px;letter-spacing: 1px;margin-left: 10px"
                   v-if="tag"
                   size="large"
                   plain type="primary">
            {{ tag }}
          </van-tag>
        </div>
        <van-popup v-model="show" round position="top" :style="{ height: '220px' }">
          <div style="padding: 20px">
            <van-tag round
                     @click="selectTag(item)"
                     v-for="(item, index) in tagList" :key="index"
                     size="large"
                     plain type="primary"
                     style="margin-bottom: 10px;margin-right: 10px">
              {{ item }}
            </van-tag>
          </div>
        </van-popup>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Upload",

  data() {
    return {
      tag: '',
      tagList: ['计算机科学', '机器学习', '人工智能'],
      show: false,
      submitType: this.$route.query.type,
      form: {
        title: '',
        content: '',
        file: {},
      },
    }
  },

  mounted() {
  },

  methods: {
    onClickType() {
      this.show = true
    },
    selectTag(tag) {
      this.tag = tag
      this.show = false
    },
    onClickLeft() {
      this.$router.back()
    },
  }

}
</script>

<style scoped>
.in-title {
  color: rgba(0, 0, 0, .7);
  letter-spacing: 1px;
  width: 97%;
  margin: auto;
  height: 50px;
  border: none;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.in-content {
  width: 97%;
  margin-top: 20px;
  font-size: 15px;
  color: rgba(0, 0, 0, .5);
  letter-spacing: 1px;
  border: none;
  line-height: 25px;
}

.footer {
  position: absolute;
  border-bottom: 0;
  font-weight: bold;
  font-size: 14px;
  color: #0066ff;
  padding-top: 4px;
}
</style>