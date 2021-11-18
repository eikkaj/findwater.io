    <template>
        <div>
            <div class="submit-container">
                <div class="flex items-center justify-center h-screen">
                    <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                        <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                        </div>
                    </div>
                    <div class="sm:w-1/2 submit-container">
                        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                            <h4 class="font-bold text-left font-montserrat text-4xl sm:text-6xl submit-header">
                                Submit a New Water Source
                            </h4>
                            <div class="faq" @click="faqModal = true">FAQ about new water sources</div>
                            <div class="steps">
                                <p>Step 1: Create a new Water Source</p>
                                <p>Step 2: Upload a photo</p>
                            </div>
                            <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                            <form class="submit-form" @submit="submit">
                                <div class="submit">
                                    <h6 class="text-left font-bold font-montserrat submit-header">Type</h6>
                                    <p class="tip">Indicate what kind of water source this is (ex. natural spring, campground, gas station bathroom, etc)</p>
                                    <input type="text" v-model="type" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                                </div>
                                <div class="submit">
                                    <h6 class="text-left font-bold font-montserrat submit-header">Description</h6>
                                    <p class="tip">Add a description to help users understand how to access this water source.</p>
                                    <input type="text" v-model="description" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                                </div>
                                <div class="submit">
                                    <h6 class="text-left font-bold font-montserrat submit-header">Coordinates</h6>
                                    <p class="tip">Add coordinates of the water source to make it easier to users to find.</p>
                                    <input type="text" v-model="coords" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                                </div>

                                <MDBBtn color="primary" @click="submit()" class="submit-btn">Submit</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        import { MDBBtn } from 'mdb-vue-ui-kit'
        export default {
            name: 'Submit',
            components: {
              MDBBtn,
            },
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
                async submit() {
                    try {
                        const { submission_response } = 
                            await this.axios.post(`http://localhost:1337/water-sources`, {
                            type: this.type,
                            description: this.description,
                            coords: this.coords,
                            headers: {
                            Authorization:
                              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU',
                            }
                        });
                        console.log(submission_response);
                        this.$router.push('/')
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
        .submit-header {
            display: inline;
        }
        .submit-container {
            background-color: #fff;
        }
        .faq {
            font-size: 10px;
            color: #1266f1;
            display:inline;
        }
        .faq:hover {
            cursor: pointer;
        }
        .steps p{
            margin-bottom: 0px;
        }
        .submit-form {
            padding: 10px;
        }
        .submit-form button {
            margin-top: 10px;
        }
        .submit-form input {
            margin-bottom: 5px;
        }
        .submit-form h6 {
            margin-bottom: 0px;
        }
        .tip {
            margin-bottom: 2px;
            font-style: oblique;
            font-size: 12px;
        }
        .text-red-500 {
            color: #FF0000;
        }
    </style>