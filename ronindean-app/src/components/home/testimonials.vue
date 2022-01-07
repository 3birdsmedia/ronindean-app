<template>
  <div
    class="row justify-center testimonials hero full-width q-py-xl relative-position"
  >
    <div
      class="col-8 col-sm-6 col-md-3 row justify-center text-center anim-down items-center"
      v-in-viewport.once
    >
      <div class="full-width q-py-xl">
        <q-img
          src="~assets/team-blurred.jpg"
          spinner-color="white"
          style="width: 90%; border-radius:500px"
          img-class="responsive-image"
          alt="The RoninDean Team"
        />
      </div>
    </div>
    <div class="col-12 col-md-8 anim row justify-center" v-in-viewport.once>
      <h3
        class="full-width text-center anim q-my-sm text-uppercase"
        v-in-viewport.once
      >
        What our clients are saying
      </h3>
      <div class="row justify-center full-width" v-in-viewport.once>
        <q-carousel
          v-model="slide"
          swipeable
          animated
          arrows
          padding
          infinite
          autoplay="2500"
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
    <div class="motif large anim-up" v-in-viewport.once></div>
    <div class="motif small anim-down" v-in-viewport.once></div>
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
