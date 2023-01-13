<!-- prettier-ignore -->
<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://10.0.0.65:8080/">
        <img
          src="../public/img/textnerd-images/textnerd-logo-512x512-v1.png"
          alt="Convert text case."
        />
      </a>
    </div>
    <!-- prettier-ignore -->
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="http://10.0.0.65:8080/"> TextNerd.io </a>
        <a class="navbar-item" href="https://rapidapi.com/melbatista76/api/textnerd-io" target="_blank"> API </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <AllCapsForm />

  <small
    >Copyright 2023
    <a href="https://www.infrasyst.com"
      >InfraSyst Technology Solutions LLC</a
    ></small
  ><br />
  <small>All rights reserved.</small>
  <p></p>
  <p>&nbsp;</p>
</template>

<script>
import AllCapsForm from "./components/TextTools.vue";
export default {
  name: "App",
  components: { AllCapsForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 0px; */
}
body {
  margin: 0;
  background: #eee;
  height: 100%;
}
</style>
