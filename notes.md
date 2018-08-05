Ode to Front-End Optimization 
1. The overhead of handling a http request/response is ~1KB, so it's faster to inline resource files smaller than 1KB
2. Loading page-images (referenced from html not css) on-demand is faster than inlining them: https://modernweb.com/loading-images-on-demand-with-pure-css/ 
3. Below the fold content should be loaded async after page.load 
5. Give large images a background gradient with colors representational of the final image (better user experience than a white box)
6. Give users a 'pleasant distraction' instead of a spinner (ex quickly load a partial demoing how to use a feature)

LiveServer + GlassIt Vscode extensions = single monitor programming bliss

Open tasks:
1. Pick out some cool images
2. Convert Projects to component
3. On hover of image updates text under projects and show date of project on image div
4. Show/Hide dom elements based on length of array 
5. Create Footer component
6. Create Navigation component 