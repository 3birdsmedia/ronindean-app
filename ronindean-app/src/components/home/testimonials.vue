<template>
  <div class="row justify-center testimonials hero full-width q-pb-xl">
    <div class="anim row justify-center" v-in-viewport.once>
      <h3 class="full-width text-center anim" v-in-viewport.once>
        What are people saying
      </h3>
    </div>
    <div class="row justify-center full-width" v-in-viewport.once>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        arrows
        padding
        infinite
        control-color="primary"
        class="container row"
        style="background:none"
      >
        <q-carousel-slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :name="index"
          class="full-width text-center flex items-center"
        >
          <div class="full-width">
            <div class="text-small full-width" v-html="testimonial.body" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
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
      testimonials: null,
      slide: 1,
      baseUrl: baseUrl
    }
  },
  async created() {
    try {
      let url = baseUrl + 'api/testimonials/all'
      if (this.limit !== 0) {
        url = url + '&items_per_page=' + this.limit
      }
      const articleResponse = await axios
        .get(url + '?_format=json')
        .then(response => {
          this.testimonials = response.data
          console.log('Testimonials', response)
        })
      return articleResponse
    } catch (error) {
      throw error
    }
  }
}
</script>
<style lang="sass" scoped>
.testimonials
  z-index: 5
  ::v-deep .q-carousel__slides-container
    width: 100%
</style>
