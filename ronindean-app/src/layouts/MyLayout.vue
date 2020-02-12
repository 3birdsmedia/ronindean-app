<template>
  <q-layout view="hHh lpr fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
    // leftDrawerOpen: false
    }
  }
}
</script>
