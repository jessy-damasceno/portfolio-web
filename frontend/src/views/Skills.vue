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
        { img: '/iconJs.svg', name: 'JavaScript', title: 'front' },
        { img: '/iconTs.svg', name: 'TypeScript', title: 'front' },
        { img: '/icons8-vuejs.svg', name: 'Vue', title: 'front' },
        { img: '/iconReact.svg', name: 'React', title: 'front' },
        { img: '/iconRedux.svg', name: 'Redux', title: 'front' },
        { img: '/iconHtml.svg', name: 'Html', title: 'front' },
        { img: '/iconCss.svg', name: 'Css', title: 'front' },
        { img: '/icons8-tailwindcss.svg', name: 'Tailwind', title: 'front' }
      ],
      back: [
        { img: '/iconTs.svg', name: 'TypeScript', title: 'back' },
        { img: '/iconPython.svg', name: 'Python', title: 'back' },
        { img: '/iconMysql.svg', name: 'MySQL', title: 'back' },
        { img: '/iconNodejs.svg', name: 'NodeJs', title: 'back' },
        { img: '/iconDocker.svg', name: 'Docker', title: 'back' },
        { img: '/iconMongodb.svg', name: 'Mongodb', title: 'back' }
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
  width: 90%;
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

@media (max-width: 1550px) {
  .skills {
    overflow-y: scroll;
  }
  .skills-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-around;
    gap: 70px;
  }

  .type-container {
    width: 100%;
    overflow-y: hidden;
    justify-content: center;
    height: 100%;
  }

  .type-title {
    padding: 15px;
    color: rgb(13, 13, 13);
    font-weight: 900;
  }
}

@media (max-width: 768px) {
  .type-title {
    color: #AAAAAA;
  }
  .skill img {
    height: 60px;
    width: auto;
    /* oi */
  }
}
</style>
