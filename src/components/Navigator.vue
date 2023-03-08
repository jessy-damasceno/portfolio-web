<template>
  <nav class="nav-container">
    <div class="nav-links">
      <a v-on:click="onClick" href="/"><span>Home</span></a>
      <a href="/about"><span>About</span></a>
      <a href="/skills"><span>Skills</span></a>
      <a href="/experience"><span>Experience</span></a>
      <a href="/education"><span>Education</span></a>
      <a href="/projects"><span>Projects</span></a>
      <a href="/contact"><span>Contact</span></a>
    </div>
    <div class="social-icons"></div>
  </nav>
</template>

<script lang="ts"> 
  export default function onClick() {
    console.log('oioioioi');
  }
</script>

<style>
.nav-container {
  height: 100%;
  position: fixed;
  background-color: rgb(13, 13, 13);
  z-index: 100;
  color: #f8f8f8;
}
.nav-links {
  display: flex;
  flex-direction: column;
}
.nav-links a {
  display: block;
  padding: 13px 0;
  text-align: left;
  margin: 0 30px;
  border-bottom: 1px solid rgba(235, 235, 235, 0.1);
  text-transform: uppercase;
  width: 150px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.nav-links a span:active {
  color: #ee6817; font-weight: 800 
}
</style>
