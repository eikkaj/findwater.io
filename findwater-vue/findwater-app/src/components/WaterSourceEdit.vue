<template>
    <div class="watersource-container">
        <div v-if="watersourceObj" class="watersource">
            <div v-if="watersourceObj.image" class="watersource-img">
                <MDBCardImg :src="imageLink + watersourceObj.image.formats.small.url" top alt="Image"/>
            </div>
            <h3>
                <a :href="'http://www.google.com/maps/place/' + watersourceObj.coords">{{watersourceObj.coords}}</a>
            </h3>
            <div class="actions-bar">
                
            </div>
            <div class="watersource-table">
                <MDBTable hover>
                    <tbody>
                    <tr>
                      <th>Description</th>
                      <input type="text" v-model="watersourceObj.description" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                    </tr>
                    <tr>
                      <th>Coordinates (Lat,Long)</th>
                      <input type="text" v-model="watersourceObj.coords" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                    </tr>
                    <tr>
                      <th>Street Address</th>
                      <input type="text" v-model="watersourceObj.street_address" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                    </tr>
                    <tr>
                      <th>US State</th>
                      <input type="text" v-model="watersourceObj.us_state" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                    </tr>
                    <tr>
                      <th>Water Source Type</th>
                      <input type="text" v-model="watersourceObj.type" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                    </tr>
                    </tbody>
                </MDBTable>
                <MDBBtn color="primary" type="submit" @click="save()">Save</MDBBtn>
            </div>
        </div>     
    </div>
</template>
<script>
import { MDBCardImg, MDBTable, MDBBtn } from 'mdb-vue-ui-kit';
export default {
  name: 'WaterSourceEdit',
  props: ['watersource'],
  components: {
    MDBCardImg,
    MDBTable,
    MDBBtn
  },
  methods: {
    async save() {
        try {
            await this.axios.put(`http://localhost:1337/water-sources/` + this.watersource,
            {
                    data: {
                    'type': this.type,
                    description: this.description,
                    coords: this.coords,
                    us_state: this.us_state
                    }
            },
            /** TO BE FIXED {
                headers: {
                    Authorization:
                        'Bearer ' + window.localStorage.getItem('jwt'),
                        'Content-Type': 'application/x-www-form-urlencoded',
                },
            } **/
            );

            // redirect
            this.$router.push({ name: 'WaterSource', params: { watersource: this.watersource } })

        } catch(e) {
            console.log('Error: ' + e);
            this.error = true
        } 
    }
  },
  data(){
    return {
      watersourceObj: [],
      imageLink: "http://localhost:1337",
    }
  },
  mounted() {
    fetch("http://localhost:1337/water-sources/" + this.watersource)
    //fetch("http://localhost:1337/water-sources/2")
    .then((res) => res.json())
    .then((data) => {
        this.watersourceObj = data;
    });
  }
}
</script>
<style>
    .watersource-container {
        padding: 15px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%);
        background-color: #f5f5f5;
    }
    .watersource {
        display: inline-block;
        padding: 25px;
    }
    .watersource-img {
        width: 25%;
        float: left;
        display: inline-block;
    }
    .watersource-table {
        display: inline-block;
    }
</style>