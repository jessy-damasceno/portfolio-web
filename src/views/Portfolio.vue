<template>
    <div class="container">
      <title-component :skills="'Education'" />
      <div class="project-container">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <img :src="project.url" alt="Project Image" />
          <div class="project-description" v-if="showDescription === index">
            <h4>{{ project.name }}</h4>
            <h2>{{ project.description }}</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  interface Projects {
    url: string;
    name: string;
    description: string;
  }
  
  export default {
    setup() {
      const projects: Projects[] = [
        {
          url: 'https://picsum.photos/500/300?random=1',
          name: 'Project One',
          description: 'This is the first project description.'
        }
      ];
  
      let showDescription: number | null = null;
  
      return {
        projects,
        showDescription,
        setProjectDescription(index: number) {
          showDescription = index;
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .project-container .project {
    margin: 10px;
    position: relative;
  }
  
  .project-container .project img {
    max-width: 100%;
    display: block;
  }
  
  .project-container .project .project-description {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
  }
  
  .project-container .project:hover .project-description {
    display: block;
  }
  </style>
  