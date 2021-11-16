    <template>
        <MDBBtn color="primary" aria-controls="exampleModal" @click="exampleModal = true" v-show="!loggedIn">Register</MDBBtn>
    
        <MDBModal
            id="exampleModal"
            tabindex="-1"
            labelledby="exampleModalLabel"
            v-model="exampleModal"
          >
          <MDBModalHeader>
              <MDBModalTitle id="exampleModalLabel">Create an Account</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                  <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                    <form @submit="register">
                      <div class="reg">
                        <div class="reg-row">
                          <h5 class="text-left font-bold mb-2 font-montserrat reg-header">Username</h5>
                          <input type="username" v-model="username" class="reg-input text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="reg-row">
                          <h5 class="text-left font-bold mb-2 font-montserrat reg-header">Email</h5>
                          <input type="email" v-model="email" class="reg-input text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="reg-row">
                          <h5 class="text-left font-bold mb-2 font-montserrat reg-header">Password</h5>
                          <input type="password" v-model="password" class="reg-input text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
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
              <MDBBtn color="primary" :disabled="email.length < 6 || password.length < 6 " type="submit" @click="register()">Register</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </template>
    <script>
        import { MDBBtn, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-vue-ui-kit'
        import { ref } from 'vue'
        export default {
            name: 'Register',
            components: {
              MDBBtn,
              MDBModal,
              MDBModalHeader,
              MDBModalTitle,
              MDBModalBody,
              MDBModalFooter
            },
            setup() {
              const exampleModal = ref(false);
              return {
                exampleModal,
              };
            },
            data() {
                return {
                    username: '',
                    email: '',
                    password: '',
                    error: false,
                    errorMsg: `An Error occurred, please try again`
                }
            },
            methods: {
                async register() {
                    console.log('in register');
                    try {
                      const res = await this.axios.post(`http://localhost:1337/auth/local/register`, {
                        username: this.username,
                        email: this.email,
                        password: this.password
                      });
                      const { jwt, user } = res.data
                      window.localStorage.setItem('jwt', jwt)
                      window.localStorage.setItem('userData', JSON.stringify(user))
                      window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))
                      this.exampleModal = false
                      this.loggedIn = true
                    } catch(e) {
                      console.log('Error: ' + e);
                      this.error = true
                      this.email = ''
                    } 
                },
            }
        }
    </script>
    <style>
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