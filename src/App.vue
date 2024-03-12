<template>
  <div id="app">
    <GreenButton text="saw kyaw myint" />
    <LinearButton text="saw kyaw myint" />
    <InputField label="label" v-model="model" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LinearButton from "./components/design/button/LinearButton.vue";
import GreenButton from "./components/design/button/GreenButton.vue";
import InputField from './components/design/form/InputField.vue';
export default {
  name: "App",
  components: {
    HelloWorld,
    GreenButton,
    LinearButton,
    InputField
  },
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
</style>
