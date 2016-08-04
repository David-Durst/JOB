# Justified-Opinionated-Boilerplate

A justified and opinionated template for creating web applications with React and Redux. I created this template to explain to others (and myself) what technologies one should use when creating a web application with React and Redux. I created this template to fill a whole in the React/Redux ecosystem: while there are many other existing templates, they do not explain their decisions nor the other options. Please make a pull request with any suggestions.

## Background

Here are a curated and annotated list of sources explaining both how to use the technologies in this template and why I chose them. Additionally, I have included my own thoughts when necessary. I consider this to be the minimum subset of reading necessary to understand all the technologies. 

## Terminology
1. JavaScript == ECMAScript
1. ECMAScript 2015 == ES2015 == ECMAScript 6 == ES6
1. SASS and LESS are two preprocessors for CSS. They help you write better CSS code. [Read this for more information.](https://www.keycdn.com/blog/sass-vs-less/)
1. SASS is the successor to SCSS.
1. CommonJS, AMD, and ES2015 Modules are several competing systems for creating reusable modules of JavaScript code. 

## Overview

This application uses:
1. React for the UI
1. Redux for managing state
1. ES6 with Flowtype as the programming language
1. Webpack for building modules and managing module dependencies.
1. Babel for transpiling ES6 to ES5.
1. NPM for package management and as the top-level program for running the build, lint, and test systems
1. Git for source control

## Modules
1.  Modules provide you with the ability to encapsulate and reuse your code. Unlike almost any other programming language you've ever used, JavaScript does not provide a simple way to create isolated blocks of code in separate files and reuse them across your project.  
1.  You need to make two choices when using modules in a JavaScript: which theoretical module system and which implementation of that system. As of August 2016, there are three main theoretical approaches to creating a JavaScript module system: CommonJS, AMD, and ES2015 Modules; and, there are three main implementations, all of which support all three methodologies: Browserify, Webpack, and JSPM (aka SystemJS).  
1.  [This site provides a good overview of the different theoretical module systems, the implementations, and their history.](https://auth0.com/blog/javascript-module-systems-showdown/)
1.  I will be using ES2015 modules as they produce the simplest code. Additionally, since I will be using Babel anyway for its JSX support (see (ADD MORE EXPLANATION BELOW) for why), ES2015 support comes for free without any additional libraries.
1.  I will use Webpack instead of JSPM because JSPM appears to be too immature at this point. See [this site](http://ilikekillnerds.com/2016/03/ditching-jspmsystem-js-webpack/) for one user's negative experience with JSPM. Please correct me if I am wrong in ignoring JSPM. It appears to be poised to overtake Webpack at some point in the future. I look forward to adopting it when it becomes sufficiently mature. 
1.  I will use Webpack instead of Browserify because it provides a more cohesive solution. Browserify and Webpack provide roughly the same features when one considers both the tools and their ecosystems of plugins and loaders. However, Webpack does a better job of enabling the user to utilize those features in a concise, complete manner. Browserify applies the Unix philosophy of doing one thing well, modules for JavaScript, and requires the user to add many other tools to create a fully functioning web application. Since life is short and I want to focus on things other than my application's module and build systems, I will use Browserify. ([Note: I've made many unsupported assertions in this paragraph. This site supports those assertions.](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.pndg60bg2))

### Webpack Reading
1.  [Webpack Documentation Intro](https://webpack.github.io/docs/usage.html)
1.  [Short Webpack Tutorial](https://webpack.github.io/docs/tutorials/getting-started/)
1.  [Thorough Webpack Tutorial](http://survivejs.com/webpack/introduction/) 

## ES6 To ES5 Transpilation
The only two players I can find in this space are Babel and Traceur. I will use Babel as it appears to have won in this space. Facebook now uses it as their [standard transpiler for React](https://facebook.github.io/react/docs/displaying-data.html) and as their standard method for [converting Flowtype code to regular Javascript](https://flowtype.org/docs/getting-started.html#_).  Additionally, of those that compared Traceur and Babel, the [difference appears to be negligible for features other than React and Flowtype support](http://ilikekillnerds.com/2015/01/transpiling-wars-6to5-vs-traceur/). 

## NPM
Not worth discussing at this point. NPM is obviously the current dominant package manager for the web. Additionally, the Webpack and Babel tutorials clearly demonstrate that Node is the top-level program of choice.

## Version Control
Not worth discussing at this point. Git is obviously the current dominant VCS.
