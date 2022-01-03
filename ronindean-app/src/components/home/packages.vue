<template>
  <div
    class="main-section window-width flex items-center row justify-center parallax pricing"
  >
    <div class="anim row justify-center" v-in-viewport.once>
      <h2 class="full-width text-center anim" v-in-viewport.once>PACKAGES</h2>
      <p class="text-large text-center q-px-xl full-width">
        Packages and pricing are customized to your needs, time required and
        length of service.
      </p>
      <q-btn
        class="q-ma-lg q-px-md self-center"
        size="lg"
        @click="scrollMeTo('contact')"
        v-ripple
        >Request a meeting</q-btn
      >
    </div>
    <div class=" q-px-sm row items-center justify-center">
      <div class="row justify-center col-12 col-sm-10">
        <div
          class="flex items-center row full-width justify-center anim-left price q-pa-xl-md q-pa-lg"
          v-in-viewport.once
        >
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
            <p>
              Small weekly tasks and projects to give you the breathing room you
              need to focus on your priorities
            </p>
          </div>
        </div>
        <div
          class="flex items-center row full-width justify-center anim-right price q-pa-xl-md q-pa-lg"
          v-in-viewport.once
        >
          <div class="col-12 col-sm-4 q-px-lg text-right">
            <h3 class="q-ma-none q-pt-lg">Another Me</h3>
            <p>
              Working as you or for you to interact with your team, inbox and
              to-do list to free you up for the freedoms you were originally
              after.
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
        <div
          class="flex items-center row full-width justify-center anim-left price q-pa-xl-md q-pa-lg"
          v-in-viewport.once
        >
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
            <h3 class="q-ma-none q-pt-lg">Executive/<wbr />Personal</h3>
            <p>
              Operational and strategic assistants needed to run your business
              or life on your terms.
            </p>
          </div>
        </div>
        <div
          class="flex items-center row full-width justify-center anim-right price q-pa-xl-md q-pa-lg"
          v-in-viewport.once
        >
          <div class="col-12 col-sm-4 q-px-lg">
            <h3 class="q-ma-none q-pt-lg">Shared Assistant</h3>
            <p>
              Built to support your team’s collective and individual needs to
              ensure synergy and consistency within the organization.<br />
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
    <div
      class="anim-left col-12 full-width text-center q-pb-lg"
      v-in-viewport.once
    >
      <span class="text-italic">Project & Hourly Rates Available</span>
    </div>
  </div>
</template>
