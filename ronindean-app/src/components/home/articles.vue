<template>
  <div
    class="main-section window-width flex items-center row justify-center articles"
  >
    <div class="anim row justify-center" v-in-viewport.once>
      <slot name="title">
        <h2 class="full-width text-center anim" v-in-viewport.once>
          RESOURCES
        </h2></slot
      >
      <slot name="description">
        <p class="text-large text-center q-px-xl full-width">
          We believe in sharing our knowledge, take a look at some of the things
          we have learned and shared along the way.
        </p>
      </slot>
    </div>
    <div class="row justify-center q-col-gutter-lg q-px-xl" v-in-viewport.once>
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="col-7 col-md-4 text-center"
      >
        <div class=" anim-down q-py-md" v-in-viewport.once>
          <router-link :to="'/articles' + article.field_friendly_url">
            <q-img
              :src="baseUrl + article.field_image"
              spinner-color="white"
              style="width: 50%; border-radius:500px"
              img-class="responsive-image"
              alt="Picture of Kirtie Segura"
              :ratio="1"
            />
            <h3 class="q-ma-none q-pt-lg">
              {{ article.title }}
            </h3>
          </router-link>
          <div class="flex items-center justify-center full-width">
            <p class="text-small" v-html="article.summary" />
          </div>

          <!-- <q-btn
          :to="'/articles' + article.field_friendly_url"
          class="q-ma-lg q-px-md"
          size="lg"
          label="read more"
        /> -->
        </div>
      </div>
    </div>
    <slot name="view-more"></slot>
  </div>
</template>
<script>
import axios from 'axios'
import { Loading } from 'quasar'
import { baseUrl } from '../../store/constants'
export default {
  props: {
    limit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      articles: null,
      baseUrl: baseUrl
    }
  },
  async created() {
    try {
      Loading.show()
      let url = baseUrl + 'api/articles/all'
      if (this.limit !== 0) {
        url = url + '&items_per_page=' + this.limit
      }
      const articleResponse = await axios
        .get(url + '?_format=json', {
          headers: {
            'Access-Control-Expose-Headers': '*'
          }
        })
        .then(response => {
          this.articles = response.data
          console.log('Articles', response)
          Loading.hide()
        })
      return articleResponse
    } catch (error) {
      Loading.hide()
      throw error
    }
  }
}
</script>
