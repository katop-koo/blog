<template>
  <div :class="{
        'moment-pc': $ua.deviceType() === 'pc',
        'moment-mob': $ua.deviceType() !== 'pc'
      }">
    <p>WE ARE KAJICO. {{$ua.deviceType()}}</p>
    <p>THE PHOTO,WEB,etc</p>
    <section class="card">
      <div class="card-content">
        <p class="card-title">カジコ</p>
        <nuxt-link to="blog" class="card-text">news</nuxt-link>
        <a class="card-text" href="https://docs.google.com/forms/d/e/1FAIpQLSd1EhTGDxOeyv7j8iIs0Kbl9FHujUXTipoK_yWsDZGszEuHbg/viewform">contact</a>
        <p class="card-text">YOKOHAMA CITY</p>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
h1.footline {
  font-family : Noto Sans,BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3",;
  font-style : ExtraBold;
  font-size : 40px;
  color : #000000;
}

.moment {
  font-family : Noto Sans,BlinkMacSystemFont, "Avenir Next", "Avenir", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ ProN W3",;
  font-style : ExtraBold;
  color : #000000;
  &-pc{
    font-weight : 900;
    font-size : 70px;
    margin-left : 20px;
  }
  &-mob{
    font-weight : 500;
    font-size : 30px;
    margin-left : 10px;
  }
}
.card {
  margin: 120px 30px 0px 680px;
  width: 250px;
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
  padding: 15px;
}
.card-title {
  font-size: 20px;
  text-align: left;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

</style>
