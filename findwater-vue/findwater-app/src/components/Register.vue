    <template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2 reg-container">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-7">
                            Register to use FindWater.io
                        </h1>
                        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                        <form @submit="register">
                            <div class="reg">
                                <h3 class="text-left font-bold mb-2 font-montserrat reg-header">Email</h3>
                                <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                            </div>
                            <div class="reg">
                                <h3 class="text-left font-bold mb-2 font-montserrat reg-header">Password</h3>
                                <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                            </div>
                            
                            <button type="submit" :disabled="email.length < 6 || password.length < 6 " class="reg-button">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        export default {
            name: 'Register',
            data() {
                return {
                    name: '',
                    email: '',
                    password: '',
                    error: false,
                    errorMsg: `An Error occurred, please try again`
                }
            },
            methods: {
                async register(e) {
                    try {
                        e.preventDefault()
                            await this.axios.post(`http://localhost:1337/auth/local/register`, {
                            name: this.name,
                            password: this.password,
                            email: this.email,
                            username: this.email
                        })
                        this.$router.push('login')
                    } catch(e) {
                        console.log('Error: ' + e);
                        this.error = true
                        this.email = ''
                    } 
                }
            }
        }
    </script>
    <style>
        .reg-header {
            display: inline-block;
            padding: 10px;
        }
        .reg-container {
            background-color: #f1f1f1;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .5rem;
        }
    </style>