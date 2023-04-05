<template>
  <div class="container">
    <title-component class="title-comp" :skills="'Experience'" />
    <div class="experience-container">
      <div
        v-for="(experience, index) in user?.experiences"
        :key="index"
        class="experiences-container"
      >
        <div class="first">
          <h4>{{ experience.company }}</h4>
          <h2>{{ experience.role }}</h2>
          <span>{{ experience.dateIn }} - {{ experience.dateOut }}</span>
        </div>
        <p>{{ experience.description }}</p>
      </div>
    </div>
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
.first {
  min-width: 300px;
}

.experiences-container {
  display: flex;
  padding: 40px 20px;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(235, 235, 235, 0.1);
  text-align: justify;
}

.experience-container {
  height: 75vh;
  max-width: 1200px;
  overflow-y: scroll;
}

.experience-container::-webkit-scrollbar {
  width: 8px;
  height: 16px;
}
.experience-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.experience-container::-webkit-scrollbar-thumb {
  background: #ee6817;
  border-radius: 10px;
}
.experience-container::-webkit-scrollbar-thumb:hover {
  background: #b44a08;
}

@media (max-width: 768px) {
  .experiences-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  padding-right: 100px;
}

.experience-container {
  height: 100vh;
  max-width: 1200px;
  width: 90vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
}

@media (max-width: 600px) {

  .container {
    padding: 50px 0px;
  }

  .title-comp {
    padding-left: 70px;
    padding-top: 20px;
  }
  .experiences-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.experience-container {
  height: 80%;
  max-width: 1200px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
}
</style>
