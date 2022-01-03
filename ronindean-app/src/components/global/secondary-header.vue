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
        <router-link to="/">
          <q-icon clickable name="home" size="24px" class="q-ml-xs" />
        </router-link>
        <q-space />
        <q-item clickable name="Services">
          <router-link to="/#services"> Services</router-link>
        </q-item>
        <q-item clickable name="About">
          <router-link to="/#about">
            About
          </router-link>
        </q-item>
        <q-item clickable name="Pricing">
          <router-link to="/#pricing">
            Packages
          </router-link>
        </q-item>
        <q-item clickable name="Contact">
          <router-link to="/#contact">
            Contact
          </router-link>
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
          <router-link to="/">
            Services
          </router-link>
        </q-item>
        <q-item clickable name="About">
          <router-link to="/">
            About
          </router-link>
        </q-item>
        <q-item clickable name="Pricing">
          <router-link to="/">
            Pricing
          </router-link>
        </q-item>
        <q-item clickable name="Resources">
          <router-link to="/">
            Resources
          </router-link>
        </q-item>
        <q-item clickable name="Contact">
          <router-link to="/">
            Contact
          </router-link>
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
