<template>
  <div id="app">
    <svgsprites></svgsprites>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import SvgSprites from '@/components/SvgSprites'

Vue.component('svgsprites', SvgSprites)

export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | NEOPA Boilerplate'
  }
}
</script>

<style lang="scss"></style>
