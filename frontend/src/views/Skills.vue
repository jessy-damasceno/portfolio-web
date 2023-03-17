<template>
  <div class="container skills">
    <title-component :skills="'Skills'" />
    <div class="skills-container">
      <div v-for="(skill, type) in skills" :key="type" class="type-container">
        <h3 class="type-title">{{ type }}</h3>
        <div v-for="(e, index) in skill" :key="index">
          <!-- <img src="{{ skill.img }}" alt=""> -->
          <div class="logo"></div>
          <span>{{ e.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Skill {
  img: string
  name: string
  title: string
}

interface Skills {
  front: Skill[]
  back: Skill[]
}

export default {
  setup() {
    const skills: Skills = {
      front: [
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' },
        { img: 'Home', name: 'FRONT', title: 'front' }
      ],
      back: [
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' },
        { img: 'About', name: 'BACK', title: 'back' }
      ]
    }

    return {
      skills
    }
  }
}
</script>

<style>
.skills {
  width: 100vw;
}

.skills-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.type-title {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 28px;
  margin-top: 5px;
}

.type-container {
  display: flex;
  flex-wrap: wrap;
  height: 50vh;
  width: 600px;
  gap: 40px;
  overflow-y: scroll;
}

.type-container::-webkit-scrollbar {
  width: 8px;
  height: 16px;
}
.type-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.type-container::-webkit-scrollbar-thumb {
  background: #ee6817;
  border-radius: 10px;
}
.type-container::-webkit-scrollbar-thumb:hover {
  background: #b44a08;
}
</style>
