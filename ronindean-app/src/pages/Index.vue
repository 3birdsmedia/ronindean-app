<template>
  <q-page class="flex flex-center">
    <!--div class="main-section window-height window-width">
        <div class="col-8 col-lg-6 items-center">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width text-center q-ma-none">Elegant, exceptional virtual assistant firm</h2>
            <span>• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span>
        </div>
    </div-->
    <div class="hero main-section window-height window-width text-center flex items-center row justify-center" ref="hero">
        <div class="col-8 col-lg-6">
          <div class="full-width">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width q-ma-none text-italic anim" v-in-viewport>Your elegant, exceptional virtual assistant firm tailor made for your needs</h2>
            <!--span class="tag self-end hide">• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span-->
          </div>
        </div>
        <div class="motif large anim-up" v-in-viewport></div>
        <div class="motif small anim-down" v-in-viewport></div>
    </div>
    <div class="main-section window-width parallax services" ref="services">
      <div class="row justify-between">
          <h2 class="full-width text-center anim-delay" v-in-viewport>SERVICES</h2>
          <ul class="service-list full-width anim-delay" v-in-viewport>
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
      </div>
    </div>
    <div class="main-section window-width flex items-center row justify-center" ref="About">
      <div class="col-10 col-md-4 offset-md-1 text-center anim-down" v-in-viewport>
        <q-img
          src="~assets/kirstie-bw.png"
          spinner-color="white"
          style="width: 90%; border-radius:500px"
          img-class="my-custom-image"
          alt="Picture of Kirtie Segura"
        >
        </q-img>
      </div>
      <div class="col-10 col-md-6 text-center anim-up" v-in-viewport>
        <h2>WORK SMARTER NOT HARDER</h2>
        <p>No "One Size Fits All"<br/>
              ~OUR ASSISTANCE IS TAILOR-MADE TO YOUR NEEDS<br/>
              ~WE CATER TO YOU: THE ENTREPRENEUR, THE SMALL BUSINESS, THE INFLUENCER<br/>
              ~DEDICATED TO EXCELLENCE, QUALITY & VALUE ("DONE" IS NOT "BETTER THAN PERFECT")</p>
        <h2>PLEASURE TO MEET YOU</h2>
        <p class="text-italic">I'M JOINING YOUR TEAM</p>
        <p>With 18 years experience in customer care, executive operations and administration. LIVING BY  the core values to live with purpose and be of service to others! During my many years working behind the scenes with direct sales entrepreneurs and business owners, I continuously heard "I need another me". Now they say, "I NEED ANOTHER YOU!"</p>
      </div>
      <div class="motif large anim-up" v-in-viewport></div>
      <div class="motif small anim-down" v-in-viewport></div>
    </div>
    <div class="main-section window-width flex items-center row justify-center parallax pricing" ref="Pricing">
      <h2 class="full-width text-center q-mb-none">PRICING</h2>
      <div>
        <p>Pricing is customized to your needs, time required and length of service. Prices below are for reference based on calendar week and subject to change.</p>
      </div>
      <div class=" q-px-lg">
        <h3 class="q-ma-none q-pt-none q-pt-lg">Hands To Serve</h3>
        <p>Averaging 10 Hours Per Week<br/>
          <span class="text-italic">Starting At $350/week</span>
        </p>
        <h3 class="q-ma-none q-pt-none q-pt-lg">"Another Me"</h3>
        <p>Averaging 20 Hours Per Week<br/>
          <span class="text-italic">Starting At $700/week</span>
        </p>
        <h3 class="q-ma-none q-pt-none q-pt-lg">Shared Assistant</h3>
          <span class="text-italic">Starting At $200 Per Person Per Week</span>
        <h3 class="q-ma-none q-pt-none q-pt-lg">Executive/Personal</h3>
        <p>120 Hours/month+</p>
        <p>Fully Catered To Your Business And Team Objectives, Without The Hassle Of Employer Obligations.<br/>
          <span class="text-italic">Starting At $925/week</span></p>

          <span class="">Project & Hourly Rates Available</span>
      </div>

    </div>
    <div class="main-section window-width flex items-center row justify-center" ref="Contact">
      <div class="col-10 col-md-6">
        <h2>Contact</h2>

      </div>
    </div>
   </q-page>
</template>
<script>
import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)
export default {
  name: 'PageIndex',
  data: () => ({
    wh: window.innerHeight,
    position: 300
  })
}
</script>
