<template>
  <div class="home-container">
    <div class="title">
      <h2>
        <span class="intro">Hello, i am</span>
        <br />
        {{ user.name }}
      </h2>
      <span class="role">{{ user.role }}</span>
    </div>
    <div class="img-container"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      user: {
        name: '',
        role: ''
      }
    }
  },
  mounted() {
    const userData = localStorage.getItem('user')
    if (userData) {
      this.user = JSON.parse(userData)
    }
  }
}
</script>

<style>
.home-container {
    margin: 20% 0 0 0;
    padding: 70px;
}

.intro {
    font-weight: 300;
    font-size: 50px;
    display: inline-block;
    overflow: hidden;
    animation: typing 2s steps(30, end);
    white-space: nowrap;
}

@keyframes typing {
  from { width: 0% }
  to { width: 100% }
}

.title h2 {
  border: none;
  color: #aeaeae;
  text-transform: uppercase;
  line-height: 55px;
  padding-bottom: 0;
  font-size: 55px;
  margin-bottom: 35px;
}

.role {
  border-bottom: 1px solid #7a7a7a;
  border-top: 1px solid #7a7a7a;
  color: #aeaeae;
  padding: 15px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 30px;
}
</style>
