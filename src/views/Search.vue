<template>
  <div>

    <van-nav-bar :border="false" fixed ref="navbar" @click-left="onClickLeft">
      <template #left>
        <p class="header-logo">知否</p>
      </template>
      <template #title>
        <van-search
            v-model="searchValue"
            @search="onSearch"
            @cancel="onClear"
            @clear="onClear"
            shape="round"
            placeholder="请输入搜索关键词"
        />
      </template>
    </van-nav-bar>
    <div style="width: 100%;height: 50px"/>

    <div v-if="list.length === 0" style="padding: 20px">
      <img style="width: 100%;height: 100%" src="../assets/Analytic.svg" alt="">
      <div class="d1">什么也没有找到!</div>
      <div class="d2">Nothing was found, please search again</div>
    </div>


    <div v-if="list.length !== 0">
      <div style="padding: 20px">
        <ArticleList :list="list"/>
      </div>
    </div>

  </div>
</template>

<script>
import {SearchArticle} from "@/api/article";
import ArticleList from "@/components/ArticleList";

export default {
  components: {ArticleList},
  data() {
    return {
      list: [],
      searchValue: '',
      show: false,
    }
  },

  methods: {

    onClickLeft() {
      this.$router.push('/home')
    },

    onSearch() {
      SearchArticle(this.searchValue).then((res) => {
        if (res.status) {
          this.list = res.data
        }
      })
    },

    onClear() {
      this.list = []
    },

  },

}
</script>

<style scoped>

.d1 {
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 500;
  padding-top: 20px;
}

.d2 {
  text-align: center;
  font-size: 13px;
  letter-spacing: 2px;
  padding: 15px;
  color: rgba(0, 0, 0, .6);
}

.card-d {
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, .8);
  padding-top: 20px;
  padding-left: 20px;
}

.van-nav-bar {
  background: #ffffff;
  z-index: 99;
  height: 50px;
}

>>> .van-nav-bar__title {
  margin-right: 1vw;
  margin-left: 18vw;
  width: 75vw;
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

.header-logo {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: bold;
  padding-left: 3px;
  color: #06f;
}
</style>
