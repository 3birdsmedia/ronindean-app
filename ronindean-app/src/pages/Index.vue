<template>
  <q-page class="flex flex-center">
    <q-header reveal elevated>
      <q-toolbar class="bg-black text-white mobile-hide" q-screen.lt.md.hide>
        <q-icon
          name="facebook"
          size="14px"
          class="q-ml-xs"
        />
        <q-space/>
        <q-item clickable name="Services" >
            <q-item-section @click="scrollMeTo('services')">Services</q-item-section>
        </q-item>
        <q-item clickable name="About">
            <q-item-section @click="scrollMeTo('about')">About</q-item-section>
        </q-item>
        <q-item clickable name="Pricing">
            <q-item-section @click="scrollMeTo('pricing')">Pricing</q-item-section>
        </q-item>
        <q-item clickable name="Contact">
            <q-item-section @click="scrollMeTo('contact')">Contact</q-item-section>
        </q-item>
      </q-toolbar>

      <q-toolbar class="desktop-hide">
        <q-space />
        <q-item clickable flat @click="drawer = !drawer" round dense class="menu-btn"/>
        <q-icon
          name="menu"
          size="2em"
        />
      </q-toolbar>

    </q-header>
    <!--div class="main-section window-height window-width">
        <div class="col-8 col-lg-6 items-center">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width text-center q-ma-none">Elegant, exceptional virtual assistant firm</h2>
            <span>• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span>
        </div>
    </div-->
    <div class="hero main-section window-height window-width text-center flex items-center row justify-center" ref="hero">
    <!-- <q-parallax :height="wh">
      <template v-slot:media>
        <video :height="wh" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
          <source type="video/mp4" src="~assets/blurred-hero.mp4">
        </video>
      </template> -->
        <div class="col-8 col-lg-6">
          <div class="full-width">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width q-ma-none text-italic anim" v-in-viewport>Your exceptional and elegant virtual assistant, supporting you the right way</h2>
            <q-btn  @click="scrollMeTo('services')">Learn More</q-btn>

            <p>Tailored assistant services to give you time back where you need it most executives, entrepreneurs, teams, talent/influencers.</p>
            <q-btn  @click="scrollMeTo('contact')">Request a meeting</q-btn>
            <p>Allowing executives, entrepreneurs, teams, talent and influencers to focus on their goals</p>

            <!--span class="tag self-end hide">• EXECUTIVE • PERSONAL • CONCIERGE • TEAM • TALENT/INFLUENCERS •</span-->
          </div>
        </div>
        <div class="motif large anim-up" v-in-viewport></div>
        <div class="motif small anim-down" v-in-viewport></div>
    <!-- </q-parallax> -->
    </div>
    <div class="main-section window-width parallax services row justify-center" ref="services" id="services">
          <h2 class="full-width text-center anim" v-in-viewport>SERVICES</h2>
          <p class="col-10 anim-up" v-in-viewport>
            What could you do with an extra two hours in your day? Or twenty hours in your week, every week? Hit your rank? Build your team? Hit that next goal? Call your mom? Pick up your kids from school? Take real vacation time? Get more sleep? From our experience supporting business owners, CEO’s and social media influencers we know your back office is flooded, your phone is chiming constantly and your trying to keep all the juggling balls in the air, because dropping one means dropping them all. Outsourcing particular tasks and seeking support from a helping hand or even “another you” is a need you can’t afford to not have. We’ve designed our service model knowing one size doesn’t fit all.</p>
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
          <p class="full-width q-ma-none text-italic anim-delay in-viewport"  v-in-viewport> As a client-focused firm, you tell us what you need so we can see that need and meet it; delivering exactly what you pay for and more. So again, we ask, what would you do with an extra two hours in your day?</p>
      </div>
    </div>
    <div class="main-section window-width flex items-center row justify-center" ref="about" id="about">
      <div class="col-10 col-md-4 text-center anim-down q-py-lg" v-in-viewport>
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
    <div class="main-section window-width flex items-center row justify-center parallax pricing" ref="pricing" id="pricing">
      <div class="anim" v-in-viewport>
        <h2 class="full-width text-center q-mb-none">PRICING</h2>
        <p>Pricing is customized to your needs, time required and length of service. Prices below are for reference based on calendar week and subject to change.</p>
      </div>
      <div class=" q-px-lg row items-center">
        <div class="row">
          <div class="anim-up" v-in-viewport>
            <h3 class="q-ma-none q-pt-none q-pt-lg">Hands To Serve</h3>
            <p>Small weekly tasks and projects to give you the breathing room you need to focus on your priorities<br/>
              <span class="text-italic">Starting At $350/week</span>
            </p>
          </div>
          <div class="anim-up" v-in-viewport>
          <h3 class="q-ma-none q-pt-none q-pt-lg">Another Me</h3>
          <p>Working as you or for you to interact with your team, inbox and to-do list to free you up for the freedoms you were originally after.<br/>
            <span class="text-italic">Starting At $700/week</span>
          </p>
          </div>
          <div class="anim-up" v-in-viewport>
            <h3 class="q-ma-none q-pt-none q-pt-lg">Executive/Personal</h3>
            <p>Operational and strategic assistants needed to run your business or life on your terms.<br/>
              <span class="text-italic">Starting At $925/week</span></p>
          </div>
          <div class="anim-up" v-in-viewport>
          <h3 class="q-ma-none q-pt-none q-pt-lg">Shared Assistant</h3>
            <p>Built to support your team’s collective and individual needs to ensure synergy and consistency within the organization.<br/>
              <span class="text-italic">Starting At $200 Per Person Per Week</span>
            </p>
          </div>
        </div>
        <div class="col">

        </div>
      </div>
        <div class="anim-up col-12" v-in-viewport>
          <span class="">Project & Hourly Rates Available</span>
        </div>

    </div>
    <div class="main-section window-width flex items-center row justify-center" ref="contact" id="contact">
      <div class="col-10 col-md-6">
        <h2>Request a meeting</h2>
      </div>
      <div class="col-10 col-md-6 anim" v-in-viewport>
        <div class="q-pa-md" style="max-width: 400px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              v-model="name"
              label="Your name *"
              hint="Name and Last Name"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              v-model="company"
              label="Your company's name"
            />
            <q-input
              v-model="email"
              type="email"
              label="Your Email Address*"
              required
            />
            <q-input
              v-model="tel"
              type="tel"
              label="Your Phone Number*"
              mask="###.###.####"
              unmasked-value
              hint="Format: ###.###.####"
            />
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
            </div>
          </q-form>
          </div>
        <p>
        Message: We are grateful for your interest and honor your time. We will respond to you within 24 hours of receipt to schedule our time together.

        In the meantime, follow us to learn more! (Instagram)
        </p>
      </div>
    </div>
          <!--
        Right side Drawer;
        Notice the HTML Attributes on <drawer> element
      -->
      <q-drawer
        side="right"
        overlay
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="992"
        class="desktop-hide"
        content-class="nav"
      >
      <q-list :refs="$refs" class="column text-right" >
        <q-item clickable name="Services" >
            <q-item-section>Services</q-item-section>
        </q-item>
        <q-item clickable name="About">
            <q-item-section>About</q-item-section>
        </q-item>
        <q-item clickable name="Pricing">
            <q-item-section>Pricing</q-item-section>
        </q-item>
        <q-item clickable name="Contact">
            <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
      </q-drawer>
   </q-page>
</template>
<script>

import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import { scroll } from 'quasar'
Vue.directive('in-viewport', inViewportDirective)
const { setScrollPosition } = scroll

export default {
  name: 'Index',
  methods: {
    scrollMeTo (refName) {
      console.log(refName)
      let el = this.$refs[refName]
      console.log(el)
      const target = document.getElementById('q-app') // getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 1000
      setScrollPosition(target, offset, duration)
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    }
  },
  data () {
    return {
      name: null,
      company: null,
      email: null,
      tel: null,
      wh: window.innerHeight,
      position: 300,
      drawer: true
    }
  }
}
</script>
