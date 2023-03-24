<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'

const fetchData = async () => {
  try {
    const response = await fetch('https://api-portfolio-xi30.onrender.com/user')
    const user = await response.json()
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    console.error(error)
  }
}

fetchData()
</script>

<template>
  <SideBar />
  <RouterView />
</template>