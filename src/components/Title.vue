<template>
  <h2 class="title">{{ skills }}</h2>
  <div class="line"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Props {
  skills: string
}

export default defineComponent({
  props: {
    skills: {
      type: String,
      required: true
    }
  },
  setup(props: Props) {
    const skills = ref(props.skills)

    return {
      skills
    }
  }
})
</script>

<style>
.title {
  font-size: 50px;
  margin-bottom: 20px;
}

.line {
  background-color: #ee6817;
  height: 5px;
  width: 70px;
  margin: 30px 0 50px 0;
}
</style>
