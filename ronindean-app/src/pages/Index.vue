<template>
  <q-page class="flex flex-center">
    <!--div class="main-section window-height window-width">
        <div class="col-8 col-lg-6 items-center">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width text-center q-ma-none">Elegant, exceptional virtual assistant firm</h2>
            <span>• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span>
        </div>
    </div-->
    <div class="hero main-section window-height window-width" ref="Services">
        <q-parallax :height="wh" src="https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?cs=srgb&dl=marble-surface-2341290.jpg&fm=jpg">
            <div class="row justify-center">
              <div class="col-8 col-lg-6 items-center">
                <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
                <h2 class="full-width text-center q-ma-none">Elegant, exceptional virtual assistant firm</h2>
                <span>• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span>
              </div>
            </div>
        </q-parallax>
    </div>
    <div class="main-section window-height window-width" ref="Services">
      <div class="row justify-between">
        <q-parallax :height="wh" src="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          <h2>Services</h2>
        </q-parallax>
      </div>
    </div>
    <div class="main-section window-height window-width" ref="About">
      <h2>About</h2>
    </div>
    <div class="main-section window-height window-width" ref="Pricing">
      <h2>Pricing</h2>
    </div>
    <div class="main-section window-height window-width" ref="Contact">
      <h2>Contact</h2>
    </div>
   </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    wh: window.innerHeight,
    position: 300
  }),
  methods: {
    scroll () {
      this.$refs.scrollArea.setScrollPosition(this.position)
      this.position = Math.floor(Math.random() * 1001) * 20
    },

    animateScroll () {
      this.$refs.scrollArea.setScrollPosition(this.position, 300)
      this.position = Math.floor(Math.random() * 1001) * 20
    }
  }
}
</script>
