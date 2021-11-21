<template>
  <div class="coming-soon">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Find and Report Potable Water Sources Across the US</h1>
          <h4 class="mb-3">Spread Information About Water Quality</h4>
          <h4 class="mb-3 bold">Launching Soon!</h4>

            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7_dtp.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
              <form action="https://findwater.us20.list-manage.com/subscribe/post?u=7f6a0de7387e7bb69f85963e9&amp;id=be418f4dfb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7f6a0de7387e7bb69f85963e9_be418f4dfb" tabindex="-1" value=""></div>
                      <div class="clear foot">
                         <input type="submit" value="LEARN MORE" name="subscribe" id="mc-embedded-subscribe" class="button blue-button">
                      </div>
                  </div>
              </form>
            </div>
            <div class="message-box">
              <div class="message">* We will never sell your information. We just plan on sending you an email when the site goes live. Please <a href="mailto:jakaldama@gmail.com">contact us</a> if you have any questions about this or would like to learn more about FindWater.io before it goes live.</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ComingSoon',
  created(){
    document.title = "FindWater.io"
  },
  components: {
  },
  setup () {  
    return {
    }
  },
  methods: {
    async submit() {
      console.log('submitting email to learn more');
    }
  }
}

</script>
<style>
  .coming-soon {
    background-image: url("../assets/jumbo/2-resize.jpeg");
    height: 1000px;
  }
  .mask {
    height: 1000px;
  }
  .blue-button {
    background-color: #1266f1!important;
    color: #ffffff!important;
  }
  .bold {
    font-weight: 900;
  }
  .message-box {
    width: 500px;
  }
  .message {
    color: #ffffff;
    display: block;
  }
  .message a {
    color:#1266f1!important;
    font-weight:600;
  }
</style>