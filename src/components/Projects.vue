<template>
<div>    
    <div class="bgimg-2 w3-display-container w3-opacity-min">
        <div class="w3-display-middle">
            <span class="w3-xxlarge w3-text-white w3-wide">MY BLERG</span>
        </div>
    </div>
    <div class="w3-content w3-container w3-padding-64" id="projects">        
        <h3 class="w3-center">Latest Builds and Adventures</h3>
        <p class="w3-center">
            <em>{{message}}</em>
        </p>        
        <br>
        
        <!-- <transition name="fade"> -->
          <div class="w3-center" v-show="isLoading === true"> 
            <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
              <circle cx="170" cy="170" r="160" stroke="#83928a"/>
              <circle cx="170" cy="170" r="135" stroke="#404041"/>
              <circle cx="170" cy="170" r="110" stroke="#83928a"/>
              <circle cx="170" cy="170" r="85" stroke="#404041"/>
            </svg>          
          </div>
        <!-- </transition> -->
        
        <transition name="fade">
          <div class="w3-row-padding w3-center w3-section" v-show="isLoading === false">
              <div class="w3-col m3" v-for="project in projects" :key="project.date" style="padding-bottom: 25px;">
                  <img :src="project.img" style="width:200px;border-radius:50%" @mouseover="hover(project)"  @click="enhance(project)" class="w3-hover-opacity" :alt="project.desc">                
              </div>
          </div>
        </transition>

    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "Looks like your connection is slow, give it a second...",
      projects: []
    };
  },
  computed: {
    isLoading() {
      return this.projects.length === 0;
    },
    currentMonth() {
      const date = new Date();
      return date.toLocaleString(date, { month: "long" });
    }
  },
  mounted() {
    axios
      .get("https://samstauffer-3fcaa.firebaseio.com/projects.json")
      .then(response => {
        setTimeout(() => {
          this.message = `Here's what i've been up to in ${this.currentMonth}`;
          this.projects = response.data;
        }, 6000);
      })
      .catch(error => {
        this.message =
          "Sorry! Looks like this section is currently under maintenance (0_0)";
      });
  },
  methods: {
    hover: project => {
      // this.message = project.desc;
    },
    enhance: project => {
      // this.message = project.desc;
    }
  }
};
</script>

<style <style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.bgimg-2 {
  background-image: url("../assets/narrows-canyon.jpg");
  min-height: 400px;
  // filter: grayscale(100%);
}

.w3-hover-opacity {
  cursor: pointer;
}
.container {
  align-items: center;
}

.loader {
  max-width: 15rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
}

circle {
  fill: none;
  stroke-width: 3.5;
  animation-name: preloader;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 170px 170px;
  will-change: transform;

  &:nth-of-type(1) {
    stroke-dasharray: 550px;
  }

  &:nth-of-type(2) {
    stroke-dasharray: 500px;
  }

  &:nth-of-type(3) {
    stroke-dasharray: 450px;
  }

  &:nth-of-type(4) {
    stroke-dasharray: 300px;
  }

  @for $i from 1 through 4 {
    &:nth-of-type(#{$i}) {
      animation-delay: -#{$i * 0.15}s;
    }
  }
}

@keyframes preloader {
  50% {
    transform: rotate(360deg);
  }
}
</style>