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
        <div v-show="isLoading === true" class="loader">Loading...</div>        
        <div v-show="isLoading === false"  class="w3-row-padding w3-center w3-section">
            <div class="w3-col m3" v-for="project in projects" :key="project.date" style="padding-bottom: 25px;">
                <img :src="project.img" style="width:200px;border-radius:50%" @mouseover="hover(project)"  @click="enhance(project)" class="w3-hover-opacity" :alt="project.desc">                
            </div>
        </div>
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
        this.message = `Here's what i've been up to in ${this.currentMonth}`;
        this.projects = response.data;
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

<style>
.bgimg-2 {
  background-image: url("../assets/narrows-canyon.jpg");
  min-height: 400px;
}

.w3-hover-opacity {
  cursor: pointer;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #777;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>