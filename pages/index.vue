<template>
  <section class="latest-posts">
    <div class="logo">
      <h1>カジコ</h1>
    </div>
    <div class="posts">
<!--      <div v-for="(post, index) in posts" :key="index" class="post"> -->
      <nuxt-link :to="'posts/'+post.fields.slug" class="post" v-for="(post, index) in posts" :key="index">
        <div class="thumb">
          <img
            :src="setEyeCatch(post).url"
          />
        </div> 
        <div class="post-text">
          <p>{{ formatDate(post.fields.publishDate) }}</p>
          <h2>{{ post.fields.title }}</h2>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import { mapGetters } from 'vuex'
//import test from '../test.md'

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { posts: entries.items }
      })
      .catch(e => console.log(e))
  },
  head: {
    title: '記事一覧',
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch']) 
  }
}
</script>
<style lang="scss">

section.latest-posts {
  padding: 15px,15px;
  padding-left: 30px;
  font-family:A\+EqpB-游ゴシック体 Pr6N M,sans-serif;
  font-size:30px;
  .logo {
      padding: 15px,15px;
      margin-bottom: 10px;
      width: 15%;     
      text-align: center;
//      border: 5px solid #000;
      font-family:A\+EqpB-游ゴシック体 Pr6N M,sans-serif;
      font-style:bold;
  }
  .posts {
    font-family:"proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ddd;
    a.post {
      width: calc(100% / 2 - 20px);
      @media (min-width: (768px)) {
        width: calc(100% / 3 - 20px);
      }
      margin: 10px;
      background: #fff;
      text-decoration: none;
      color: #111;
      .thumb {
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 100%;
        }
      }
      .post-text {
        padding: 5px 10px 10px;
        font-size: 15px;
        h2 {
          width: fit-content;
          font-family:"Noto Sans JP","proxima-nova", -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;

          font-size: 25px;
        }
      }
    }
  }
}

</style>
