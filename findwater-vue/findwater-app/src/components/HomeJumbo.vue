<template>
  <header>

    <!-- Background image -->
    <div class="p-5 text-center bg-image">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Find and Report Potable Water Sources Across the US.</h1>
            <h4 class="mb-3">Spread Information About Water Quality.</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
</template>

<script>
  export default {
    name: 'HomeJumbo',
    components: {
    
    }
  }
</script>

<style>
.bg-image {
  background-image: url("../assets/jumbo/1.jpeg");
  height: 400px;
}
</style>