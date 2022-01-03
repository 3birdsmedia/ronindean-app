<template>
  <div>
    <q-header reveal height-hint="120">
      <q-toolbar
        wrap
        id="nav"
        class="bg-black text-white mobile-hide"
        v-bind:class="{ show: showNav }"
      >
        <a href="https://www.instagram.com/ronindean/" target="_blank">
          <q-icon
            clickable
            name="fab fa-instagram"
            size="24px"
            class="q-ml-xs"
          />
        </a>
        <q-space />
        <q-item clickable name="Services">
          <q-item-section @click="scrollMeTo('services')"
            >Services</q-item-section
          >
        </q-item>
        <q-item clickable name="About">
          <q-item-section @click="scrollMeTo('about')">About</q-item-section>
        </q-item>
        <q-item clickable name="Pricing">
          <q-item-section @click="scrollMeTo('pricing')"
            >Packages</q-item-section
          >
        </q-item>
        <q-item clickable name="Resources">
          <q-item-section @click="scrollMeTo('resources')"
            >Resources</q-item-section
          >
        </q-item>
        <q-item clickable name="Contact">
          <q-item-section @click="scrollMeTo('contact')"
            >Contact</q-item-section
          >
        </q-item>
      </q-toolbar>

      <q-toolbar class="desktop-hide">
        <q-space />
        <q-item
          clickable
          flat
          @click="drawer = !drawer"
          round
          dense
          class="menu-btn"
        >
          <!-- <q-item clickable flat @click="revealNav()" round dense class="menu-btn"-->
          <q-icon name="menu" size="2em" />
        </q-item>
      </q-toolbar>
    </q-header>
    <q-drawer side="right" overlay v-model="drawer" content-class="nav">
      <q-list :refs="$refs" class="column text-right">
        <q-item clickable name="Services">
          <q-item-section @click="scrollMeTo('services')"
            >Services</q-item-section
          >
        </q-item>
        <q-item clickable name="About">
          <q-item-section @click="scrollMeTo('about')">About</q-item-section>
        </q-item>
        <q-item clickable name="Pricing">
          <q-item-section @click="scrollMeTo('pricing')"
            >Pricing</q-item-section
          >
        </q-item>
        <q-item clickable name="Resources">
          <q-item-section @click="scrollMeTo('resources')"
            >Resources</q-item-section
          >
        </q-item>
        <q-item clickable name="Contact">
          <q-item-section @click="scrollMeTo('contact')"
            >Contact</q-item-section
          >
        </q-item>
        <q-item class="justify-end">
          <a href="https://www.instagram.com/ronindean/" target="_blank">
            <q-icon
              clickable
              name="fab fa-instagram"
              size="24px"
              class="q-ml-xs"
            />
          </a>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>
<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  props: {
    refs: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      showNav: false,
      navBar: document.getElementById('nav'),
      wh: window.innerHeight,
      drawer: false
      // leftDrawerOpen: false
    }
  },
  methods: {
    scrollMeTo(refName) {
      this.drawer = false
      // console.log('Ref name', refName)
      this.$nextTick(function() {
        // console.log('Refs', this.$refs)
        // console.log('Refs from prop', this.refs)
        let el = this.refs[refName]
        // console.log('El', el)
        const target = getScrollTarget(el.$el)
        // console.log('Target', target)
        const offset = el.$el.offsetTop
        // console.log(offset)
        const duration = 1000
        setScrollPosition(target, offset, duration)
      })
    },
    revealNav() {
      let nav = document.getElementById('nav')
      // console.log(nav.classList.contains('show'))
      if (nav.classList.contains('show')) {
        this.showNav = false
      } else {
        this.showNav = true
      }
    }
  }
}
</script>
