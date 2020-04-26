<template>
  <section class="latest-posts">
    <div>
      <h1>KAJICO</h1>
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
article.article {
  padding: 10px;
  .single {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    color: #222;
    border: 2px solid #444;
    border-radius: 10px;
    h1, h2, h3 {
      margin: 16px 0;
    }
    h1.post-title {
      font-size: 32px;
      text-decoration: underline;
    }
    .post-content {
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
        background: #ccc
      }
      p {
        margin: 16px 0;
        font-size: 16px;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
    }
  }
}
</style>
