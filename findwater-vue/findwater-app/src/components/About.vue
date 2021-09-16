<template>
<div style="background: #f1f1f1;padding:25px;">
  <div class="p-5 text-center about-bg-image">
  </div>

  <!-- About the Project -->
  <div class="about">
    <h3>FindWater.io is an effort to help people find clean drinking water throughout the US.</h3>
    Access to clean water in the United States isn't actually guaranteed for everyone. There are currently lots of efforts that are working towards making this a distant memory. FindWater.io is yet another attempt to not only facilitate finding access to clean drinking water but also to facilitate finding clean drinking water that folks can collect with reusable containers. We would love for everyone to have access to water and be able to give back to the environment by not consumer more plastic. Tribal communities, impoverished neighborhoods, minority groups, nomads, and campers all have a similar need: access to clean drinking water. This is an open-source project created by Jackie Sweet and she welcomes feedback. The premise is a crowdsourced, free website where people can search for and report water sources (free or premium) within the United States. The data is available via a public API. If you have any questions, concerns, or feedback, please feel free to contact <a href="mailto:jackie@findwater.io">Jackie</a>
    <br/>
    <br/>
  </div>
  <div class="links-help">
    <MDBTable borderless>
      <tbody>
        <tr>
          <th>Other Projects and Links</th>
          <th>How Can I Help?</th>
        </tr>
        <tr>
          <td>
            <a href="https://www.urbanwaterslearningnetwork.org/wp-content/uploads/2019/05/UNC-Clean-Water-Access-Challenges2017.pdf">UNC Clean Watter Access Challenges 2017</a>
          </td>
          <td>
            <a href="#" title="Donate to the FindWater project"><MDBIcon icon="paypal" iconStyle="fab" /></a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="http://uswateralliance.org/sites/uswateralliance.org/files/publications/Closing%20the%20Water%20Access%20Gap%20in%20the%20United%20States_DIGITAL.pdf">US Water Alliance - Water Access Gap in the US</a>
          </td>
          <td>
            <a href="" title="Contribute"><MDBIcon icon="github" iconStyle="fab" /></a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://time.com/longform/clean-water-access-united-states/">Time Magazine - America's Clean Water Crisis Goes Far Beyond Flint. There's No Relief in Sight.</a>
          </td>
        </tr>
        <tr>
          <td><a href="https://www.digdeep.org/">The DigDeep Project</a></td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
</div>

</template>

<script>
import { MDBIcon, MDBTable } from 'mdb-vue-ui-kit';

export default {
  name: 'About',
  components: {
    MDBIcon,
    MDBTable
  },
}
</script>

<style>
.spacing {
  margin-right: 10px;
}
a {
  color: #111!important;
}
.about {
  margin: 50px;
}
.table {
  text-align: center;
}
.table th {
  padding: 2px!important;
  width: 50%;
}
.table td  {
  padding: 2px!important;
}
.about-bg-image {
  background-image: url("../assets/jumbo/2.jpeg");
  height: 400px;
}
</style>