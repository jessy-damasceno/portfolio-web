<template>
  <div class="container">
    <title-component :skills="'Experience'" />
    <div class="contact-container">
      <div class="contact">
        <div class="emailfont">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <h3>Location</h3>
          <span>Belo Horizonte, Brazil</span>
        </div>
        <div class="email">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <h3>Email</h3>
          <span>lucasotoni.dev@gmail.com</span>
        </div>
      </div>
      <div class="social">
        <h3>Find me on</h3>
        <div class="contact-icons">
          <a href="https://github.com/"
            ><font-awesome-icon class="insta" icon="fa-brands fa-instagram"
          /></a>
          <a href="https://github.com/"
            ><font-awesome-icon class="git" icon="fa-brands fa-github"
          /></a>
          <a href="https://github.com/"
            ><font-awesome-icon class="linkedin" icon="fa-brands fa-linkedin-in"
          /></a>
        </div>
      </div>
    </div>
    <form class="email-form">
      <input />
      <input />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Send</button>
    </form>
  </div>
</template>

<style>
.contact-container {
  padding: 40px 0;
  border-top: 1px solid rgba(235, 235, 235, 0.1);
  display: flex;
  height: 50vh;
  width: 70vw;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 30%;
}

.social h3 {
  font-size: 35px;
}

.contact-icons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-self: flex-start;
}

.contact-icons a {
  font-size: 55px;
  transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
}

.contact h3 {
  font-size: 28px;
}

.contact span {
  font-size: 22px;
}

.email-form {
  padding: 20px;
  border-top: 1px solid rgba(235, 235, 235, 0.1);
  display: flex;
  flex-direction: column;
}
</style>
