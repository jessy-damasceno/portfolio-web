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
        <div class="info-button">
          <button @click="openPDF" class="button">DOWNLOAD RESUME AS PDF FORMAT</button>
        </div>
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
  methods: {
    openPDF() {
      window.open('/Curriculo_Atualizado.pdf', '_blank')
    }
  },
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

<style scoped>
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
  font-size: 20px;
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
  font-size: 28px;
  line-height: 38px;
  text-align: center;
}

@media (max-width: 1575px) {
  .container {
    overflow-y: scroll;
  }

  .infos {
    align-items: center;
    min-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .about-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70vw;
  }

  .about-info ul {
    width: 40%;
  }
  .vertical-line {
    height: 5px;
    width: 70px;
  }

  .personal-info {
    width: 90%;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
  }
}
@media (max-width: 992px) {
  .about-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 70vw;
  }

  .info-button {
    margin-top: 50px;
    align-self: center;
  }
  .about-info ul {
    width: 100%;
    text-align: justify;
  }
}

@media (max-width: 600px) {
  .vertical-line {
    display: none;
  }

  .personal-info {
    display: none;
  }

  .container {
    overflow-y: hidden;
  }
}
</style>
