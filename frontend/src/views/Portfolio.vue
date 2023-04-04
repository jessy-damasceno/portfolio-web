<template>
  <div class="container">
    <title-component :skills="'Projects'" />
    <div class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="card"
        @mouseover="showDetails(index)"
        @mouseleave="hideDetails(index)"
      >
        <a :href="project.url" target="_blank">
          <img :src="project.img" alt="Project Image" />
          <div v-if="project.showDetails" class="details">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </a>
        <div class="mobile-info">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import type IProject from '../interfaces/IProject';

export default {
  setup() {
    const projects = ref<IProject[]>([]);

    onBeforeMount(() => {
      const projectsData = localStorage.getItem('projects');
      if (projectsData) {
        projects.value = JSON.parse(projectsData) as IProject[];
      }
    });

    function showDetails(index: number) {
      projects.value[index].showDetails = true;
    }

    function hideDetails(index: number) {
      projects.value[index].showDetails = false;
    }

    return {
      projects,
      showDetails,
      hideDetails
    };
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 78%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.478);
  padding: 25px;
}

.card img {
  width: 100%;
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: #fff;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
  font-size: 22px;
  line-height: 30px;
}

.details p {
  /* background-color: rgb(23, 23, 23); */
  letter-spacing: 1.2px;
  padding: 22px
}

.card:hover .details {
  opacity: 1;
}

.projects-container {
  overflow-y: scroll;
  height: 75vh;
  width: 100%;
}

.projects-container::-webkit-scrollbar {
  width: 8px;
  height: 16px;
}

.projects-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.projects-container::-webkit-scrollbar-thumb {
  background: #ee6817;
  border-radius: 10px;
}

.projects-container::-webkit-scrollbar-thumb:hover {
  background: #b44a08;
}

.mobile-info {
  display: none;
}

@media (max-width: 600px) { 

  .container {
    width: 100vw;
    overflow: hidden;
  }
  .mobile-info p { 
    display: none;
  }

  .card {
    margin: 0;
    padding: 0;
  }
}

@media (max-width: 996px) {
  .details {
    display: none;
  }

  .projects-container {
    overflow-y: scroll;
    height: 75vh;
    width: 85vw;
  }

  .mobile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    text-align: center;
  }

  .mobile-info h3 {
    color: #ee6817;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
}
</style>
