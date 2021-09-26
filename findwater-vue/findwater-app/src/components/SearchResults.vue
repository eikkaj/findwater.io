<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="sm:w-1/2">
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl">
            Water Source Finder
          </h1>
        </div>
      </div>

    
   
    <input type='text' placeholder='Filter Search' v-model='search.text' />
    {{ query }}
    <button @click='searchsources'> Search</button>
    <button @click='reset'> Reset </button>

    <!-- results -->
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
   </div>
   </div>
</template>

<script>
import { ref } from 'vue'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from 'mdb-vue-ui-kit';

export default {
  name: 'SearchResults',
  components: {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
  },
  data(){
    return {
      search: {text:""},
      watersources: [],
      imageLink: "http://localhost:1337",
    }
  },
  methods: {
    searchsources () {
      console.log(this.search.text);
      // filter through water sources, for now just returning all water sources
      console.log(this.watersources);
      this.run_search_with_filter_text(this.search.text);
      console.log(this.watersources);
    },
    run_search_with_filter_text(text) {
      let q = '';
      if (text) {
        q = '?us_state=' + text;
      }
      fetch("http://localhost:1337/water-sources/" + q)
      .then((res) => res.json())
      .then((data) => {
        this.watersources = data;
        return data;
      });
    }
  },
  mounted () {  
    const query = ref('')
    const reset = () => {
      query.value = '' // clears the query
    }
    
    console.log('Calling get sources for query: ' + query.value);
    let q = '';
    
    if (query.value)
      q = '?us_state=' + query.value;
    fetch("http://localhost:1337/water-sources/" + q)
    .then((res) => res.json())
    .then((data) => {
      this.watersources = data;
      return data;
    });

    return {

      reset
    };
  } 
}
</script>
<style>

</style>