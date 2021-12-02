<template>
  <header id="header">
    <div class="header__port">
      <router-link to="/portfolio">Portfolio</router-link>
    </div>
    <div class="header__logo">
      <router-link to="/">webstroyboy</router-link>
    </div>
    <nav class="header__menu">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/reference">Reference</router-link></li>
        <li><router-link to="/youtube">Youtube</router-link></li>
        <li><router-link to="/script">Script</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <a href="/" class="ham">
        <span class="sr-only">menu</span>
      </a>
    </nav>
  </header>
</template>

<style lang="scss">
// header
#header {
  position: fixed;
  left: 0;
  top: 0%;
  overflow: hidden;
  z-index: 1200;
  width: 100%;
  color: #fff;
  border-bottom: 1px solid #2e2e30;
  display: flex;
  align-items: center;
  font-family: "Rajdhani", "Chosunilbo_myungjo";
  font-weight: 500;
  background: #000;

  .header__port {
    flex: 1 1 35%;
    padding-left: 1rem;

    a {
      position: relative;
      padding-left: 10px;

      &::before {
        content: "";
        width: 5px;
        height: 5px;
        background: #fff;
        position: absolute;
        left: 0;
        top: 3px;
        border-radius: 50%;
      }

      &::after {
        content: "";
        width: 5px;
        height: 5px;
        background: #fff;
        position: absolute;
        left: 0;
        top: 11px;
        border-radius: 50%;
      }
    }
  }
  .header__logo {
    flex: 1 1 30%;
    text-align: center;
    margin: 1.5rem;

    a {
      font-size: 1.8rem;
      line-height: 1;
      font-family: "Playfair Display";
    }
  }
  .header__menu {
    flex: 1 1 35%;
    text-align: right;
    padding-right: 1rem;

    li {
      display: inline;

      a {
        display: inline-block;
        padding: 5px;
      }
    }
    .ham {
      display: inline-block;
      display: none;
      width: 40px;
      height: 40px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 10px;
        top: 10px;
        width: 8px;
        height: 8px;
        background: #fff;
        box-shadow: 0 12px 0 #fff;
      }
      &::after {
        content: "";
        position: absolute;
        right: 10px;
        top: 10px;
        width: 8px;
        height: 8px;
        background: #fff;
        box-shadow: 0 12px 0 #fff;
      }
    }
  }
}
</style>
