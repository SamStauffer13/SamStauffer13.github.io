<template>
  <div id="app">
    <Navigation/>
    <Welcome/>
    <About/>
    <Timeline/>
    <Goodbye/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Welcome from "./components/Welcome.vue";
import About from "./components/About.vue";
import Timeline from "./components/Timeline.vue";
import Goodbye from "./components/Goodbye.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Welcome,
    About,
    Timeline,
    Goodbye
  }
};
</script>

<style lang="scss">
#id {
  font-family: "Lato", sans-serif;
}

div {
  border: solid black 0px;
}
</style>
