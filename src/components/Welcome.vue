<template>
  <div class="welcome w3-display-container w3-opacity-min" id="home">    
    <div class="w3-display-middle" style="white-space:nowrap;">
      <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
        Hi! I'm Sam
        <span class="w3-hide-small">and I like to make things</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.welcome {
  background-image: url("../assets/me.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  min-height: 100vh;
}

@media only screen and (max-device-width: 1024px) {
  .welcome {
    background-attachment: scroll;
  }
}
</style>
