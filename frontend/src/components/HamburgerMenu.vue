<template>
    <div class="hamburguer-menu">
      <button class="hamburguer" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <transition name="slide-down">
        <div v-if="isOpen" class="menu-container">
          <div class="menu">
            <button class="close" @click="toggleMenu">
              <span></span>
              <span></span>
            </button>
            <nav class="menu-nav">
              <ul>
                <li><a href="#">Página Inicial</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </transition>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
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
};
</script>

<style>
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

.hamburguer-menu .menu-container {
  position: relative;
  width: 100vw;
  z-index: 9999;
}

.hamburguer-menu .menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hamburguer-menu .close {
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

.hamburguer-menu .close span {
  width: 25px;
  height: 4px;
  margin: 3px;
  background-color: #333;
  transition: transform 0.3s ease-in-out;
}

.hamburguer-menu .close span:nth-child(1) {
  transform-origin: top left;
  transform: rotate(45deg);
}

.hamburguer-menu .close span:nth-child(2) {
  transform-origin: top right;
  transform: rotate(-45deg);
}

.hamburguer-menu .menu-nav ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.hamburguer-menu .menu-nav li {
  margin-bottom: 10px;
}

.hamburguer-menu .menu-nav a {
  display: block;
  padding: 10px;
  color: #333;
  font-size: 20px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hamburguer-menu .menu-nav a:hover {
  background-color: #333;
  color: #fff;
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
