<template>
  <div class="header-block">
    <header>
      <!-- Navbar -->
      <Navigation></Navigation>
    </header>
  </div>

  <div class="app-body">
    <router-view/>
  </div>

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
  .app-body {
    background-color: #fff!important;
    border-top: solid 0.2px rgba(0, 0, 0, 0.2);
  }
</style>
