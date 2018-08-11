import Vue from 'vue'
import App from './App.vue'
import Elevator from 'elevator.js'
new Vue({
  el: '#app',
  render: h => h(App)
})

const scrollStyles = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
window.onscroll = () => {

    let navbar = document.getElementById("myNavbar");

    const isScrolling = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;

    navbar.className = isScrolling ? scrollStyles : navbar.className.replace(scrollStyles, '');
}
function toggleMenuOnMobile() {

    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var elevator = new Elevator({
    element: document.querySelector('#elevator'),
    duration: 3000 // milliseconds
  });
