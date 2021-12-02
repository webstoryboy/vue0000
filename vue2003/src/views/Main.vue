<template>
  <div>
    <Header />
    <main id="main">
      <section id="mainCont">
        <div class="main__cont">
          <div>{{ msg1 }}</div>
          <div>{{ msg2 }}</div>
          <div>{{ msg3 }}</div>
          <div>{{ msg4 }}</div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      msg1: "we provide",
      msg2: "visual Coding",
      msg3: "solutions",
      msg4: "for you webs",
    };
  },
};
</script>

<style lang="scss">
#mainCont {
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main__cont {
  color: #fff;
  font-size: 10vw;
  line-height: 0.85;
  letter-spacing: -0.0275em;
  transition: all 2s;
  text-transform: uppercase;
  font-family: "saol";

  .l2 {
    margin-left: 9vw;
  }
  .l3 {
    margin-left: 18vw;
  }
}
</style>
