<template>
  <NavBar/>
  <div>
    <form id="fs-frm" name="contact-form" action="https://formspree.io/f/xnqywgyg" method="post">
      <label for="full-name"  class="form-label">Full Name</label>
      <input type="text" name="name" class="form-control" id="full-name" placeholder="First Name" required>

      <label for="full-name" class="form-label">Last Name</label>
      <input type="text" name="name" class="form-control" id="full-name" placeholder="First Name" required>

      <label for="email-address"  class="form-label">Email Address</label>
      <input type="email" name="_replyto" class="form-control" id="email-address" placeholder="email@domain.tld" required>

      <label for="message"  class="form-label">Message</label>
      <textarea rows="5" name="message" id="message" class="form-control" placeholder="Please submit your message here" required></textarea>
      <input type="hidden" name="_subject" class="form-control" id="email-subject" value="Contact Form Submission">
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
  export default {
    components:{
      NavBar
    }
  }
</script>

<style scoped>

</style>
