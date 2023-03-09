<template>
  <nav class="nav-container">
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
      <a href="https://github.com/"><font-awesome-icon class="insta" icon="fa-brands fa-instagram"/></a>
      <a href="https://github.com/"><font-awesome-icon class="git" icon="fa-brands fa-github" /></a>
      <a href="https://github.com/"><font-awesome-icon class="linkedin" icon="fa-brands fa-linkedin-in" /></a>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, VueElement } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Link {
  label: string
  url: string
}

export default {
  setup() {
    const links: Link[] = [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Skills', url: '/skills' },
      { label: 'Experience', url: '/experience' },
      { label: 'Education', url: '/education' },
      { label: 'Projects', url: '/projects' },
      { label: 'Contact', url: '/contact' }
    ]

    const activeLink = ref<number>(0)
    const router = useRouter()
    const route = useRoute()

    function activateLink(index: number, url: string) {
      activeLink.value = index
      if (url !== route.path) {
        router.push(url)
      }
    }

    return {
      links,
      activateLink,
      activeLink
    }
  }
}
</script>

<style>
.nav-container {
  height: 100%;
  position: fixed;
  background-color: rgb(13, 13, 13);
  z-index: 100;
  color: #f8f8f8;
}
.nav-links {
  display: flex;
  flex-direction: column;
}
.nav-links a {
  display: block;
  padding: 13px 0;
  text-align: left;
  margin: 0 30px;
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
  gap: 20px;
  padding: 35px;
}

.social-icons a {
  font-size: 25px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.insta:hover {
  color: #E1306C ;
}

.git:hover {
  color: #ffffff;
}

.linkedin:hover {
  color: #1DA1F2;
}
</style>
