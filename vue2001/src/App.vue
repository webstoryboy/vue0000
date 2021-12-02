<template>
  <header>
    <router-link to="/">
      <h1>Vue Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
h1 {
  text-align: center;
  background: #000;
  color: #fff;
  padding: 10px;
}
</style>
