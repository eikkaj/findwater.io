<template>
  <div style="width:100%; display:inline;float:left;padding:25px;">
    <div class="nav-left">
      <router-link to="/" class="home">FindWater.io <img alt="Find Water" src="../assets/water-drop.png" style="width:50px" class="logo"></router-link>
    </div>
    <div class="nav">
      <router-link to="/SearchResults" class="link">Water Source Finder</router-link>
      <router-link to="/Submit" class="link">Submit a New Water Source</router-link>
      <router-link to="/About" class="link">About the Project</router-link>
    </div>
    <div class="nav-right">
     <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control"
        placeholder="search for water"
        aria-label="Search"
      />
      <MDBBtn outline="primary"> Search </MDBBtn>
    </form>
    </div>
  </div>
</template>

<script>

import { MDBBtn  } from 'mdb-vue-ui-kit';

export default {
  name: 'Navigation',
  components: {
  MDBBtn
  },
  data() {
    return {
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
a {
  color: #111!important;
}
.home {
  font-size: 1.5rem;
}
.nav {
  display: inline-block;
  line-height:75px;
  float: left;
  margin-left: 15px;
}
.nav-left {
  float: left;
  display: inline-block;
  line-height: 70px;
}
.nav-right {
  float:right;
  display: inline-block;
  line-height:45px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1300px;
  position: relative;
}
.link {
  margin-right: 15px;
}
a.link:hover {
  text-decoration: underline;
}
.logo {
  display: inline-block;
  vertical-align: top;
}
</style>