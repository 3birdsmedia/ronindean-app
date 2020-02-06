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
    <div class="main-section window-width parallax services row justify-center" ref="services">
          <h2 class="full-width text-center anim" v-in-viewport>SERVICES</h2>
          <p class="col-10">
            This is a list of services, the best services ever, such good services that you wouldn't even know why you werent getting them before, becasue life is not the same without this servies. Like they are so good, they are the very best, like no one ever was.
          </p>
      <div class="row justify-between q-col-gutter-lg q-pa-xl items-strech">
          <div class="col-12 col-sm-6 col-lg-3 service-list executive anim-delay" v-in-viewport>
            <div class="full-height">
            <h3>Executive</h3>
            <ul>
              <li>Organization reports</li>
              <li>Email organization</li>
              <li>Email & communication management</li>
              <li>Travel arrangements</li>
              <li>Calendar management</li>
              <li>CRM management</li>
              <li>Mailers</li>
              <li>Online filing storage</li>
            </ul>
          </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 service-list personal anim-delay" v-in-viewport>
            <div class="full-height">
            <h3>Personal</h3>
            <ul>
              <li>Personal shopping</li>
              <li>Online shopping</li>
              <li>Special date management</li>
              <li>Vender & service communications</li>
              <li>Vetting requests</li>
              <li>Bill pay</li>
              <li>Cards, mail, gifts & shipping</li>
            </ul>
          </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 service-list marketing anim-delay" v-in-viewport>
            <div class="full-height">
            <h3>Marketing</h3>
            <ul>
              <li>Fliers & invitations</li>
              <li>Visual presentations</li>
              <li>Branding & collateral design</li>
              <li>Social media posting/responses</li>
            </ul>
          </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 service-list additional anim-delay" v-in-viewport>
            <div class="full-height">
            <h3>Additional</h3>
            <ul>
              <li>Event assistance</li>
              <li>Event management</li>
              <li>Team retreat planning</li>
              <li>In-person assistance</li>
              <li>Projects</li>
              <li>Strategic planning</li>
            </ul>
          </div>
          </div>
      </div>
    </div>
    <div class="main-section window-width flex items-center row justify-center" ref="About">
      <div class="col-10 col-md-4 text-center anim-down" v-in-viewport>
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
      <div class="anim" v-in-viewport>
        <h2 class="full-width text-center q-mb-none">PRICING</h2>
        <p>Pricing is customized to your needs, time required and length of service. Prices below are for reference based on calendar week and subject to change.</p>
      </div>
      <div class=" q-px-lg row items-center">
        <div class="col">
          <div class="anim-up" v-in-viewport>
            <h3 class="q-ma-none q-pt-none q-pt-lg">Hands To Serve</h3>
            <p>Averaging 10 Hours Per Week<br/>
              <span class="text-italic">Starting At $350/week</span>
            </p>
          </div>
          <div class="anim-delay" v-in-viewport>
          <h3 class="q-ma-none q-pt-none q-pt-lg">"Another Me"</h3>
          <p>Averaging 20 Hours Per Week<br/>
            <span class="text-italic">Starting At $700/week</span>
          </p>
          </div>
          <div class="anim-up" v-in-viewport>
          <h3 class="q-ma-none q-pt-none q-pt-lg">Shared Assistant</h3>
            <span class="text-italic">Starting At $200 Per Person Per Week</span>
          </div>
        </div>
        <div class="col">
          <div class="anim-up self-stretch" v-in-viewport>
          <h3 class="q-ma-none q-pt-none q-pt-lg">Executive/Personal</h3>
          <p>120 Hours/month+</p>
          <p>Fully Catered To Your Business And Team Objectives, Without The Hassle Of Employer Obligations.<br/>
            <span class="text-italic">Starting At $925/week</span></p>
          </div>
        </div>
      </div>
        <div class="anim-up col-12" v-in-viewport>
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
