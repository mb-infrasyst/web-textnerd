<template>
<h1>TextNerd.io</h1>
  <AllCapsForm />

  <small>Copyright 2023 <a href="https://www.infrasyst.com">InfraSyst Technology Solutions LLC</a></small><br>
  <small>All rights reserved.</small>
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
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
