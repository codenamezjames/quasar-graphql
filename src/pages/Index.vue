<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <example-graph />
  </q-page>
</template>

<style>
</style>

<script>
import exampleGraph from '../components/ExampleGraphql.vue'
export default {
  name: 'PageIndex',
  components: {
    exampleGraph
  }
}
</script>
