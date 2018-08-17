<template>
<footer id="footer" class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a @mouseover="display({name:'Click ^ with sound on', link:'#'})" @mouseleave="display({name:'Hit me up me on social media', link:'#'})" class="w3-button" @click="elevator.elevate()">
      <img src="src/assets/icons/rocket.png">
  </a>
  <div class="w3-xlarge w3-section">
      <a :href="link" target="_blank"> {{message}} </a> <br>
      <i class="fa w3-hover-opacity mini-icon" v-for="account in accounts" :key="account.name" :class="account.class" @mouseover="display(account)"></i>
  </div>
  <p>
      Css from <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a>
  </p>
</footer>
</template>

<script>
import Elevator from "elevator.js";
import { Harbinger } from "../harbinger.js";
export default {
  data() {
    return {
      message: "Hit me up me on social media",
      link: "#footer",
      accounts: [
        {
          name: "Sam Stauffer on Facebooks",
          link: "https://www.facebook.com/sam.stauffer.98",
          class: "fa-facebook-official"
        },
        {
          name: "SamStauffer13 on Instagram",
          link: "https://www.instagram.com/sstauffer13/",
          class: "fa-instagram"
        },
        {
          name: "Praseodymium on Pinterest",
          link: "https://www.pinterest.com/praseodymium/",
          class: "fa-pinterest-p"
        },
        { name: "SamStauffer13 on Snapchat", link: "", class: "fa-snapchat" },
        {
          name: "Hic Sunt Dracones",
          link: "https://twitter.com/realDonaldTrump",
          class: "fa-twitter"
        },
        {
          name: "Sam Stauffer on LinkedIn",
          link: "https://www.linkedin.com/in/samstauffer/",
          class: "fa-linkedin"
        }
      ],
      elevator: new Elevator({
        duration: 22000, // ms
        mainAudio: "src/assets/moonmen.mp3",
        startCallback() {
          Harbinger.$emit("started-from-the-bottom");
        },
        endCallback() {
          Harbinger.$emit("now-we-here");
        }
      })
    };
  },
  methods: {
    display(account) {
      this.message = account.name;
      this.link = account.link;
    }
  }
};
</script>
<style>
.mini-icon{
  margin-right: 10px;
}
</style>
