<template>
  <div
    class="main-section window-width flex items-center row justify-center contact items-strech"
  >
    <div class="col-10 col-md-5 dark-bg full-height">
      <div class="contact-logo relative-position full-width text-center">
        <img
          alt="RoninDean Enterprises Logo"
          src="~assets/ronindean-logo-outline.svg"
          class="logo"
        />
      </div>
    </div>
    <div class="col-10 col-md-5 anim light" v-in-viewport.once>
      <h2>Request a Meeting</h2>
      <!-- <p class="text-large">Use the form on this page or send us an <a class="light" href="mailto:info@ronindean.com" title="Mail RoninDean">email</a>
        </p> -->
      <p>
        We would love to learn more about how we can best serve you. Please send
        us an email at
        <a class="light" href="mailto:info@ronindean.com" title="Mail RoninDean"
          >info@ronindean.com or use the form below</a
        >.
      </p>

      <q-dialog v-model="dialog">
        <q-card class="q-pa-sm">
          <q-card-section>
            <p class="q-mb-none">
              We are grateful for your interest and honor your time. We will
              respond to you within 24 hours of receipt to schedule our meeting.
            </p>
            <p class="text-right q-mb-none text-uppercase">
              ~ Ronin<b>Dean</b>
            </p>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="q-pa-md text-large">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            dark
            v-model="name"
            label="Your Name *"
            hint="First Name and Last Name"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          />
          <q-input dark v-model="company" label="Your Company's Name" />
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
          <q-input
            dark
            label="Tell us a little more"
            v-model="text"
            filled
            type="textarea"
          />
          <div>
            <vue-recaptcha
              ref="recaptcha"
              @verify="captchaVerify"
              @expired="captchaExpired"
              :loadRecaptchaScript="true"
              theme="dark"
              sitekey="6Lcp69gZAAAAAPsCzfd3LCdGtEVHUJWgoY_w1LIh"
            >
            </vue-recaptcha>
            <!--button :disabled="status==='submitting'" type="submit" class="button">sign up</button-->
            <q-btn
              color="primary"
              :loading="sending"
              class="q-ma-lg q-px-md"
              size="lg"
              v-ripple
              label="Submit"
              :disabled="status"
              type="submit"
            />
          </div>
        </q-form>
        <p>
          To learn more about RoninDean follow us on Instagram
          <a href="https://www.instagram.com/ronindean/" target="_blank"
            >&#64;ronindean</a
          >
        </p>
      </div>
      <div class="motif large anim-up" v-in-viewport.once></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { baseUrl } from '../../store/constants'
import { Notify } from 'quasar'
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      name: null,
      company: null,
      email: null,
      tel: null,
      text: null,
      sending: false,
      dialog: false,
      status: true
    }
  },
  methods: {
    captchaVerify(response) {
      // when you need a reCAPTCHA challenge
      console.log('Captcha', response)
      if (response) {
        this.status = false
      }
    },
    captchaExpired() {
      this.status = true
    },
    onSubmit() {
      let showmessage = () => {
        this.sending = false
        this.dialog = true
      }
      axios
        .get(baseUrl + 'session/token')
        .then(response => {
          this.token = response.data
          console.log('response', response.data)
        })
        .catch(error => {
          console.log(error)
          // Notify.create({
          //   color: 'negative',
          //   position: 'top',
          //   message: 'Something went wrong, please try again'
          // })
        })
        .finally(() => {
          // console.log('Token', this.token)
          const headers = {
            headers: {
              Accept: 'json',
              'Content-Type': 'application/json; charset=UTF-8',
              'X-CSRF-Token': this.token
            }
          }
          let text = ''
          text += this.name
          text += this.company ? ' from ' + this.company : ''
          text +=
            ' wants to know more about RoninDean, contact them at ' +
            this.email +
            ' | ' +
            this.tel
          const postData = {
            webform_id: 'contact',
            name: this.name,
            subject: "You got an email from ronidean.com's contact form",
            email: this.email,
            message: text
          }
          axios
            .post(baseUrl + 'webform_rest/submit', postData, headers)
            .then(response => {
              // Notify.create({
              //   color: 'positive',
              //   position: 'top',
              //   message:
              //     'Your message was sent, please give us 1-2 business days to reply'
              // })
              console.log('contanct response', response)
              showmessage()
            })
            .catch(error => {
              console.log(error)
              Notify.create({
                color: 'negative',
                position: 'top',
                message:
                  'Something went wrong, please check your username/password'
              })
            })
            .finally(() => {
              this.loading = false
            })
        })
    }
    // onSubmit() {
    //   // let formData = new FormData(document.getElementById('contact_us'))
    //   // console.log(this.name)
    //   let showmessage = () => {
    //     this.sending = false
    //     this.dialog = true
    //   }
    //   this.sending = true
    //   // let successMessage = 'We are grateful for your interest and honor your time. We will respond to you within 24 hours of receipt to schedule our time together.'
    //   // axios.get('https://api.ronindean.com/rest/session/token', axiosConfig)
    //   const axiosConfig = {
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8',
    //       'Access-Control-Allow-Methods': '*',
    //       'Access-Control-Allow-Headers': '*',
    //       'Access-Control-Allow-Origin': '*',
    //       'X-CSRF-Token': 'a75wvkZ0VOr1EiPVAikfSsPlvrXPm0F79JsgiMJUrmU',
    //       Authorization: 'Basic bXNlZ3VyYTpLUGRyZWFtMCE='
    //     }
    //   }
    //   const postData = {
    //     contact_form: [{ target_id: 'contact_us' }],
    //     name: [{ value: this.name }],
    //     mail: [{ value: this.email }],
    //     subject: [{ value: 'You have an inquiry' }],
    //     message: [
    //       {
    //         value:
    //           this.name +
    //           ' from ' +
    //           this.company +
    //           ' wants to know more about RoninDean, contact them at ' +
    //           this.email +
    //           ' | ' +
    //           this.tel
    //       }
    //     ]
    //   }
    //   axios
    //     .post(
    //       'https://api.ronindean.com/contact_message?_format=json',
    //       postData,
    //       axiosConfig
    //     )
    //     .then(function(response) {
    //       showmessage()
    //       // console.log(successMessage)
    //       // console.log(response)
    //     })
    //     .catch(function(error) {
    //       console.log(error)
    //     })
    // }
  }
}
</script>
<style lang="sass" scoped>
.contact
    background: $dark
    .contact-logo:after
        display: block
        position: absolute
        top: 0
        width: 100%
        height: 100%
        content: " "
        background: linear-gradient(135deg,rgba(29,29,29,0) 45%,rgba(29,29,29,.3) 50%,rgba(29,29,29,0) 51%)
        background-size: 750% 750%
        animation: shine 3.5s linear infinite
    .contact-logo
        .logo
            width: 90%
</style>
