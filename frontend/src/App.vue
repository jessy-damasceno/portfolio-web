<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  try {
    axios
      .get('https://api-portfolio-xi30.onrender.com/user/641de57b4a585af300538310')
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
      });

    axios
      .get('https://api-portfolio-xi30.onrender.com/project/search?author=jessy')
      .then((response) => {
        localStorage.setItem('projects', JSON.stringify(response.data));
      });
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div style="display: flex; flex-direction: column; width: 100%;">
    <HeaderComponent />
    <div style="display: flex;">
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>
