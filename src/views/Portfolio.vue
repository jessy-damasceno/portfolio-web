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
        <img :src="project.url" alt="Project Image" />
        <div v-if="project.showDetails" class="details">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface Project {
  url: string
  name: string
  description: string
  showDetails: boolean
}

export default defineComponent({
  setup() {
    const projects: Project[] = reactive([
      {
        url: 'https://picsum.photos/500/300?random=1',
        name: 'Project One',
        description: 'This is the first project description.',
        showDetails: false
      },
      {
        url: 'https://picsum.photos/500/300?random=2',
        name: 'Project Two',
        description: 'This is the second project description.',
        showDetails: false
      },
      {
        url: 'https://picsum.photos/500/300?random=3',
        name: 'Project Three',
        description: 'This is the third project description.',
        showDetails: false
      }
    ])

    const showDetails = (index: number) => {
      projects[index].showDetails = true
    }

    const hideDetails = (index: number) => {
      projects[index].showDetails = false
    }

    return {
      projects,
      showDetails,
      hideDetails
    }
  }
})
</script>

<style>
.card {
  position: relative;
  width: 75%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.478);
  padding: 25px ;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
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
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover .details {
  opacity: 1;
}

.projects-container {
   overflow-y: scroll;
   height: 75vh;
   width: 70vw;
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
</style>
