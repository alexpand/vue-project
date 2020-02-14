<template>
  <div class="app">
      <NavBar />
    <router-view />
  </div>
</template>

<script>

import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
      NavBar
  }
}
</script>

<style lang='scss'>

@import './styles/styles';

body {
    background-color: $dark-back;
   
}

.app {
    font-family: $font;
    color: $dark-back;
}

</style>
