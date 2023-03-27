<template>
  <div class="home-container">
    <div class="title">
      <h2>
        <span class="intro">Hello, i am</span>
        <br />
        {{ user?.name }}
      </h2>
      <span class="role">{{ user?.role }}</span>
    </div>
    <div class="img-container">
      <img class="img-float" src="../assets/logo_jessy.png" alt="logo" />
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

<style>
.home-container {
  /* margin: 0 auto; */
  padding: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 70vw;
  height: 95vh;
}

.intro {
  font-weight: 300;
  font-size: 50px;
  display: inline-block;
  overflow: hidden;
  animation: typing 2s steps(30, end);
  white-space: nowrap;
}

.title {
  width: 50%;
}

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.title h2 {
  border: none;
  color: #aeaeae;
  text-transform: uppercase;
  line-height: 55px;
  padding-bottom: 0;
  font-size: 55px;
  margin-bottom: 35px;
}

.role {
  border-bottom: 1px solid #7a7a7a;
  border-top: 1px solid #7a7a7a;
  color: #aeaeae;
  padding: 15px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 30px;
}

.img-container {
  width: 50%;
}

.img-container img {
  max-width: 100%;
  height: auto;
  display: flex;
}
</style>
