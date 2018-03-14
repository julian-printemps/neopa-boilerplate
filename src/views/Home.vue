<template>
  <div class="wrapper">
    <hero></hero>

    <main class="main container text-center">
      <h3 class="intro_info"></h3>
    </main>

    <footer-tag></footer-tag>
  </div>
</template>

<script>
import Vue from 'vue'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

Vue.component('hero', Hero)
Vue.component('footer-tag', Footer)

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
    }
  }
}
</script>
