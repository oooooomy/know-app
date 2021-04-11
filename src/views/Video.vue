<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 66px">
        <VideoList/>
      </div>
    </van-pull-refresh>

  </div>
</template>

<script>
import VideoList from "@/components/VideoList";
import {FindAllVideo} from "@/api/video";

export default {

  components: {VideoList},

  mounted() {
  },

  data() {
    return {
      isLoading: false,
    }
  },

  methods: {
    onClickRight() {
      this.$router.push('/upload')
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

</style>
