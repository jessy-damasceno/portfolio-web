<template>
  <div class="container about-container">
    <title-component :skills="'About'" />
    <div class="infos">
      <div class="about-info">
        <ul>
          <li><span>Name:</span> Lucas Otoni Assunção</li>
          <li><span>Email:</span> lucasotoni.dev@gmail.com</li>
          <li><span>Phone:</span> (31) 99774-4967</li>
          <li><span>Date of birth:</span> 22/08/1996</li>
          <li><span>Adress:</span> Rua juninho</li>
          <li><span>Nationality:</span> Brasil</li>
        </ul>
        <button class="button">DOWNLOAD RESUME AS PDF FORMAT</button>
      </div>
      <div class="vertical-line"></div>
      <div class="personal-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat lacus vitae
          leo blandit, ac convallis diam pharetra. Vestibulum venenatis sollicitudin leo at luctus.
          Aliquam vitae congue sapien. Donec ac bibendum libero. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Sed volutpat interdum justo, eu
          dignissim eros vehicula at. Proin aliquam magna euismod, efficitur tellus vel, maximus
          metus. Nunc dictum id enim in ullamcorper. Nulla nec libero eget elit consequat consequat.
          Donec sagittis, est sit amet tempor efficitur, nulla libero vehicula nisl, nec maximus
          felis metus sed odio. Duis eu dolor nec enim dignissim rhoncus. In hac habitasse platea
          dictumst. Sed at neque eget enim pharetra pretium sed sit amet turpis.
        </p>
      </div>
    </div>
  </div>
</template>

<style>

.infos {
  align-items: center;
  min-width: 30%;
  display: flex;
  justify-content: space-around;
}

.about-info ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.about-info li {
  padding: 20px 0;
  border-bottom: 1px solid rgba(235, 235, 235, 0.1);
  list-style: none;
}

.about-info span {
  text-transform: uppercase;
}

.vertical-line {
  background-color: #ee6817;
  height: 70px;
  width: 5px;
  margin: 30px 0 50px 0;
}

.personal-info {
  width: 50%;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
}
</style>
