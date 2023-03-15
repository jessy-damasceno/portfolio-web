<template>
  <div class="container">
    <title-component :skills="'Education'" />
    <div class="project-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="projects-container"
        @mouseover="showDescription = true"
        @mouseleave="showDescription = false"
      >
        <img :src="project.url" />
        <div v-if="showDescription === true" >
          <h4>{{ project.name }}</h4>
          <h2>{{ project.description }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Projects {
  url: string
  name: string
  description: string
}

export default {
  setup() {
    const projects: Projects[] = [
      {
        url: 'https://criticalhits.com.br/wp-content/uploads/2019/09/haki-luffy-910x513.jpg',
        name: 'Projeto 1',
        description: 'Descrição do projeto 1'
      },
    //   {
    //     url: 'https://criticalhits.com.br/wp-content/uploads/2019/09/haki-luffy-910x513.jpg',
    //     name: 'Projeto 2',
    //     description: 'Descrição do projeto 2'
    //   },
    //   {
    //     url: 'https://criticalhits.com.br/wp-content/uploads/2019/09/haki-luffy-910x513.jpg',
    //     name: 'Projeto 3',
    //     description: 'Descrição do projeto 3'
    //   }
    ]

    return {
      projects,
      showDescription: false
    }
  }
}
</script>

<style>
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
