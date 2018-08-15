import Vue from 'vue'
import Troll from "./components/Troll.vue"
import Navigation from "./components/Navigation.vue"
import Portfolio from "./components/Portfolio.vue"
import Projects from "./components/Projects.vue"
import Articles from "./components/Articles.vue"
import Foot from "./components/Foot.vue"
new Vue({
  el: '#app',
  components: {
    Troll,
    Navigation,
    Portfolio,
    Projects,
    Articles,
    Foot
  }
});