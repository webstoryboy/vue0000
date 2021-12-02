<template>
  <section id="contactInfo">
    <div class="contact__info">
      <div>
        <p>Let's create something new</p>
        <h3>LET'S Get IN<br />TOUCH</h3>
        <router-link to="/contact" class="contact">Contact Me</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact__info {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000;
  color: #fff;
  border-top: 1px solid #2e2e30;

  p {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 80px;
    font-family: "Rajdhani";
  }

  h3 {
    font-size: 9vw;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-family: "saol";
  }

  a {
    color: #000;
    background: #f0eeeb;
    border-radius: 50px;
    padding: 18px 53px;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Rajdhani";
  }
}
</style>
