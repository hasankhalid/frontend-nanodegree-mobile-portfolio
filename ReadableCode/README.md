## Website Performance Optimization portfolio project

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Following list shows the development steps taken for the first step

* Minification of html and css.
* Inlining the css in the html documents.
* Using grunt to optimize images.
* Using media attribute to only download print.css in case of print media.
* Minification of other html elements.
* Adding async attributes to the JS.
* Moving the script tags before the styling

####Part 2: Optimize Frames per Second in pizza.html

Following are the steps used to change the FPS of pizza.html

* Calculatedx function was removed to optimize computation.
* Phase calculation optimized by bringing the computation from 200 times down to 5 in updatePositions.
* Use of RAF to optimize rendering in DOM calculation.
* Duplicate CSS moved to the CSS file.
* Use of getElementsbyClass instead of querySelectorAll for optimized performance.
* Optimized cases of FSL by modification of loops.
* Unused variables deleted to prevent memory usage.

####The changes done are commented in the main.js file

###Additional resources used.
* http://ryanmorr.com/abstract-away-the-performance-faults-of-queryselectorall/
* https://www.sitepoint.com/5-grunt-tasks-improve-performance-website/
* https://24ways.org/2013/grunt-is-not-weird-and-hard/
* http://stackoverflow.com/questions/13925916/fatal-error-unable-to-find-local-grunt
* https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
* http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/comment-page-1/#animations

###Run via ngrok
* Use python to create a local server via http.server 80
* Run that via ngrok public link
* Non-minified code has been put into the ReadableCode directory

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
