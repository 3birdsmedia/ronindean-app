<template>
  <q-page class="flex flex-center">
    <q-header reveal height-hint="120">
      <q-toolbar wrap id="nav" class="bg-black text-white mobile-hide" v-bind:class="{show : showNav}">
        <a href="https://www.instagram.com/ronindean/" target="_blank">
          <q-icon clickable
            name="fab fa-instagram"
            size="24px"
            class="q-ml-xs"
          />
        </a>
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
        <q-item clickable flat @click="drawer = !drawer" round dense class="menu-btn">
        <!-- <q-item clickable flat @click="revealNav()" round dense class="menu-btn"-->
          <q-icon
            name="menu"
            size="2em"
          />
        </q-item>
      </q-toolbar>

    </q-header>
      <q-drawer
        side="right"
        overlay
        v-model="drawer"
        content-class="nav"
      >
      <q-list :refs="$refs" class="column text-right" >
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
        <q-item class="justify-end">
          <a href="https://www.instagram.com/ronindean/" target="_blank">
            <q-icon clickable
              name="fab fa-instagram"
              size="24px"
              class="q-ml-xs"
            />
          </a>
        </q-item>
      </q-list>
      </q-drawer>
    <div class="hero main-section window-width text-center flex items-center row justify-center" ref="hero">
    <!-- <q-parallax :height="wh">-->
        <div class="col-12 col-sm-8 col-lg-6 q-pt-xl logo-container">
          <div class="full-width">
            <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-full.svg" class="logo">
            <h2 class="full-width q-ma-none q-px-sm q-px-none-md text-italic anim" v-in-viewport>Your exceptional and elegant virtual assistant, supporting the business behind your business.</h2>
          </div>
        </div>
        <div class="full-width flex row justify-center">
          <div class="col-12 col-md-4 q-px-lg divider anim" v-in-viewport>
            <q-btn class="q-ma-lg q-px-md" size="lg" @click="scrollMeTo('services')" v-ripple>Learn More</q-btn>
            <p>Tailored assistant services to give you time back where you need it most.</p>
          </div>
          <div class="col-12 col-md-4 q-px-lg anim" v-in-viewport>
            <q-btn class="q-ma-lg q-px-md" size="lg" @click="scrollMeTo('contact')" v-ripple>Request a meeting</q-btn>
            <p>Allowing executives, entrepreneurs, teams, talent and influencers to focus on their goals.</p>
          </div>
        </div>
        <video :height="wh" poster="~assets/blurred-hero.jpg" autoplay loop muted class="video-bg">
          <source type="video/webm" src="~assets/blurred-hero.webm">
          <!--source type="video/ogv" src="~assets/blurred-hero.ogv"-->
          <source type="video/mp4" src="~assets/blurred-hero.mp4">
        </video>
    <!-- </q-parallax> -->
    </div>
    <div class="main-section window-width parallax services row justify-center" ref="services" id="services">
          <h2 class="full-width text-center anim q-pb-xl" v-in-viewport>SERVICES</h2>
          <p class="col-10 anim-up q-pb-xl" v-in-viewport>
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
          <p class="full-width q-ma-none text-center text-large q-pt-xl q-pb-md text-italic anim-delay in-viewport"  v-in-viewport> As a client-focused firm, you tell us what you need so we can see that need and meet it; delivering exactly what you pay for and more. So again, we ask, what would you do with an extra two hours in your day?</p>
      </div>
    </div>
    <div class="main-section window-width flex items-center row justify-center about" ref="about" id="about">
      <div class="col-10 col-md-4 text-center anim-down q-py-lg" v-in-viewport>
        <q-img
          src="~assets/kirstie-bw.png"
          spinner-color="white"
          style="width: 90%; border-radius:500px"
          img-class="responsive-image"
          alt="Picture of Kirtie Segura"
        >
        </q-img>
      </div>
      <div class="col-11 col-md-6 text-center anim-up" v-in-viewport>
        <h2>WORK SMARTER NOT HARDER</h2>
          <ul class="q-pa-none">
            <li>No "One Size Fits All"</li>
            <li>Our assistance is tailor-made to your needs</li>
            <li>We cater to you: The Entrepreneur, The Small Business, The Influencer</li>
            <li>Dedicated to excellence, quality & value ("done" is not "better than perfect")</li>
          </ul>
        <h2>PLEASURE TO MEET YOU</h2>
        <p class="text-italic text-large">I'M JOINING YOUR TEAM</p>
        <p>With 18 years experience in customer care, executive operations and administration. LIVING BY  the core values to live with purpose and be of service to others! During my many years working behind the scenes with direct sales entrepreneurs and business owners, I continuously heard "I need another me". Now they say, "I NEED ANOTHER YOU!"</p>
      </div>
      <div class="motif large anim-up" v-in-viewport></div>
      <div class="motif small anim-down" v-in-viewport></div>
    </div>
    <div class="main-section window-width flex items-center row justify-center parallax pricing" ref="pricing" id="pricing">
      <div class="anim" v-in-viewport>
        <h2 class="full-width text-center anim" v-in-viewport>PRICING</h2>
        <p class="text-large text-center q-px-xl">Pricing is customized to your needs, time required and length of service. Prices below are for reference based on calendar week and subject to change.</p>
      </div>
      <div class=" q-px-sm row items-center justify-center">
        <div class="row justify-center col-12 col-sm-10">
          <div class="flex items-center row full-width justify-center anim price q-pa-xl-md q-pa-lg" v-in-viewport>
            <div class="col-12 col-sm-4">
              <q-img
                src="~assets/helpingprice.jpg"
                spinner-color="white"
                style="border-radius:500px"
                img-class="responsive-image"
                alt="Picture of Kirtie Segura"
              >
              </q-img>
            </div>
            <div class="col-12 col-sm-4 q-px-lg">
              <h3 class="q-ma-none q-pt-lg">Hands To Serve</h3>
              <p>Small weekly tasks and projects to give you the breathing room you need to focus on your priorities<br/>
                <span class="text-italic">Starting At $350/week</span>
              </p>
            </div>
          </div>
          <div class="flex items-center row full-width justify-center anim price q-pa-xl-md q-pa-lg" v-in-viewport>
            <div class="col-12 col-sm-4 q-px-lg text-right">
              <h3 class="q-ma-none q-pt-lg">Another Me</h3>
              <p>Working as you or for you to interact with your team, inbox and to-do list to free you up for the freedoms you were originally after.<br/>
              <span class="text-italic">Starting At $700/week</span>
              </p>
            </div>
            <div class="col-12 col-sm-4">
              <q-img
                src="~assets/anotherprice.jpg"
                spinner-color="white"
                style="border-radius:500px"
                img-class="responsive-image"
                alt="Picture of Kirtie Segura"
              >
              </q-img>
            </div>
          </div>
          <div class="flex items-center row full-width justify-center anim price q-pa-xl-md q-pa-lg" v-in-viewport>
            <div class="col-12 col-sm-4">
              <q-img
                src="~assets/executiveprice.jpg"
                spinner-color="white"
                style="border-radius:500px"
                img-class="responsive-image"
                alt="Picture of Kirtie Segura"
              >
              </q-img>
            </div>
            <div class="col-12 col-sm-4 q-px-lg">
              <h3 class="q-ma-none q-pt-lg">Executive/<wbr>Personal</h3>
              <p>Operational and strategic assistants needed to run your business or life on your terms.<br/>
                <span class="text-italic">Starting At $925/week</span></p>
            </div>
          </div>
          <div class="flex items-center row full-width justify-center anim price q-pa-xl-md q-pa-lg" v-in-viewport>
            <div class="col-12 col-sm-4 q-px-lg">
              <h3 class="q-ma-none q-pt-lg">Shared Assistant</h3>
              <p>Built to support your team’s collective and individual needs to ensure synergy and consistency within the organization.<br/>
              <span class="text-italic">Starting At $200 Per Person Per Week</span>
              </p>
            </div>
            <div class="col-12 col-sm-4">
              <q-img
                src="~assets/sharedprice.jpg"
                spinner-color="white"
                style="border-radius:500px"
                img-class="responsive-image"
                alt="Picture of Kirtie Segura"
              >
              </q-img>
            </div>
          </div>
        </div>
      </div>
      <div class="anim-left col-12 full-width text-center q-pb-lg" v-in-viewport>
        <span class="text-italic">Project & Hourly Rates Available</span>
      </div>
    </div>
    <div class="main-section window-width flex items-center row justify-center contact items-strech" ref="contact" id="contact">
      <div class="col-10 col-md-5 dark-bg full-height">
        <div class="contact-logo relative-position full-width text-center">
          <img alt="RoninDean Enterprises Logo" src="~assets/ronindean-logo-outline.svg" class="logo">
        </div>
      </div>
      <div class="col-10 col-md-5 anim light" v-in-viewport>
        <h2>Request a Meeting</h2>
        <!-- <p class="text-large">Use the form on this page or send us an <a class="light" href="mailto:info@ronindean.com" title="Mail RoninDean">email</a>
        </p> -->
        <p>We would love to learn more about how we can best serve you. Please send us an email at <a class="light" href="mailto:info@ronindean.com" title="Mail RoninDean">info@ronindean.com or use the form below</a>. </p>

        <q-dialog v-model="dialog">
          <q-card class="q-pa-sm">
            <q-card-section>
              <p class="q-mb-none">We are grateful for your interest and honor your time. We will respond to you within 24 hours of receipt to schedule our meeting.</p>
              <p class="text-right q-mb-none text-uppercase">~ Ronin<b>Dean</b></p>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <div class="q-pa-md text-large">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              dark
              v-model="name"
              label="Your Name *"
              hint="First Name and Last Name"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              dark
              v-model="company"
              label="Your Company's Name"
            />
            <q-input
              dark
              v-model="email"
              type="email"
              label="Your Email Address*"
              required
            />
            <q-input
              dark
              v-model="tel"
              type="tel"
              label="Your Phone Number*"
              mask="###.###.####"
              unmasked-value
              hint="Format: ###.###.####"
            />
            <div>
              <q-btn :loading="sending" class="q-ma-lg q-px-md" size="lg" v-ripple label="Submit" type="submit"/>
            </div>
          </q-form>
        <p>To learn more about RoninDean follow us on Instagram <a href="https://www.instagram.com/ronindean/" target="_blank">&#64;ronindean</a>
        </p>
          </div>
        <div class="motif large anim-up" v-in-viewport></div>
      </div>
    </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
   </q-page>
