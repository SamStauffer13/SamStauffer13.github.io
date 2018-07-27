Ode to Front-End Optimization 

The overhead of handling a http request/response is ~1KB, so it's faster to inline resource files smaller than 1KB
Loading page-images (referenced from html not css) on-demand is faster than inlining them 
https://modernweb.com/loading-images-on-demand-with-pure-css/ 
Below the fold content should be loaded async after page.load 
Give large images a background gradient with colors representational of the final image (better user experience than a white box)
Give users a 'pleasant distraction' instead of a spinner (ex quickly load a partial demoing how to use a feature)