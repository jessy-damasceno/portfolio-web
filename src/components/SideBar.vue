import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: String
  },
  setup(props) {
    props.message // <-- type: string
  }
})

<template>
  <aside>
	  <!-- <Logo /> -->
	  <!-- <Navigator /> -->
  </aside>
</template>
