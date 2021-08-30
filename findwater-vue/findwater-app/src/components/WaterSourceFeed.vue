<template>
  <div v-if="watersources.length" class="water-source-feed">
    <MDBRow :cols="['1','md-4']" class="g-4">
      <div v-bind:key="watersource.index" v-for="watersource in watersources">
        <MDBCol>
          <MDBCard>
            <MDBCardImg :src="imageLink + watersource.image.formats.medium.url" top alt="Image"/>
            <MDBCardBody>
              <MDBCardTitle>{{watersource.coords}}</MDBCardTitle>
              <MDBCardText>
                {{watersource.description}}
              </MDBCardText>
              <MDBBtn tag="a" href="http://localhost:8080/WaterSource" color="primary">
                <router-link :to="{ name: 'WaterSource', params: { watersource: watersource.id } } ">Open</router-link>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
  </div>
</template>

<script>
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from 'mdb-vue-ui-kit';
export default {
  name: 'WaterSourceFeed',
  components: {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn
  },
  methods: {
    getImage(path) {
        return require(path)
      }
  },
  data(){
    return {
      watersources: [],
      imageLink: "http://localhost:1337",
      link: "http://localhost:8080/"
    }
  },
  mounted() {
    fetch("http://localhost:1337/water-sources")
      .then((res) => res.json())
      .then((data) => {
        this.watersources = data;
    });
  }
}
</script>
<style>
.water-source-feed {
  padding: 1rem !important;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  min-width: 25%;
}

</style>