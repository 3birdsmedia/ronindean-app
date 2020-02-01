<template>
  <q-page class="flex flex-center">
    <!--div class="main-section window-height window-width">
        <div class="col-8 col-lg-6 items-center">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width text-center q-ma-none">Elegant, exceptional virtual assistant firm</h2>
            <span>• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span>
        </div>
    </div-->
    <div class="hero main-section window-height window-width text-center flex items-center row justify-center" ref="Services">
        <div class="col-8 col-lg-6">
          <div class="full-width">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width q-ma-none text-italic">Your elegant, exceptional virtual assistant firm tailor made for your needs</h2>
            <!--span class="tag self-end hide">• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span-->
          </div>
        </div>
        <div class="motif large"></div>
        <div class="motif small"></div>
    </div>
    <div class="main-section window-height window-width" ref="services">
      <div class="row justify-between">
        <q-parallax :height="wh" src="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          <ul>
            <li>No "One Size Fits All"</li>
            <li>~OUR ASSISTANCE IS TAILOR-MADE TO YOUR NEEDS</li>
            <li>~WE CATER TO YOU: THE ENTREPRENEUR, THE SMALL BUSINESS, THE INFLUENCER</li>
            <li>~DEDICATED TO EXCELLENCE, QUALITY & VALUE ("DONE" IS NOT "BETTER THAN PERFECT")</li>
          </ul>
          <h2>Services</h2>
          <ul class="service-list full-width">
            <li>Organizational reports</li>
            <li>Email organization & communications</li>
            <li>Travel arrangements</li>
            <li>Calendar management</li>
            <li>CRM management</li>
            <li>Mailers</li>
            <li>Online filing storage</li>
            <li>Cards, mail, gifts & shipping</li>
            <li>Personal shopping</li>
            <li>Online shopping</li>
            <li>Vender & service communications</li>
            <li>Bill Pay</li>
            <li>Event assistance & management</li>
            <li>Team retreat planning</li>
            <li>Projects</li>
            <li>Strategic Planning</li>
            <li>In-Person assistance</li>
            <li>Fliers & invitations</li>
            <li>Visual presentations</li>
            <li>Branding & collateral design</li>
            <li>Social media posting/responses</li>
            <li>Vetting Requests</li>
            <li>Special date management</li>
            <li> +  More</li>
          </ul>
        </q-parallax>
      </div>
    </div>
    <div class="main-section window-height window-width flex items-center row justify-center" ref="About">
      <div class="col-10 col-md-6">
        <h2>PLEASURE TO MEET YOU</h2>
        <p>I'M JOINING YOUR TEAM<br/>
        with 18 years experience in customer care,<br/>
        executive operations and administration.</p>
        <p>LIVING BY  the core values to live with purpose and be of service to others! During my many years working behind the scenes with direct sales entrepreneurs and business owners, I continuously heard "I need another me". Now they say, "I NEED ANOTHER YOU!"</p>
      </div>
    </div>
    <div class="main-section window-height window-width flex items-center row justify-center" ref="Pricing">
        <q-parallax :height="wh" src="../assets/second-bg.jpg">
            <h2>PRICING</h2>
            <p>Pricing is customized to your needs, time required and length of service. Prices below are for reference based on calendar week and subject to change.</p>
        </q-parallax>
    </div>
    <div class="main-section window-height window-width flex items-center row justify-center" ref="Contact">
      <div class="col-10 col-md-6">
        <h2>Contact</h2>

      </div>
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
