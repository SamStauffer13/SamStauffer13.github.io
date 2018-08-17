<template>
    <div class="w3-content w3-container w3-padding-64" id="about">
            <h3 class="w3-center">ABOUT ME</h3>
            <p class="w3-center">
                <em>I'm obsessed with the current state of javascript, philosophy, urban farming, ultralight backpacking, and
                    spicy tonkotsu ramen</em>
            </p>

            <p>I've been working as a full stack web developer for 5 years. Bacon ipsum dolor amet tail boudin picanha, flank
                swine spare ribs ribeye doner pork belly t-bone drumstick. Burgdoggen chuck tongue pork belly corned beef
                fatback. Sirloin pork chop bacon jerky prosciutto. Pork belly ball tip boudin, drumstick turducken frankfurter
                chicken. Pancetta tongue filet mignon, shankle ham beef meatball drumstick venison hamburger t-bone beef
                ribs kevin ribeye. Kevin pork loin flank meatloaf beef pork jerky sausage turkey ground round cow t-bone
                cupim</p>
            <div class="w3-row">
                <div class="w3-col m6 w3-center w3-padding-large">
                    <p>
                        <b><i class="fa fa-user w3-margin-right"></i>Sam Stauffer</b>
                    </p>
                    <br>
                    <img :class="stylez" src="src/assets/kitay.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" style="border-radius:50%" alt="Photo of Me"
                        width="500" height="333">
                </div>

                <div class="w3-col m6 w3-hide-small w3-padding-large">
                    <p>On my free time I like to plan backpacking trips and do volunteer work for
                        <a href="https://columbia2ndchance.org/">Second Chance Animal Shelter</a>. Bacon ipsum dolor amet tail boudin picanha, flank swine spare ribs
                        ribeye doner pork belly t-bone drumstick. Burgdoggen chuck tongue pork belly corned beef fatback.
                        Sirloin pork chop bacon jerky prosciutto. Pork belly ball tip boudin, drumstick turducken frankfurter
                        chicken. Pancetta tongue filet mignon, shankle ham beef meatball drumstick venison hamburger t-bone
                        beef ribs kevin ribeye. Kevin pork loin flank meatloaf beef pork jerky sausage turkey ground round
                        cow t-bone cupim
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
import { Harbinger } from "../harbinger.js";

export default {
  data() {
    return {
      shouldSpin: false
    };
  },
  computed: {
    stylez() {
      return {
        spin: this.shouldSpin === true
      };
    }
  },
  mounted() {
    Harbinger.$on("started-from-the-bottom", () => {
      this.shouldSpin = true;
    });
    Harbinger.$on("now-we-here", () => {
      this.shouldSpin = false;
    });
  }
};
</script>

<style>
.spin {
  -webkit-animation: rotation 6s infinite linear;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(359deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
</style>
