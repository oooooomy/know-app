<template>
  <div>
    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'推荐 ' + index" style="background: #f5f6f7">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div style="margin-bottom: 66px">
            <ArticleList :list="list"/>
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";

export default {

  components: {ArticleList},

  mounted() {
  },

  data() {
    return {
      list: [{}, {}, {}, {}, {}],
      isLoading: false,
    }
  },

  methods: {
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
</style>
