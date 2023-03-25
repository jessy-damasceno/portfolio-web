<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import axios from 'axios'

async function fetchData() {
  try {
    axios
      .get('https://api-portfolio-xi30.onrender.com/user/641de57b4a585af300538310')
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data))
      })

      // axios
      // .get('https://api-portfolio-xi30.onrender.com/project', {author: 'Jessy'})
      // .then((response) => {
      //   localStorage.setItem('projects', JSON.stringify(response.data))
      // })
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
