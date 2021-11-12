<template>
  <!-- Footer -->
  <MDBFooter :text="['center', 'lg-start']" class="footer">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="6" md="12" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Thanks For Visiting FindWater.io</h5>

          <p>
            FindWater.io is a humble, low budget project created by two outdoors and water enthusiasts who would like to make it easier for folks to find potable water throughout the US. Unfortunately, it's often times much easier to just buy plastic in a store but our hope is to help reduce this wasted plastic by providing a space for people to find water to collect in reusable containers rather than resorting to buying more plastic. Please don't hesitate to reach out with ideas, critisicm, or praise. Donations gladly accepted to help continue to fund this project.
          </p>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">About FindWater.io</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Contact Us</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Water Quality in the US</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Water Source Finder</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Submit a New Water Source</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Privacy Policy</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Social Media</h5>
          <ul class="list-unstyled inline">
            <li>
              <a href="#!" class="text-dark">
                <MDBIcon icon="instagram" iconStyle="fab" />
              </a>
            </li>
            <li>
              <a href="#!" class="text-dark">
                <MDBIcon icon="facebook" iconStyle="fab" />
              </a>
            </li>
            <li>
              <a href="#!" class="text-dark">
                <MDBIcon icon="twitter" iconStyle="fab" />
              </a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->
      </MDBRow>
      <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2);"
    >
      © 2021 Copyright:
      <a class="text-dark" href="https://FindWater.io"
        >FindWater.io</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>

<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-vue-ui-kit';

export default {
  name: 'Footer',
  components: {
    MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBIcon
  }
}
</script>

<style>
  .inline {
    display: block;
    float: left;
    text-align: center;
  }
  .footer {
    border-top: solid 0.2px rgba(0, 0, 0, 0.2);
  }
</style>
