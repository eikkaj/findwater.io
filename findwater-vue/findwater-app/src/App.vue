<template>
  <div class="header-block">
    <header>
      <!-- Navbar -->
      <Navigation></Navigation>
    </header>
  </div>

  <router-view/>

  <Footer></Footer>
</template>

<script>

import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Footer': Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.header-block {
  display: inline-block;
  width: 100%;
  margin-left: 15px;
}
</style>
