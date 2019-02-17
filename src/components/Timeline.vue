<template>
  <div id="posts">
    <Loader v-if="projects.length === 0"/>
    <div v-else class="timeline">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        :class="index % 2 == 0 ? 'container left' : 'container right'"
      >
        <div class="content" :id="project.date">
          <h4 :id="project.category">
            <a style="text-decoration:none;" href="javascript:void(0)">{{project.category}}</a> |
            <b>{{project.date}}</b>
          </h4>
          <img class="preview" v-if="project.image !== null" :src="project.image">
          <h1 v-if="project.url !== null && project.url.length > 0">
            <a :href="project.url">{{project.title}}</a>
          </h1>
          <h1 v-else>{{project.title}}</h1>
          <p>{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "./Loader.vue";

export default {
  components: {
    Loader
  },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    const getPosts = httpResponse => {
      let jsonz = httpResponse.data;

      jsonz.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      const isAfterHours = new Date().getHours() < 5;
      this.projects = jsonz.filter(post => {
        return post.active === true || isAfterHours;
      });
    };

    axios
      .get("https://samstauffer-3fcaa.firebaseio.com/posts.json")
      .then(getPosts)
      .catch();
  }
};
</script>

<style scoped lang="scss">
.preview {
  max-width: 400px;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  font-family: Helvetica, sans-serif;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #000000;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #000000;
  border: 4px solid #ffffff;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid black;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent black;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid black;
  border-width: 10px 10px 10px 0;
  border-color: transparent black transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
