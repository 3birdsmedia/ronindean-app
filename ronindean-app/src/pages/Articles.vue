<template>
  <q-page class="flex flex-center">
    <global-header :refs="refs" />
    <div
      class="hero main-section window-width text-center flex items-center row justify-center q-pt-xl"
      ref="hero"
    >
      <home-articles ref="articles" id="articles"> </home-articles>
      <!-- <q-parallax :height="wh">-->
      <video
        :height="wh"
        poster="~assets/blurred-hero.jpg"
        autoplay
        loop
        muted
        class="video-bg"
      >
        <source type="video/webm" src="~assets/blurred-hero.webm" />
        <!--source type="video/ogv" src="~assets/blurred-hero.ogv"-->
        <source type="video/mp4" src="~assets/blurred-hero.mp4" />
      </video>
      <!-- </q-parallax> -->
    </div>
    <home-about ref="about" id="about" />
    <home-contact ref="contact" id="contact" />

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>
<script>
import GlobalHeader from '../components/global/secondary-header.vue'
import HomeArticles from '../components/home/articles.vue'
import HomeAbout from '../components/home/about.vue'
import HomeContact from '../components/home/contact.vue'

export default {
  components: {
    GlobalHeader,
    HomeAbout,
    HomeArticles,
    HomeContact
  },
  data() {
    return {
      wh: window.innerHeight,
      refs: this.$refs
    }
  }
}
</script>
