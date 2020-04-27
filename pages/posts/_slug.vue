<template>
  <article class="article">
    <div class="single">
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <p class="post-created-at">{{ formatDate(post.fields.publishDate) }}</p>
      <div class="post-content" v-html="post.fields.body"></div> 
<!--      <div class="post-content" v-html="$md.render( post.fields.body )"></div> -->
    </div>
  </article>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return { post: entries.items[0] }
      })
      .catch(e => console.log(e))
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  mounted() {
    console.log(this.post)
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

<style lang="scss">
article.article {
  padding: 10px;
  .single {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    color: #222;
    border: 5px solid #444;
    h1, h2, h3 {
      font-family:"proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
      margin: 10px 0;
    }
    h1.post-title {
      font-family:"Noto Sans JP","proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
      font-size: 40x;
      padding-bottom: 20px;
      text-decoration: underline;
    }
    .post-created-at {
        margin: 10px 0;
        font-size: 15px;
        padding-bottom: 10px;
    }
    .post-content {
      font-family:"Noto Sans JP","proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
      font-size: 20px;
      h1 {
        font-family:"proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
        font-size: 100px;
      }
      h2 {
        font-family:"Noto Sans JP","proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
        font-size: 300px;
        background: #ccc
      }
      p {
        margin: 16px 0;
        font-size: 200px;
        padding-bottom: 20px;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
    }
  }
}
</style>