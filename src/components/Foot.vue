<template>
<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a class="w3-button w3-light-grey" @click="backToTop">
      <i class="fa fa-arrow-up w3-margin-right"></i>To the top
  </a>
  <div >{{ social }}</div> 
  <div class="w3-xlarge w3-section">
      <i class="fa fa-facebook-official w3-hover-opacity" @click="displayUserName"></i>
      <i class="fa fa-instagram w3-hover-opacity" @click="displayUserName"></i>
      <i class="fa fa-snapchat w3-hover-opacity" @click="displayUserName"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity" @click="displayUserName"></i>
      <i class="fa fa-twitter w3-hover-opacity" @click="displayUserName"></i>
      <i class="fa fa-linkedin w3-hover-opacity" @click="displayUserName"></i>
  </div>
  <p>
      Styled with <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a>
  </p>
</footer>
</template>

<script>
import Elevator from "elevator.js";
import { Harbinger } from "../harbinger.js";
export default {
  data() {
    return {
      social: "hit me up me on social media",
      accounts: [],
      elevator: new Elevator({
        duration: 22000, // ms
        mainAudio: "src/assets/moonmen.mp3"
      })
    };
  },
  methods: {
    displayUserName() {},
    backToTop() {
      Harbinger.$emit("blastoff");
      this.elevator.elevate();
    }
  }
};
</script>