# React-Redux-Boilerplate

An opinionated template for creating web applications with React and Redux. I created this template to explain to others (and myself) what technologies one should use when creating a web application with React and Redux and why. Please make a pull request with any suggestions.

## Background

Here are a curated and annotated list of sources explaining both how to use the technologies in this template and why I chose them. Additionally, I have included my own thoughts when necessary. I consider this to be the minimum subset of reading necessary to understand all the technologies. Feel free to make a pull request or fork this repository if you disagree.

### Terminology
1. JavaScript == ECMAScript
1. ECMAScript 2015 == ES2015 == ECMAScript 6 == ES6
1. SASS and LESS are two preprocessors for CSS. They help you write better CSS code. [Read this for more information.](https://www.keycdn.com/blog/sass-vs-less/)
1.  SASS is the successor to SCSS.
1.  CommonJS, AMD, and ES2015 Modules are several competing systems for creating reusable modules of JavaScript code. 

### Modules
1.  Modules provide you with the ability to encapsulate and reuse your code. Unlike almost any other programming language you've ever used, JavaScript does not provide a simple way to create isolated blocks of code in separate files and reuse them across your project.  
1.  You need to make two choices when using modules in a JavaScript: which theoretical module system and which implementation of that system. As of August 2016, there are three main theoretical approaches to creating a JavaScript module system: CommonJS, AMD, and ES2015 Modules; and, there are three main implementations, all of which support all three methodologies: Browserify, Webpack, and JSPM (aka SystemJS).  
1.  [This site provides a good overview of the different theoretical module systems, the implementations, and their history.](https://auth0.com/blog/javascript-module-systems-showdown/)
1.  I will be using ES2015 modules as they produce the simplest code. Additionally, since I will be using Babel anyway for its JSX support (see (ADD MORE EXPLANATION BELOW) for why), ES2015 support comes for free without any additional libraries.
1.  I will use Webpack instead of JSPM because JSPM appears to be too immature at this point. See [this site](http://ilikekillnerds.com/2016/03/ditching-jspmsystem-js-webpack/) for one user's negative experience with JSPM. Please correct me if I am wrong in ignoring JSPM. It appears to be poised to overtake Webpack at some point in the future. I look forward to adopting it when it becomes sufficiently mature. 
1.  I will use Webpack instead of Browserify because it provides a more cohesive solution. Browserify and Webpack provide roughly the same features when one considers both the tools and their ecosystems of plugins and loaders. However, Webpack does a better job of enabling the user to utilize those features in a concise, complete manner. Browserify applies the Unix philosophy of doing one thing well, modules for JavaScript, and requires the user to add many other tools to create a fully functioning web application. Since life is short and I want to focus on things other than my application's module and build systems, I will use Browserify. ([Note: I've made many unsupported assertions in this paragraph. This site supports those assertions.](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.pndg60bg2))

### Webpack - Webpack provides 
1.  [Webpack Documentation Intro](https://webpack.github.io/docs/usage.html)
1.  [A Short Webpack Tutorial](https://webpack.github.io/docs/tutorials/getting-started/)
1.  [Thorough Webpack Tutorial](http://survivejs.com/webpack/introduction/)
1.  

