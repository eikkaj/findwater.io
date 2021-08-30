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
                <a href="#" disabled><MDBIcon icon="edit" iconStyle="fas" /></a>
                <a href="#" disabled><MDBIcon icon="share" iconStyle="fas" /></a>
            </div>
            <div class="watersource-table">
                <MDBTable hover>
                    <tbody>
                    <tr>
                      <th>Description</th>
                      <td>{{watersourceObj.description}}</td>
                    </tr>
                    <tr>
                      <th>Coordinates (Lat,Long)</th>
                      <td>{{watersourceObj.coords}}</td>
                    </tr>
                    <tr>
                      <th>Street Address</th>
                      <td>{{watersourceObj.street_address}}</td>
                    </tr>
                    <tr>
                      <th>US State</th>
                      <td>{{watersourceObj.us_state}}</td>
                    </tr>
                    <tr>
                      <th>Water Source Type</th>
                      <td>{{watersourceObj.type}}</td>
                    </tr>
                    </tbody>
                </MDBTable>
            </div>
        </div>     
    </div>
</template>
<script>
import { MDBCardImg, MDBTable, MDBIcon } from 'mdb-vue-ui-kit';
export default {
  name: 'WaterSource',
  props: ['watersource'],
  components: {
    MDBCardImg,
    MDBTable,
    MDBIcon
  },
  methods: {
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
        console.log(this.watersourceObj);
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