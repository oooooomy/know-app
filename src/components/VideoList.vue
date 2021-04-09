<template>
  <div class="main">
    <div class="item" v-for="(item,index) in 5" :key="index">
      <div class="title">1983年中国发生了什么？</div>
      <div class="des">原创｜226万次播放 2020-11-01</div>
      <div class="play" :style="'height:' + playHeight + 'px'">
        <video class="video"
               :autoplay="false"
               :width="windowWidth"
               :height="playHeight"
               controls
               :src="src"
               type="video/mp4"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      windowWidth: document.documentElement.clientWidth - 30,  //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      playHeight: 0,
      src: require('../assets/test.mp4'),
    }
  },

  mounted() {
    this.playHeight = this.windowWidth * (9 / 16)
  },

}
</script>

<style scoped>

.main {
  margin-top: 20px;
  padding: 0 15px;
}

.item {
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
}

.des {
  font-size: 11px;
  color: rgba(0, 0, 0, .5);
  line-height: 30px;
}

.play {
  width: 100%;
  height: 120px;
  background: rgba(0, 0, 0, .9);
  border-radius: 10px;
}

video {
  border-radius: 10px;
}

</style>