<template>
  <div style="width:100%; display:inline;float:left;padding:25px;">
    
    <div class="nav-left">
      <router-link to="/" class="home">FindWater.io <img alt="Find Water" src="../assets/water-drop.png" style="width:50px" class="logo"></router-link>
    </div>
    
    <div class="nav">
      <router-link to="/SearchResults" class="link">Water Source Finder</router-link>
      <router-link to="/Submit" class="link login">
        Submit a New Water Source
      </router-link>
      <router-link to="/About" class="link">About the Project</router-link>
      <router-link to="/Contact" class="link">Contact Us</router-link>
    </div>
    
    <div class="nav-right">
      <div class="helllo" v-show="loggedIn">
        <h6>Welcome, {{this.username}}</h6>
      </div>
    
      <MDBBtn color="primary" aria-controls="exampleModal" @click="exampleModal = true" v-show="!loggedIn">Login</MDBBtn>
      
      <Register></Register>
    
      <MDBBtn color="primary" aria-controls="exampleModal" @click="logout()" v-show="loggedIn">Logout</MDBBtn>
    

      <!-- TODO SEARCH INLINE
       <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="search for water"
          aria-label="Search"
        />
        <MDBBtn outline="primary"> Search </MDBBtn>
      </form>
      -->

    </div>

  </div>

  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">Log Into FindWater.io</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div>
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
            <form @submit="register">
              <div class="reg">
                <h5 class="text-left font-bold mb-2 font-montserrat reg-header">Email</h5>
                  <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
              </div>
              <div class="reg">
                <h5 class="text-left font-bold mb-2 font-montserrat reg-header">Password</h5>
                <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
              </div>
                            
              <!-- <button type="submit" :disabled="email.length < 6 || password.length < 6 " class="reg-button">
                Sign Up
              </button> -->
            </form>
          </div>
        </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary" :disabled="email.length < 6 || password.length < 6 " type="submit" @click="login()">Log In</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>

<script>
  import { MDBBtn, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-vue-ui-kit'

  import Register from '@/components/Register'

  import { ref } from 'vue'

  //import $ from 'jquery'

  export default {
    name: 'Navigation',
    components: {
      MDBBtn,
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      Register
    },

    data() {
      return {
        email: '',
        password: '',
        username: '',
        error: false,
        errorMsg: `An Error occurred, please try again`,
        loggedIn: false
      }
    },
    
    setup() {
      const exampleModal = ref(false);
      return {
        exampleModal,
      };
    },

    methods: {
      async login() {
        try {
          const res = await this.axios.post(`http://localhost:1337/auth/local`, {
            identifier: this.email,
            password: this.password,
            username: this.username
          });
          const { jwt, user } = res.data
          window.localStorage.setItem('jwt', jwt)
          window.localStorage.setItem('userData', JSON.stringify(user))
          window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))
          this.exampleModal = false
          this.loggedIn = true
          this.username = window.localStorage.userData.username
          console.log(this.username)
        } catch(e) {
          console.log('Error: ' + e);
          this.error = true
          this.email = ''
        } 
      },
      async logout() {
        window.localStorage.setItem('jwt', null)
        window.localStorage.setItem('userData', null)
        window.localStorage.setItem('bookmarks', null)
        this.loggedIn = false
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
    padding-top: 10px;
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
  .login[disabled="true"]:hover {
    color: #808080;
    text-decoration: none;
    pointer-events: none;
  }
  .login .tooltiptext {
    visibility: hidden;
    background-color: #808080;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    line-height: 25px;
    margin-top: -20px;
    margin-left: -225px;
  
    /* Position the tooltip */
    position: absolute;
    z-index: 999;
  }
  .login[disabled="true"]:hover .tooltiptext {
    visibility: visible;
  }
  .logo {
    display: inline-block;
    vertical-align: top;
  }
  .reg-header {
    display: inline-block;
    padding: 5px;
    width: 30%;
  }
  .reg-container {
    background-color: #f1f1f1;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .5rem;
  }
  .reg-input {
    height: 40px;
    width: 50%;
  }
</style>