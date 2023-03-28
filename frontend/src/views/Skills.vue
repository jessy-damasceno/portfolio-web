<template>
  <div class="container skills">
    <title-component :skills="'Skills'" />
    <div class="skills-container">
      <div v-for="(skill, type) in skills" :key="type" class="type-container">
        <h3 class="type-title">{{ type }}</h3>
        <div v-for="(e, index) in skill" :key="index" class="skill">
          <img v-bind:src="e.img" alt="" />
          <span>{{ e.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

interface Skill {
  img: string;
  name: string;
  title: string;
}

interface Skills {
  front: Skill[];
  back: Skill[];
}

export default {
  setup() {
    const skills: Skills = {
      front: [
        { img: 'public/iconJs1.svg', name: 'JavaScript', title: 'front' },
        { img: 'public/iconTs.svg', name: 'TypeScript', title: 'front' },
        { img: 'public/icons8-vuejs.svg', name: 'Vue', title: 'front' },
        { img: 'public/iconReact.svg', name: 'React', title: 'front' },
        { img: 'public/iconRedux.svg', name: 'Redux', title: 'front' },
        { img: 'public/iconHtml.svg', name: 'Html', title: 'front' },
        { img: 'public/iconCss.svg', name: 'Css', title: 'front' },
        { img: 'public/icons8-tailwindcss.svg', name: 'Tailwind', title: 'front' },
      ],
      back: [
        { img: 'public/iconTs.svg', name: 'TypeScript', title: 'back' },
        { img: 'public/iconPython.svg', name: 'Python', title: 'back' },
        { img: 'public/iconMysql.svg', name: 'MySQL', title: 'back' },
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
    };

    return {
      skills
    };
  }
};
</script>

<style>
.skill {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.skill img {
  height: 150px;
  width: auto;
}

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
