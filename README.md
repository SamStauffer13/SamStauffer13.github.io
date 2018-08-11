# my-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Ode to Front-End Optimization 
1. The overhead of handling a http request/response is ~1KB, so it's faster to inline resource files smaller than 1KB
2. Loading page-images (referenced from html not css) on-demand is faster than inlining them: https://modernweb.com/loading-images-on-demand-with-pure-css/ 
3. Below the fold content should be loaded async after page.load 
5. Give large images a background gradient with colors representational of the final image (better user experience than a white box)
6. Give users a 'pleasant distraction' instead of a spinner (ex quickly load a partial demoing how to use a feature)
https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4
LiveServer + GlassIt Vscode extensions = single monitor programming bliss

Open tasks:
1. Pick out some cool images and use them as projects
2. Progress on Projects component:
    1. On hover of image updates text under projects and show date of project on image div
    2. On click of image pushes image/video to blog header div and if video will autoplay it...
    3. Show/Hide loader element based of length of projects array 
5. Create Footer component (use elevator.js)
6. Create Navigation component 
