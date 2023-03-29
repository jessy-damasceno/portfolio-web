<template>
  <div class="container about-container">
    <title-component :skills="'About'" />
    <div class="infos">
      <div class="about-info">
        <ul>
          <li><span>Name:</span> {{ user?.name }}</li>
          <li><span>Email:</span> {{ user?.email }}</li>
          <li><span>Date of birth:</span> {{ user?.birthDate }}</li>
          <li><span>Nationality:</span> {{ user?.location }}</li>
        </ul>
        <button class="button">DOWNLOAD RESUME AS PDF FORMAT</button>
      </div>
      <div class="vertical-line"></div>
      <div class="personal-info">
        <p v-html="user?.description"></p>
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
        user.value = JSON.parse(userData) as IUser;
        user.value.description = user.value.description.replace(/\n/g, '<br>');
      }
    });

    return { user };
  }
};
</script>

<style>
.infos {
  align-items: center;
  min-width: 30%;
  display: flex;
  justify-content: space-around;
}

.about-info ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.about-info li {
  padding: 20px 0;
  border-bottom: 1px solid rgba(235, 235, 235, 0.1);
  list-style: none;
}

.about-info span {
  text-transform: uppercase;
}

.vertical-line {
  background-color: #ee6817;
  height: 70px;
  width: 5px;
  margin: 30px 0 50px 0;
}

.personal-info {
  width: 50%;
  text-align: start;
  font-size: 24px;
  line-height: 28px;
}
</style>
