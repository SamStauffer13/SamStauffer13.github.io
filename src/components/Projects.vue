<template>
    <div class="w3-content w3-container w3-padding-64" id="projects">        
        <h3 class="w3-center">Latest Projects</h3>
        <p class="w3-center">
            <em>{{message}}</em>
        </p>
        <br>        
        <div v-show="isLoading"> Loading Content </div>
        <div v-show="isLoading === false" class="w3-row-padding w3-center w3-section">
            <div class="w3-col m3" v-for="project in projects" :key="project.date" style="padding-bottom: 25px;">
                <img :src="project.img" style="width:200px;border-radius:50%" @mouseover="hover(project)"  @click="enhance(project)" class="w3-hover-opacity" :alt="project.desc">                
            </div>
        </div>
        <div id="previewer" class="w3-modal w3-black" onclick="this.style.display='none'">
            <video controls id="vidPreviewer">
                <source src="media/flame-thrower.mp4" type="video/mp4">
            </video>
        </div>        
    </div>
</template>

<script>
import axios from "axios";
export default {    
    data() {
        return {
            message: "Here's what I've been up to lately",
            projects: []
        }
    },
    computed: {
        isLoading() {
            return false; // return this.project === undefined || this.projects.length === 0;
        }
    },
    mounted() {
        axios
            .get('https://samstauffer-3fcaa.firebaseio.com/projects.json')
            .then(response => this.projects = response.data)
            .catch(error => {
                console.error(error);
                this.message = 'This section is currently under maintenance'
            })
    },
    methods: {
        hover: (project) => this.message = project.desc,
        enhance: (project) => {

            // var playa = document.getElementById("vidPreviewer");

            // playa.querySelector("source").src = project.url;

            // if (playa.requestFullscreen) playa.requestFullscreen();

            // else if (playa.msRequestFullscreen) playa.msRequestFullscreen();

            // else if (playa.mozRequestFullScreen) playa.mozRequestFullScreen();

            // else if (playa.webkitRequestFullscreen) playa.webkitRequestFullscreen();

            // document.getElementById("previewer").style.display = "block";
        }
    },
}
</script>
