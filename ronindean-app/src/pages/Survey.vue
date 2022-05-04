<template>
  <q-page class="flex flex-center">
    <global-header :refs="refs" />
    <div
      class="hero main-section window-width text-center flex row justify-center q-pt-xl"
      ref="hero"
    >
      <q-parallax src="~assets/second-bg.jpg">
        <div class="anim row justify-center" v-in-viewport.once>
          <slot name="title">
            <h2
              class="full-width text-center anim text-uppercase"
              v-in-viewport.once
            >
              Success Survey
            </h2></slot
          >
        </div>
      </q-parallax>
      <div class="q-pa-xl container text-left">
        <p>
          I find generally that we know we need help, we just don't know exactly
          how or what. This will start the process of narrowing down exactly
          where the most help is needed to support you to your goals and next
          successes.
        </p>
      </div>
      <survey-intake ref="contact" id="contact" />
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
import HomeAbout from '../components/home/about.vue'
import HomeContact from '../components/home/contact.vue'
import SurveyIntake from '../components/survey/intake.vue'

export default {
  components: {
    GlobalHeader,
    HomeAbout,
    HomeContact,
    SurveyIntake
  },
  data() {
    return {
      wh: window.innerHeight,
      refs: this.$refs
    }
  }
}
</script>
<style lang="sass" scoped>
::v-deep .q-parallax__content
  background: rgba(254, 229, 211, 0.5)
</style>
