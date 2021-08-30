<template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2 reg-container">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl">
                            Recover your password for FindWater.io
                        </h1>
                        <p v-show="done" class="text-sm text-green-500">Password reset link has been sent to {{ email }}</p>
                        <p v-show="error" class="text-sm text-red-500">An error occurred</p>
                        <form @submit="forgotPassword">
                            <div>
                                <h3 class="text-left font-bold font-montserrat reg-header">Email</h3>
                                <input type="email" v-model="email" class="text-sm outline-none w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                            </div>
                            
                            <button type="submit" class="bg-green-400">
                                Send Password Reset
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        export default {
            name: 'ForgotPassword',
      
            data() {
                return {
                    email: '',
                    done: false,
                    error: false,
                }
            },
            methods: {
                async forgotPassword(e) {
                    e.preventDefault()
                    this.done = false;
                    this.error = false;
                    this.axios.post(`http://localhost:1337/auth/forgot-password`, {
                        email: this.email
                    })
                    .then(() => {
                        this.done = true
                    })
                    .catch(e => {
                        e;
                        this.error = true
                    })
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