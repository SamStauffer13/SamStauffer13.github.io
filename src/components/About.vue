<template>
  <div class="w3-container w3-padding-64 about" id="about">    
    <h1
      class="w3-center w3-padding-large"
    >I've been tinkering in the W&sup3; for 5 years, 3 months, and 2 days</h1>
    <h2 class="w3-center w3-padding-large">
      I'm also obsessed with the current state of
      <span v-for="(interest, index) in interests" :key="interest.name">        
        <span v-if="index+1 === interests.length"> and </span>
        <a style="text-decoration:none;" :href="'#'+interest.category">{{interest.name}}</a>
        <span v-if="index+1 !== interests.length">, </span>
      </span>
    </h2>
    <h3
      class="w3-center w3-padding-large"
    >This &darr; blerg is a conglomerate of &uarr; those things</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {
          name: "Javascript",
          category: "Front End Development"
        },
        {
          name: "Philosophy",
          category: "Philosophía"
        },
        {
          name: "Urban Farming",
          category: ""
        },
        {
          name: "Ultralight Backpacking",
          category: "Ultralight Backpacking"
        },
        {
          name: "Spicy Tonkotsu Ramen",
          category: "Send Noods"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.about {
  background-image: url("");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

@media only screen and (max-device-width: 1024px) {
  .about {
    background-attachment: scroll;
  }
}
</style>
