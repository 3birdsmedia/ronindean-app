<template>
  <div class="main-section row justify-center intake items-strech full-width">
    <div class="col-12 anim " v-in-viewport.once>
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
          <h4>
            What is your biggest pain point in your business (and even personal
            life since it can blend together at times)?
          </h4>
          <q-input
            v-model="pain_point"
            filled
            type="textarea"
            :rules="[
              val =>
                (val && val.length > 0) ||
                'Please answer this question so we can assist you better!'
            ]"
            required
          />
          <q-separator class="q-ma-xl" />
          <h4>
            If you were given back an hour in your day (or 2 hours etc), what
            could you do with that time?
          </h4>
          <q-input
            v-model="hour_back"
            filled
            type="textarea"
            :rules="[
              val =>
                (val && val.length > 0) ||
                'Please answer this question so we can assist you better!'
            ]"
            required
          />
          <q-separator class="q-ma-xl" />
          <h4>
            Look at the tasks you do day to day; what needs to be delegated off
            and what can only you do?
          </h4>
          <q-input
            v-model="delegate"
            filled
            type="textarea"
            :rules="[
              val =>
                (val && val.length > 0) ||
                'Please answer this question so we can assist you better!'
            ]"
            required
          />
          <q-separator class="q-ma-xl" />
          <div class="row">
            <div class="col-12 col-md-6 q-pa-md">
              <q-input
                v-model="name"
                label="Your Name *"
                hint="First Name and Last Name"
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
                required
              />
            </div>
            <div class="col-12 col-md-6 q-pa-md">
              <q-input
                v-model="email"
                type="email"
                label="Your Email Address*"
                required
              />
            </div>
          </div>

          <div class="flex justify-center items-center q-pt-xl">
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
        <p class="q-pt-xl">
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
import { Notify, Loading } from 'quasar'
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      name: null,
      email: null,
      pain_point: null,
      hour_back: null,
      delegate: null,
      sending: false,
      dialog: false,
      status: true,
      form: null
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
          const postData = {
            webform_id: 'intake_form',
            subject: "You got an email from ronidean.com's contact form",
            name: this.name,
            email: this.email,
            pain_point: this.pain_point,
            hour_back: this.hour_back,
            delegate: this.delegate
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
  },
  async created() {
    try {
      Loading.show()
      let url = baseUrl + '/webform_rest/intake_form/elements?_format=json'
      const formResponse = await axios
        .get(url + '&_format=json')
        .then(response => {
          this.form = response.data[0]
          console.log('Form', response)
          Loading.hide()
        })
      return formResponse
    } catch (error) {
      Loading.hide()
      throw error
    }
  }
}
</script>
