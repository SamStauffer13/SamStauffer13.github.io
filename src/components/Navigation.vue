<template>
<div class="w3-top">
    <div class="w3-bar" :class="{'w3-bar w3-card w3-animate-top w3-white': isScrolling }" id="myNavbar" >
        <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" @click="showMobileMenu = true"
            title="Toggle Navigation Menu">
            <i class="fa fa-bars"></i>
        </a>
        <a href="#home" class="w3-bar-item w3-button">HOME</a>
        <a href="#about" class="w3-bar-item w3-button w3-hide-small">
            <i class="fa fa-user"></i> ABOUT</a>
        <a href="#projects" class="w3-bar-item w3-button w3-hide-small">
            <i class="fa fa-th"></i> POSTS</a>
        <a href="#links" class="w3-bar-item w3-button w3-hide-small">
            <i class="fa fa-envelope"></i> ARTICLES</a>
                    <a href="#footer" class="w3-bar-item w3-button w3-hide-small">
            <i class="fa fa-envelope"></i> SOCIAL MEDIA</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
            <i class="fa fa-search"></i>
        </a>
    </div>

    <div v-show="showMobileMenu"  class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
        <a href="#about" class="w3-bar-item w3-button" @click="showMobileMenu = false">ABOUT</a>
        <a href="#portfolio" class="w3-bar-item w3-button" @click="showMobileMenu = false">POSTS</a>
        <a href="#contact" class="w3-bar-item w3-button" @click="showMobileMenu = false">ARTICLES</a>
        <a href="#" class="w3-bar-item w3-button">SEARCH</a>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  },
  computed: {
    isScrolling() {
      return (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      );
    }
  }
};
</script>