</template>
<script>

import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import { scroll } from 'quasar'
import axios from 'axios'
import { fasFont } from '@quasar/extras/fontawesome-v5'
Vue.directive('in-viewport', inViewportDirective)
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'Index',
  create () {
    this.fasFont = fasFont
  },
  methods: {
    scrollMeTo (refName) {
      this.drawer = false
      console.log(refName)
      let el = this.$refs[refName]
      console.log(el)
      // const target = document.getElementById('q-app') // getScrollTarget(el)
      const target = getScrollTarget(el)
      console.log(target)
      const offset = el.offsetTop
      console.log(offset)
      const duration = 1000
      setScrollPosition(target, offset, duration)
    },
    revealNav () {
      let nav = document.getElementById('nav')
      console.log(nav.classList.contains('show'))
      if (nav.classList.contains('show')) {
        this.showNav = false
      } else {
        this.showNav = true
      }
    },
    onSubmit () {
      // let formData = new FormData(document.getElementById('contact_us'))
      // console.log(this.name)
      let showmessage = () => {
        this['sending'] = false
        this.dialog = true
      }
      this['sending'] = true
      // let successMessage = 'We are grateful for your interest and honor your time. We will respond to you within 24 hours of receipt to schedule our time together.'
      // axios.get('https://api.ronindean.com/rest/session/token', axiosConfig)
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'X-CSRF-Token': 'a75wvkZ0VOr1EiPVAikfSsPlvrXPm0F79JsgiMJUrmU',
          'Authorization': 'Basic bXNlZ3VyYTpLUGRyZWFtMCE='
        }
      }
      let postData = {
        'contact_form': [{ 'target_id': 'contact_us' }],
        'name': [{ 'value': this.name }],
        'mail': [{ 'value': this.email }],
        'subject': [{ 'value': 'You have an inquiry' }],
        'message': [{ 'value': this.name + ' from ' + this.company + ' wants to know more about RoninDean, contact them at ' + this.email + ' | ' + this.tel }]
      }
      axios.post('https://api.ronindean.com/contact_message?_format=json', postData, axiosConfig)
        .then(function (response) {
          showmessage()
          // console.log(successMessage)
          // console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  data () {
    return {
      name: null,
      company: null,
      email: null,
      tel: null,
      showNav: false,
      navBar: document.getElementById('nav'),
      wh: window.innerHeight,
      drawer: false,
      sending: false,
      dialog: false
    }
  }
}
</script>
