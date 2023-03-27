<template>
  <div class="container">
    <title-component :skills="'Education'" />
    <div class="experience-container">
      <div v-for="(experience, index) in experiences" :key="index" class="experiences-container">
        <div class="first">
          <h4>{{ experience.name }}</h4>
          <h2>{{ experience.role }}</h2>
          <span>{{ experience.yearIn }} - {{ experience.yearOut }}</span>
        </div>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Experience {
  description: string;
  name: string;
  role: string;
  yearIn: number;
  yearOut: number;
}

export default {
  setup() {
    const experiences: Experience[] = [
      {
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
        name: 'Patsy Bastick',
        role: 'Estimator',
        yearIn: 2023,
        yearOut: 2022
      },
      {
        description:
          'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        name: 'Rosalinda Schruurs',
        role: 'Construction Worker',
        yearIn: 2022,
        yearOut: 2022
      },
      {
        description:
          'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        name: 'Caryn Cassin',
        role: 'Supervisor',
        yearIn: 2022,
        yearOut: 2022
      },
      {
        description:
          'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        name: 'Gianna Ure',
        role: 'Subcontractor',
        yearIn: 2022,
        yearOut: 2022
      },
      {
        description:
          'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        name: 'Izzy Gun',
        role: 'Surveyor',
        yearIn: 2022,
        yearOut: 2022
      },
      {
        description:
          'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        name: 'Izzy Gun',
        role: 'Surveyor',
        yearIn: 2022,
        yearOut: 2022
      }
    ];

    return {
      experiences
    };
  }
};
</script>
