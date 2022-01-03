<template>
  <div
    class="main-section window-width flex items-center row justify-center about"
  >
    <div
      class="col-10 col-md-4 text-center anim-down q-py-lg"
      v-in-viewport.once
    >
      <q-img
        src="~assets/kirstie-bw.png"
        spinner-color="white"
        style="width: 90%; border-radius:500px"
        img-class="responsive-image"
        alt="Picture of Kirtie Segura"
      >
      </q-img>
      <p class="text-italic q-pt-lg">Kirstie Segura, Founder & CEO</p>
    </div>
    <div class="col-11 col-md-6 text-center anim-up" v-in-viewport.once>
      <h2>WORK SMARTER NOT HARDER</h2>
      <ul class="q-pa-none">
        <li>No "One Size Fits All"</li>
        <li>Our assistance is tailor-made to your needs</li>
        <li>
          We cater to you: The Entrepreneur, The Small Business, The Influencer
        </li>
        <li>
          Dedicated to excellence, quality & value ("done" is not "better than
          perfect")
        </li>
      </ul>
      <h2>PLEASURE TO MEET YOU</h2>
      <p class="text-italic text-large">I'M JOINING YOUR TEAM</p>
      <p>
        With 18 years experience in customer care, executive operations and
        administration. LIVING BY the core values to live with purpose and be of
        service to others! During my many years working behind the scenes with
        direct sales entrepreneurs and business owners, I continuously heard "I
        need another me". Now they say, "I NEED ANOTHER YOU!"
      </p>
    </div>
    <div class="motif large anim-up" v-in-viewport.once></div>
    <div class="motif small anim-down" v-in-viewport.once></div>
  </div>
</template>
