<template>
  <div class="wrap__title">
    <h2>
      <strong>{{ name1 }}</strong>
      <em>{{ name2 }}</em>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    name1: String,
    name2: String,
  },
};
</script>

<style lang="scss">
// wrap__title
.wrap__title {
  padding: 18rem 0 15rem;

  h2 {
    color: #fff;
    font-size: 10vmax;
    line-height: 0.85;
    letter-spacing: -0.0275em;
    font-family: "saol";
    text-transform: uppercase;

    strong,
    em {
      display: block;
      padding-top: 10px;
    }
  }
}
</style>
