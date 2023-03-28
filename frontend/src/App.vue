<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import axios from 'axios';

async function fetchData() {
  try {
    axios
      .get('https://api-portfolio-xi30.onrender.com/user/6421f658ea7240b7b4b5010b')
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
      });

    axios
      .get('https://api-portfolio-xi30.onrender.com/project/search?author=lucas')
      .then((response) => {
        localStorage.setItem('projects', JSON.stringify(response.data));
      });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
</script>

<template>
  <SideBar />
  <RouterView />
</template>
