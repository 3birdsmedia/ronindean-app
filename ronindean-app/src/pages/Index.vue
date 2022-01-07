<template>
  <q-page class="flex flex-center">
    <global-header :refs="refs" />
    <div
      class="hero main-section window-width text-center flex items-center row justify-center"
      ref="hero"
    >
      <!-- <q-parallax :height="wh">-->
      <div class="col-12 col-sm-8 col-lg-6 q-pt-xl logo-container">
        <div class="full-width">
          <img
            alt="RoninDean Enterprises Logo"
            src="~assets/ronindean-logo-full.svg"
            class="logo q-pt-lg"
          />
          <h2
            class="full-width q-ma-none q-px-sm q-px-none-md text-italic anim"
            v-in-viewport.once
          >
            A systems integration firm. Exceptional luxury assistance and
            project management services, supporting the business behind your
            business.
          </h2>
        </div>
      </div>
      <div class="full-width flex row justify-center">
        <div class="col-12 col-md-4 q-px-lg divider anim" v-in-viewport.once>
          <q-btn
            color="primary"
            class="q-ma-lg q-px-md"
            size="lg"
            @click="scrollMeTo('services')"
            v-ripple
            >Learn More</q-btn
          >
          <p>
            Tailored assistant services to give you time back where you need it
            most.
          </p>
        </div>
        <div class="col-12 col-md-4 q-px-lg anim" v-in-viewport.once>
          <q-btn
            color="primary"
            class="q-ma-lg q-px-md"
            size="lg"
            @click="scrollMeTo('contact')"
            v-ripple
            >Request a meeting</q-btn
          >
          <p>
            Allowing executives, entrepreneurs, teams, talent and influencers to
            focus on their goals.
          </p>
        </div>
      </div>
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
    <home-services ref="services" id="services" />
    <home-about ref="about" id="about" />
    <home-testimonials ref="testimonials" id="testimonials" />
    <home-packages ref="pricing" id="pricing" />
    <!-- <home-articles ref="resources" id="resources">
      <template v-slot:view-more>
        <router-link to="/articles" class="q-pa-lg">view more</router-link>
      </template>
    </home-articles> -->
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
import GlobalHeader from '../components/global/header.vue'
import HomeServices from '../components/home/services.vue'
import HomeAbout from '../components/home/about.vue'
import HomeTestimonials from '../components/home/testimonials.vue'
import HomePackages from '../components/home/packages.vue'
// import HomeArticles from '../components/home/articles.vue'
import HomeContact from '../components/home/contact.vue'

export default {
  components: {
    GlobalHeader,
    HomeServices,
    HomeAbout,
    HomeTestimonials,
    HomePackages,
    // HomeArticles,
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
