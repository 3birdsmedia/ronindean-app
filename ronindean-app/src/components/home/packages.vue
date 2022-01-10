<template>
  <div
    class="main-section window-width flex items-center row justify-center parallax pricing"
  >
    <div class="anim row justify-center q-pb-xl" v-in-viewport.once>
      <h2 class="full-width text-center anim q-mb-sm" v-in-viewport.once>
        OFFERINGS
      </h2>

      <div
        class="row items-center full-width justify-center q-py-xl anim-left"
        v-in-viewport.once
      >
        <div
          class="col-12 col-sm-5 col-md-4 col-lg-3 q-px-xs-xl q-px-sm-sm q-py-md"
        >
          <q-img
            src="~assets/executiveprice.jpg"
            spinner-color="white"
            style="border-radius:500px"
            img-class="responsive-image"
            alt="Picture of assistant writting on board"
          >
          </q-img>
        </div>
        <div class="col-12 col-sm-6 col-md-4 q-px-xl">
          <p>
            Our team is dedicated to a long-term commitment to you, your team,
            and your business success. We understand high quality excellent
            experience is not a one size fits all option. In response we offer a
            customized approach to your needs.
          </p>
        </div>
      </div>
      <div
        class="row items-center full-width justify-center anim-right"
        v-in-viewport.once
      >
        <div class="col-12 col-sm-6 col-md-4 q-px-xl">
          <p>
            From part-time administrative assistance to project management, from
            full-time luxury assistance to executive operations and shared team
            assistance.
          </p>
        </div>
        <div
          class="col-12 col-sm-5 col-md-4 col-lg-3 q-px-xs-sm q-px-xs-xl q-px-sm-sm q-py-md"
        >
          <q-img
            src="~assets/sharedprice.jpg"
            spinner-color="white"
            style="border-radius:500px"
            img-class="responsive-image"
            alt="Picture of assistants meeting"
          >
          </q-img>
        </div>
      </div>
      <q-btn
        color="primary"
        class="q-ma-lg q-px-md self-center"
        size="lg"
        @click="eventBus.$emit('scrollMeTo', 'contact')"
        v-ripple
        >Request a meeting</q-btn
      >
    </div>
  </div>
</template>
<script>
import eventBus from '../../store/constants'

export default {
  data() {
    return {
      eventBus: eventBus
    }
  }
}
</script>
