<template>
  <div>
    <markdown-it-vue class="md-body" :content="content"/>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue
  },

  data() {
    return {
      content: '### your markdown content main `<markdown-it-vue class="md-body" :content="content"/>`'
    }
  }

}
</script>