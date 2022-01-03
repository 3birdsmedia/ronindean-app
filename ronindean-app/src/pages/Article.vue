<template>
  <q-page class="flex flex-center">
    <global-header :refs="refs" />
    <div
      class="hero main-section window-width text-center flex row justify-center q-pt-xl"
      ref="hero"
      v-if="article"
    >
      <q-parallax :src="'http://api.ronindean.com' + this.article.field_image">
        <div class="anim row justify-center" v-in-viewport.once>
          <slot name="title">
            <h2 class="full-width text-center anim" v-in-viewport.once>
              {{ article.title }}
            </h2></slot
          >
          <slot name="description">
            <router-link to="/">home</router-link
            ><span class="q-px-sm"> / </span>
            <router-link to="/articles"> resources </router-link>
            <span class="q-px-sm"> / </span>
            {{ article.title }}
          </slot>
        </div>
      </q-parallax>
      <div class="q-pa-xl container" v-html="article.body"></div>
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
import axios from 'axios'
import GlobalHeader from '../components/global/secondary-header.vue'
import HomeAbout from '../components/home/about.vue'
import HomeContact from '../components/home/contact.vue'

export default {
  components: {
    GlobalHeader,
    HomeAbout,
    HomeContact
  },
  data() {
    return {
      wh: window.innerHeight,
      refs: this.$refs,
      article: null
    }
  },
  async created() {
    const id = this.$route.params.id
    try {
      let url = 'http://api.ronindean.com/api/articles/all?url_mask=/' + id
      const articleResponse = await axios
        .get(url + '&_format=json')
        .then(response => {
          this.article = response.data[0]
          console.log('Article', response)
        })
      return articleResponse
    } catch (error) {
      throw error
    }
  }
}
</script>
<style lang="sass" scoped>
::v-deep .q-parallax__content
  background: rgba(254, 229, 211, 0.5)
</style>
