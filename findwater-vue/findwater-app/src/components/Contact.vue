<template>
  <div class="contact-form">
    <h1 class="contact-form_title">Contact Us</h1>
    <div class="separator"></div>
    <div v-if="isSending" class="loading">Sending...</div>
    <form class="form" @submit="onSubmit">
      <input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
      <input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
      <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
       <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    components: {
      
    },
    data(){
      return {
        contact: {
          name: '',
          email: '',
          message: '',
        },
        isSending: false,
      }
    },
    methods: {
      clearForm () {
        for (let field in this.contact) {
          this.contact[field] = ''
        }
      },
      onSubmit(evt) {
        evt.preventDefault();

        this.isSending = true;

        setTimeout(() => {
          // Build for data
          let form = new FormData();
          for (let field in this.contact) {
            form.append(field, this.contact[field]);
          }

          // Send form to server  
          this.$http.post('/app.php', form).then((response) => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
          }).catch((e) => {
            console.log(e)
          });

        }, 1000);
      }
    },
  }
</script>
<style>
  body {
  background: #f1f1f1;
  font-family: 'Roboto', sans-serif;
}

.contact-form {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  padding: 15px;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: 'Roboto', sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #da552f;
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px
}
</style>