<template>
  <div class="container">
    <title-component :skills="'Contact'" class="title-container"/>
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
    <form action="https://api.staticforms.xyz/submit" method="post" class="email-form">
      <input type="hidden" name="accessKey" value="514817fa-27a8-4a74-b839-55d1d0dd7222" />
      <input required type="text" name="name" placeholder="Your name" />
      <input required type="email" name="email" placeholder="Email" />
      <textarea required name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
      <input type="hidden" name="redirectTo" value="http://localhost:5173/contact" />
      <button type="submit" value="submit" class="button button-form">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import type IUser from '../interfaces/IUser';

export default {
  setup() {
    const user = ref<IUser>();

    onBeforeMount(() => {
      const userData = localStorage.getItem('user');
      if (userData) {
        user.value = JSON.parse(userData);
      }
    });

    return { user };
  }
};
</script>

<style scoped>
.container {
  width: 70vw;
}

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
  max-width: 720px;
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

@media (max-width: 996px) {
  .contact-container {
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 100%;
    max-width: none;
  }

  .container {
    width: 100vw;
  }
  .contact {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  .social {
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  }

  .social h3 {
    display: none;
  }
  .contact-icons {
    width: auto;
  }
}

@media (max-width: 600px) {

  .title-container {
    align-self: flex-start;
  }
  .contact {
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .contact-item, .contact-item div {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
    gap: 12px;
    display: flex;
  }

  .contact-item {
    margin-bottom: 24px;
  }

  .email-form {
    width: 80%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow-y: scroll;
  }

  .line {
    display: flex;
    margin: 0;
  }

  .email-form {
    width: 90vw;
  }
}
</style>
