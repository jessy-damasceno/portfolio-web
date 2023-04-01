<template>
  <div class="home-container">
    <div class="title">
      <h2>
        <span class="intro">Hello, i am</span>
        <br />
        {{ user?.name }}
      </h2>
      <p class="role">{{ user?.role }}</p>
    </div>
    <div class="img-container">
      <img class="img-float" src="../assets/logo_lucas.png" alt="logo" />
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
.home-container {
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
  align-self: end;
}

.img-container img {
  max-width: 65%;
  height: auto;
  display: flex;
}

@media (max-width: 768px) {
  .home-container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    overflow-y: scroll;
  }

  .title {
    width: 100%;
    text-align: center;
  }

  .intro {
    font-weight: 300;
    font-size: 40px;
    display: inline-block;
    overflow: hidden;
    animation: typing 2s steps(30, end);
    white-space: nowrap;
  }

  .role {
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 20px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 25px;
  }

  .title h2 {
    font-size: 30px;
    line-height: 42px;
  }

  .img-container {
    width: 55vw;
  }

  .img-container img {
    max-width: 200px;
    min-width: 160px;
    width: 100%;
    height: auto;
    display: flex;
  }
}

@media (min-width: 768px) {
  .home-container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
  }

  .title {
    width: 100%;
    text-align: center;
  }

  .intro {
    font-weight: 300;
    font-size: 60px;
    display: inline-block;
    overflow: hidden;
    animation: typing 2s steps(30, end);
    white-space: nowrap;
  }

  .role {
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 40px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 44px;
    line-height: 10px;
  }

  .title h2 {
    font-size: 60px;
    line-height: 62px;
  }

  .img-container {
    width: 55vw;
  }

  .img-container img {
    max-width: 200px;
    min-width: 160px;
    width: 100%;
    height: auto;
    display: flex;
  }
}

@media (min-width: 992px) {
  .home-container {
    flex-direction: row;
    padding: 70px;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
    width: 70vw;
    height: 95vh;
  }

  .title {
    width: 100%;
    text-align: start;
  }

  .intro {
    font-weight: 300;
    font-size: 50px;
    display: inline-block;
    overflow: hidden;
    animation: typing 2s steps(30, end);
    white-space: nowrap;
  }

  .role {
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 15px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 30px;
    width: 275px;
    line-height: 40px;
  }

  .title h2 {
    font-size: 50px;
    line-height: 52px;
    margin-bottom: 20px;
  }

  .img-container {
    width: 35vw;
  }

  .img-container img {
    max-width: 400px;
    width: 100%;
    height: auto;
    display: flex;
  }
}

@media (min-width: 1940px) { 
  .intro {
    font-weight: 300;
    font-size: 90px;
    display: inline-block;
    overflow: hidden;
    animation: typing 2s steps(30, end);
    white-space: nowrap;
    line-height: 90px;
  }

  .role {
    border-bottom: 1px solid #7a7a7a;
    border-top: 1px solid #7a7a7a;
    color: #aeaeae;
    padding: 15px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 50px;
    width: 450px;
    line-height: 80px;
  }

  .title h2 {
    font-size: 85px;
    line-height: 82px;
    margin-bottom: 20px;
  }

  .img-container img {
    max-width: 450px;
    width: 100%;
    height: auto;
    display: flex;
  }

}
</style>
