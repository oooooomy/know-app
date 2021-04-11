<template>
  <div class="main">
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="(item,index) in tagList" :key="index" :title="item" style="background: #f5f6f7">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div style="margin-bottom: 66px">
            <ArticleList :list="articleList"/>
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <div class="d">没有更多内容了</div>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";
import {FindAllArticle, FindAllType} from "@/api/article";

export default {

  components: {ArticleList},

  data() {
    return {
      active: 0,
      articleList: [],
      tagList: ['推荐'],
      isLoading: false,
    }
  },

  mounted() {
    FindAllType().then((res) => {
      if (res.status) {
        for (let i = 0; i < res.data.length; i++) {
          this.tagList.push(res.data[i])
        }
      }
    })
    FindAllArticle('all').then((res) => {
      if (res.status) {
        this.articleList = res.data
      }
    })
  },

  methods: {

    onClick() {
      if (this.active !== 0) {
        FindAllArticle(this.tagList[this.active]).then((res) => {
          if (res.status) {
            this.articleList = res.data
          }
        })
      } else {
        FindAllArticle('all').then((res) => {
          if (res.status) {
            this.articleList = res.data
          }
        })
      }
    },

    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },

}
</script>

<style scoped>
.main {
  width: 100%;
  height: 90vh;
  background: #f5f6f7 !important;
}

>>> .van-tabs__line {
  width: 20px;
  background-color: #0066ff;
}

.d {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, .5);
  text-align: center;
}
</style>
