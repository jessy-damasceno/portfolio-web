<template>
  <div style="height: 24px; z-index: 9999; display: none;">
    <div class="header">
        <img src="../assets/logo_lucas.png" alt="" />
        <button class="hamburguer" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
    </div>
    <transition name="slide-down">
      <div v-if="isOpen" class="menu-container">
        <nav class="menu-nav">
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isOpen = ref(false);

    function toggleMenu() {
      isOpen.value = !isOpen.value;
    }
    return {
      isOpen,
      toggleMenu
    };
  }
});
</script>

<style scoped>
.header {
  background-color: black;
  display: flex;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 12px;
  justify-content: space-between;
}

.header img {
  height: 30px;
  width: auto;
  margin-left: 20px;
}

.hamburguer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.hamburguer span {
  width: 25px;
  height: 4px;
  margin: 3px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}

.hamburguer span:nth-child(2) {
  transform-origin: center;
}

.menu-container {
  display: flex;
  width: 100vw;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.close span {
  width: 25px;
  height: 4px;
  margin: 3px;
  background-color: #333;
  transition: transform 0.3s ease-in-out;
}

.close span:nth-child(1) {
  transform-origin: top left;
  transform: rotate(45deg);
}

.close span:nth-child(2) {
  transform-origin: top right;
  transform: rotate(-45deg);
}

.menu-nav {
  width: 100vw;
  background-color: black;
}
.menu-nav ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.menu-nav li {
  border-bottom: 1px solid rgba(235, 235, 235, 0.1);
}

.menu-nav a:hover {
  color: #ee6817;
}
.menu-nav a {
  display: block;
  padding: 10px;
  color: #f8f8f8;
  font-size: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
