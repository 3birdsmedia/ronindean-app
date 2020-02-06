<template>
  <q-layout view="hHh lpr fFf">
    <q-header >
      <q-toolbar class="bg-black text-white mobile-hide">
        <q-icon
          name="facebook"
          size="14px"
          class="q-ml-xs"
        />
        <q-space/>
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
    <q-page-container>
      <router-view />
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
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      drawer: true
    // leftDrawerOpen: false
    }
  }
}
</script>
