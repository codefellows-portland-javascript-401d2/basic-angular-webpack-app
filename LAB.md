![cf](http://i.imgur.com/7v5ASc8.png) Basic Angular App with Webpack and Express
====

Your app should be usable in both:
* Development mode
  * running webpack dev server
* "Production" mode - 
  * Project assets, bundled js file, html file(s) and css file(s), served via Express

Webpack should: 
* including linting of js files
* be runnable via dev server
* create a bundle.js for "production" build
* inject the bundle.js script into your index.html

Angular should run and load properly in both modes.

Bonus/stretch:
* Webpack:
  * ES6 FTW! Babel your js files and use ES6 module loading
  * Package your css using webpack
* Angular:
  * Put a h1 in your app that updates when you enter text in an input field and clears when you hit a button called delete.
