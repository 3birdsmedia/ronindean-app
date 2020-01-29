<template>
  <q-layout view="hHh lpr fFf">
    <q-header  fixed>
      <q-toolbar>
      <q-space />
      <q-tabs :refs="$refs" >
        <q-tab name="Services" >
            Services
        </q-tab>
        <q-tab name="About">
            About
        </q-tab>
        <q-tab name="Pricing">
            Pricing
        </q-tab>
        <q-tab name="Contact">
            Contact
        </q-tab>
      </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
