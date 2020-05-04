<template>
  <div>
    <div class="moment">
      <no-ssr>
        <vue-typer text="WE ARE KAJICO." :repeat='1' initial-action='erasing' erase-style='clear' type-delay='300'></vue-typer>
      </no-ssr>
      <p>WE ARE KAJICO.</p>
      <p>RIGHT TIME,RIGH PLACE<br>CATCH THE PICTURE,WEB,etc</p>
    </div>
    <section class="card">
      <div class="card-content">
        <h1 class="card-title">カジコ</h1>
        <h1 class="card-title">blog</h1>
        <nuxt-link to="blog">>>></nuxt-link>
        <h1 class="card-title">contact</h1>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1EhTGDxOeyv7j8iIs0Kbl9FHujUXTipoK_yWsDZGszEuHbg/viewform">form</a>
        <p class="card-text">YOKOHAMA CITY</p>
        <p class="card-text">kajicoq@gmail.com</p>
      </div>
    </section>

  </div>
</template>

<script>
//import { VueTyper } from 'vue-typer'
//
//export default {
//  components: {
//    VueTyper
//  }
//}
</script>

<style>

h1.footline {
  font-family : Noto Sans,BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3",;
  font-style : ExtraBold;
  font-size : 40px;
  color : #000000;
}
.vue-typer {
  font-family : Noto Sans,BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3",;
  font-style : ExtraBold;
  font-weight : 900;
  font-size : 111px;
  padding: 0px;
  margin-top : 0px;
  margin-bottom : 0px;
  margin-left : 20px;
  color : #000000;
}
.moment {
  font-family : Noto Sans,BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3",;
  font-style : ExtraBold;
  font-weight : 900;
  font-size : 80px;
  margin-left : 20px;
  color : #000000;
}
.card {
  margin: 120px 30px 0px 680px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
</style>
