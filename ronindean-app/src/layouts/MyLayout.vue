<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fasFont } from '@quasar/extras/fontawesome-v5'

import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

export default {
  create () {
    this.fasFont = fasFont
  }
}
</script>
