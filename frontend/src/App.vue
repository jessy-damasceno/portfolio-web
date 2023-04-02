<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
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
});
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <HeaderComponent />
    <div style="display: flex">
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>
