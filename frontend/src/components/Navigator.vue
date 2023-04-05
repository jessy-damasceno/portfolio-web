<template>
  <nav class="nav-container">
    <div class="logo">
      <img src="../assets/logo_jessy.png" alt="" />
    </div>
    <div class="nav-links">
      <a
        v-for="(link, index) in links"
        :key="index"
        :class="{ active: activeLink === index }"
        :href="link.url"
        @click.prevent="activateLink(index, link.url)"
      >
        <span>{{ link.label }}</span>
      </a>
    </div>
    <div class="social-icons">
      <a :href="user?.socials.instagram"
        ><font-awesome-icon class="insta" icon="fa-brands fa-instagram"
      /></a>
      <a :href="user?.socials.github"><font-awesome-icon class="git" icon="fa-brands fa-github" /></a>
      <a :href="user?.socials.linkedin"
        ><font-awesome-icon class="linkedin" icon="fa-brands fa-linkedin-in"
      /></a>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type IUser from '../interfaces/IUser';

interface Link {
  label: string;
  url: string;
}

export default {
  setup() {
    const user = ref<IUser>();

    onBeforeMount(() => {
      const userData = localStorage.getItem('user');
      if (userData) {
        user.value = JSON.parse(userData);
      }
    });

    const links: Link[] = [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Skills', url: '/skills' },
      { label: 'Experience', url: '/experience' },
      { label: 'Projects', url: '/projects' },
      { label: 'Contact', url: '/contact' }
    ];
    const activeLink = ref<number>(0);
    const router = useRouter();
    const route = useRoute();
    function activateLink(index: number, url: string) {
      activeLink.value = index;
      if (url !== route.path) {
        router.push(url);
      }
    }
    return {
      links,
      activateLink,
      activeLink,
      user
    };
  }
};
</script>

<style>
.nav-container {
  height: 100vh;
  background-color: rgb(13, 13, 13);
  z-index: 100;
  color: #f8f8f8;
  width: 220px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
}

.logo {
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
}

.logo img {
  max-width: 65%;
  height: auto;
}

.nav-links {
  display: flex;
  flex-direction: column;
}

.nav-links a {
  display: block;
  padding: 13px 0;
  text-align: left;
  border-bottom: 1px solid rgba(235, 235, 235, 0.1);
  text-transform: uppercase;
  width: 150px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.nav-links a span:active {
  color: #ee6817;
  font-weight: bold;
}

.active {
  color: #ee6817;
  font-weight: 800;
}

.social-icons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-self: flex-start;
}

.social-icons a {
  font-size: 25px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.insta:hover {
  color: #e1306c;
}

.git:hover {
  color: #ffffff;
}

.linkedin:hover {
  color: #1da1f2;
}

@media (max-width: 768px) {
  .nav-container {
    display: none;
  }
}

@media (min-width: 768px) {
  .nav-container {
    display: none;
  }
}

@media (min-width: 992px) {
  .nav-container {
    display: flex;
  }
}
</style>
