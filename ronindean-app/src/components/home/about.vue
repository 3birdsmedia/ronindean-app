<template>
  <div
    class="main-section window-width flex items-center row justify-center about q-pb-xl"
  >
    <div
      class="col-8 col-sm-6 col-md-4 text-center anim-down q-pb-lg q-pt-xs-xl  q-pt-md-xl"
      v-in-viewport.once
    >
      <q-img
        src="~assets/kirstie-new.jpg"
        spinner-color="white"
        style="width: 90%; border-radius:500px"
        img-class="responsive-image"
        alt="Picture of Kirtie Segura"
      />

      <p class="text-italic q-pt-lg">Kirstie Segura, Founder & CEO</p>
    </div>
    <div
      class="col-11 col-md-6 text-center anim-up row justify-center"
      v-in-viewport.once
    >
      <h2>WORK SMARTER NOT HARDER</h2>
      <ul class="q-pa-none">
        <li>No "One Size Fits All"</li>
        <li>Our assistance is tailor-made to your needs</li>
        <li>
          We cater to you: The Executive, The Entrepreneur, The Small Business,
          The Influencer
        </li>
        <li>
          Dedicated to excellence, quality & value
        </li>
      </ul>
      <div>
        <p class="text-italic text-large">WE ARE JOINING YOUR TEAM</p>
        <p>
          With a combined 45 years experience in customer care, project
          management, executive operations and administration. LIVING BY the
          core values to live with purpose and be of service to others! During
          our many years working behind the scenes with business owners like
          you, we continuously heard "I need another me". Now they say, "I NEED
          ANOTHER YOU!"
        </p>
      </div>
    </div>
    <div class="motif large anim-up" v-in-viewport.once></div>
    <div class="motif small anim-down" v-in-viewport.once></div>
  </div>
</template>
