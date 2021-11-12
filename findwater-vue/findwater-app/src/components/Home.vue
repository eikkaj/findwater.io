<template>
  <!-- Jumbotron -->
  <HomeJumbo></HomeJumbo>

  <!-- Water Source Feed -->
  <WaterSourceFeed></WaterSourceFeed>
</template>
<script>
import WaterSourceFeed from './WaterSourceFeed'
import HomeJumbo from './HomeJumbo'

export default {
  name: 'Home',
  created(){
    document.title = "FindWater.io"
  },
  components: {
    'WaterSourceFeed': WaterSourceFeed,
    'HomeJumbo': HomeJumbo
  },
  setup () {  
    return {
    }
  }
}

</script>