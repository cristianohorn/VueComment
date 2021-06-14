<template>
  <div id="app">
    <div id="logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <Form />
    <Comments />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Comments from "./components/Comments.vue";

export default {
  name: "App",
  components: {
    Form,
    Comments
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
<style scoped>
#logo {
  text-align: center;
}
</style>