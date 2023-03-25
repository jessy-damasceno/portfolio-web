<template>
  <div class="container">
    <title-component :skills="'Experience'" />
    <div class="contact-container">
      <div class="contact">
        <div class="contact-item">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
          <div>
            <h3>Location</h3>
            <span>{{ user?.location }}</span>
          </div>
        </div>
        <div class="contact-item">
          <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
          <div>
            <h3>Email</h3>
            <span>{{ user?.email }}</span>
          </div>
        </div>
      </div>
      <div class="social">
        <h3>Find me on</h3>
        <div class="contact-icons">
          <a :href="user?.socials.instagram" target="_blank"
            ><font-awesome-icon class="insta" icon="fa-brands fa-instagram"
          /></a>
          <a :href="user?.socials.github" target="_blank"
            ><font-awesome-icon class="git" icon="fa-brands fa-github"
          /></a>
          <a :href="user?.socials.linkedin" target="_blank"
            ><font-awesome-icon class="linkedin" icon="fa-brands fa-linkedin-in"
          /></a>
        </div>
      </div>
    </div>
    <form class="email-form">
      <input type="text" id="name" placeholder="Your name" />
      <input type="email" id="name" placeholder="Email" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
      <button class="button button-form">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import type IUser from '../interfaces/IUser'

export default {
  setup() {
    const user = ref<IUser>()
    
    onMounted(() => {
      const userData = localStorage.getItem('user')
      if (userData) {
        user.value = JSON.parse(userData)
      }
    })
    
    return { user }
  }
}
</script>

<style>
.contact-container {
  padding: 40px 0;
  border-top: 1px solid rgba(235, 235, 235, 0.1);
  display: flex;
  width: 70vw;
  max-width: 720px;
}

.social {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 30%;
}

.social h3 {
  font-size: 35px;
}

.contact-icons {
  display: flex;
  gap: 30px;
  width: 100%;
  align-self: flex-start;
}

.contact-item {
  display: flex;
  gap: 20px;
}

.icon {
  font-size: 45px;
  color: #ee6817;
  width: 50px;
}

.icon:hover {
  color: #aaaaaa;
}

.contact-icons a {
  font-size: 45px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
}

.contact h3 {
  font-size: 28px;
}

.contact span {
  font-size: 18px;
}

.email-form {
  padding: 40px 0;
  border-top: 1px solid rgba(235, 235, 235, 0.1);
  display: flex;
  flex-direction: column;
}

.email-form input,
textarea {
  padding: 15px;
  background-color: #3b3b3b;
  border: 1px solid #3b3b3b;
  color: #a6a6a6;
  resize: none;
  font-size: 14px;
  margin: 20px 0 0;
}

textarea {
  height: 150px;
}

.email-form input:focus,
textarea:focus {
  border: 2px solid #ee6817;
}

.button-form {
  width: 150px;
}
</style>
