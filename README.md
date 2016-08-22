# Justified-Opinionated-Boilerplate

A justified and opinionated template for creating web applications with React and Redux. I created this template to explain to others (and myself) what technologies one should use when creating a web application with React and Redux. While there are many other existing templates, they do not explain their decisions nor the other options. I do not claim that my opinions are correct, merely that they are justified and good enough to get the JOB done. Please make a pull request with any suggestions or corrections.

## Background

Here are a curated and annotated list of sources explaining both how to use the technologies in this template and why I chose them. Additionally, I have included my own thoughts when necessary. I consider this to be the minimum subset of reading necessary to understand all the technologies. 

## Terminology That Confuses Me
1. JavaScript == ECMAScript
1. ECMAScript 2015 == ES2015 == ECMAScript 6 == ES6
1. SASS and LESS are two preprocessors for CSS. They help you write better CSS code. [Read this for more information.](https://www.keycdn.com/blog/sass-vs-less/)
1. SASS is the successor to SCSS.
1. CommonJS, AMD, and ES2015 Modules are several competing systems for creating reusable modules of JavaScript code. 

## Description and Justification of Application Components

This application uses:

1. React for the UI
1. Redux for managing state
1. ES6 as the programming language
1. Webpack for building modules and managing module dependencies.
1. Babel for transpiling ES6 to ES5.
1. Mocha, Chai, Sinon, jsdom, and Enzyme for testing
1. ESLint with Airbnb preset for linting
1. NPM for package management and as the top-level program for running the build, lint, and test systems
1. Git for source control

### UI
There are currently two dominant players in this space: Angular 2 and React. This is not a perfect comparison as Angular 2 handles more than just the UI component of a website. Nevertheless, I will compare them. Angular 2 is the successor to [MVC-like frameworks such as Backbone, Knockout, Ember, and Angular 1](https://developer.mozilla.org/en-US/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture). It is the best framework to use at this moment if you want to create a MVC web application. However, React takes an alternative, functional approach that, when combined with an appropriate state manager like Redux, promises to make web applications significantly easier to develop and maintain.
 
I prefer React and its ecosystem over Angular because it does a better job of managing state. State is a dangerous beast that makes an application hard to write, test, and maintain. 
1. State makes writing and testing software harder as the developer must address a more complicated system. A stateless component behaves the same way every time it is called with the same inputs. However, a stateful component can react differently depending on the previous events. This means that, for stateful components, the developer must write code and tests that address all possible states of the component. Additionally, if stateful components interact, the developer must address all possible combinations of states of the interacting components. This number of combinations can quickly grow very large, leading to a large, complicated codebase and many tests. 
1. State makes maintenance much harder as someone new to the project must understand not only the inputs and outputs of each component but also the internal states of the components and how those states develop throughout the lifetime of the application.

React does a better job at maintaining state than Angular because it better separates the display logic from the application state. In Angular, each UI component directly updates the model backing it [through two way data binding](https://angular.io/docs/ts/latest/guide/architecture.html#!#data-binding). For example, in an application with a todo list and weather information, the todo UI view can update the todo state store separately from the weather UI and state store. This means that the interactions between the state stores and their respective components must be tested for all combinations of states. React takes a different approach. React encourages each UI component to be a pure, stateless function that takes properties in and produces a UI view. The components are not meant to directly interact with each other nor with state stores. Also, React does not handle most state management. This makes the UI much simpler as there are limited possible interactions between UI components. Additionally, it leaves state issues to components designed to deal with them, such as Redux. Thus, React forces the developer in creating less stateful applications that are easier to write, test, and maintain. 

Note: It is possible to do appropriate state management in [Angular 2 using Redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.809kaj1ra). Additionally, it is possible to have bad state management in [React with two-way data bindings](https://facebook.github.io/react/docs/two-way-binding-helpers.html). However, React defaults to good state management, as one-way data bindings are the default, while [Angular encourages poor state management in its documentation](https://angular.io/docs/ts/latest/guide/architecture.html#!#data-binding).

#### React Reading
1. [React Official Documentation](https://facebook.github.io/react/docs/why-react.html) - Read through the guides from "Why React?"
 until (but not including) "Add-Ons". I would skip the tutorial as it does poor state management.
1. [React components must be capitalized.](http://stackoverflow.com/questions/33259112/why-do-components-in-react-need-to-be-capitalized) This gotcha frustrated me for a bit.
 
### State Management
Redux is the dominant player for managing state in React web applications. Readers may have encountered other approaches for managing state, such as Flux or Reflux. However, Redux has won the battle for React state management.

#### Redux Reading
1. [Redux Official Documentation](http://redux.js.org/index.html) - Read 1-3 and 4.5. Its very good.
1. ALTERNATIVE - [Redux Videos](https://egghead.io/courses/getting-started-with-redux) - I don't like learning from videos, so I've never seen these. However, they appear to be highly recommended by others. Watch them if you prefer watching to reading.


### Modules
Modules provide you with the ability to encapsulate and reuse your code. Unlike almost any other programming language you've ever used, JavaScript does not provide a simple way to create isolated blocks of code in separate files and reuse them across your project.  

You need to make two choices when using modules in a JavaScript: which theoretical module system and which implementation of that system. As of August 2016, there are three main theoretical approaches to creating a JavaScript module system: CommonJS, AMD, and ES2015 Modules; and, there are three main implementations, all of which support all three methodologies: Browserify, Webpack, and JSPM (aka SystemJS).  [This site provides a good overview of the different theoretical module systems, the implementations, and their history.](https://auth0.com/blog/javascript-module-systems-showdown/)

I will be using ES2015 modules as they produce the simplest code. Additionally, ES2015 support comes for free since I will be using Babel for its React support. See [ES6 To ES5 Transpilation](#transpilation) for more information on why I will be using Babel. See [this explanation](http://www.2ality.com/2014/09/es6-modules-final.html) for more information on ES2015 modules.

I will use Webpack instead of JSPM because JSPM appears to be too immature at this point. See [this site](http://ilikekillnerds.com/2016/03/ditching-jspmsystem-js-webpack/) for one user's negative experience with JSPM. Please correct me if I am wrong in ignoring JSPM. It appears to be poised to overtake Webpack at some point in the future. I look forward to adopting it when it becomes sufficiently mature. 

I will use Webpack instead of Browserify because it provides a more cohesive solution. Browserify and Webpack provide roughly the same features when one considers both the tools and their ecosystems of plugins and loaders. However, Webpack does a better job of enabling the user to utilize those features in a concise, complete manner. Browserify applies the Unix philosophy of doing one thing well, modules for JavaScript, and requires the user to add many other tools to create a fully functioning web application. Since life is short and I want to focus on things other than my application's module and build systems, I will use Browserify. ([Note: I've made many unsupported assertions in this paragraph. This site supports those assertions.](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.pndg60bg2))

#### Webpack Reading
1.  [Webpack Documentation Intro](https://webpack.github.io/docs/usage.html)
1.  [Short Webpack Tutorial](https://webpack.github.io/docs/tutorials/getting-started/)
1.  [Thorough Webpack Tutorial](http://survivejs.com/webpack/introduction/) 

### ES6 To ES5 Transpilation <a name="transpilation"></a>
The only two players I can find in this space are Babel and Traceur. I will use Babel as it appears to have won in this space. Facebook now uses it as their [standard transpiler for React](https://facebook.github.io/react/docs/displaying-data.html) and as their standard method for [converting Flowtype code to regular Javascript](https://flowtype.org/docs/getting-started.html#_).  Additionally, of those that compared Traceur and Babel, the [difference appears to be negligible for features other than React and Flowtype support](http://ilikekillnerds.com/2015/01/transpiling-wars-6to5-vs-traceur/). 

### Why No Statically-Typed Language
The two major players in this field are FlowType and TypeScript. I consider both to be too immature to use at this point. Not all libraries have type definitions and writing definitions for other projects is a bad idea. Writing definitions for other projects will require developers to own not only their own code base but also part of other code bases. Since FlowType and TypeScript both lack better methods for mixing typed and untyped code than making intefaces with the Any type, I will be using the dynamically typed ES6 for now.

### Testing
You need to make multiple decisions for testing. 
1. Testing Framework - the tool that ["setups and describes test suites"](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/). 
1. Test Runner - the tool that runs your tests 
1. Assertion Library - the functions that test for validity conditions. While Node does include a default assert statement,  [Node's own documentation recommends using a different assertion library for testing your code.](https://nodejs.org/api/assert.html).
1. DOM Library - the tool that creates a fake browser with a DOM for testing UI components. 
1. Mocking Library - the tool that creates fake versions of dependencies. Often, testing one part of your code will require interacting with other parts of the program. Mocking enables you to create fake versions of the dependent objects to ensure that the tests occur with the program in exactly the correct state. 
1. React Tools - other libraries that provide React-specific tooling

You should note that these categories are not strict barriers. Some tools cover multiple groups. One such tool is Mocha, a test framework that has its own test runner but also can be run with the Karma test runner. 

I will use Mocha for my testing framework since it is [recommended in the Redux documentation](http://redux.js.org/docs/recipes/WritingTests.html). I will use Mocha's test runner since it is simpler to use that compared to adding another library. While I have looked at Karma, it doesn't have enough compelling features on top of Mocha's test runner to justify adding another library. I will use Chai for the assertion library, jsdom for the DOM library, Sinon for Mocking, and Enzyme for the React-specific testing tools. I don't have great justifications for these tools beyond the fact that they appear to be fairly popular choices for combining with Mocha. Additionally, choosing which testing tool matters much less than just having a working testing setup. Therefore, I will not labor over the testing choices more than is necessary to build a good web application.


### Linting
Linting programs enforce proper coding style. [There are many popular linting programs. However, there doesn't appear to be a great difference between the tools.](https://www.sitepoint.com/comparison-javascript-linting-tools/) The only important criteria is whether a tool ensures good coding style. I'm not too concerned with the debate between defaults and configuration. I chose ESlint with the babel plugin and Airbnb's React ESLint rules as they appear to give a sane set of defaults for React projects.

### NPM
I do not need to justify the choice of NPM at this time. NPM is obviously the current dominant package manager for the web. Additionally, the Webpack and Babel tutorials clearly demonstrate that Node is the top-level program of choice.

### Version Control
I do not need to justify the choice of Git at this time. Git is obviously the current dominant VCS.

## How I Created The Template
1. npm init . 
1. Install plugins for [creating starter HTML page](https://www.npmjs.com/package/html-webpack-plugin) and a [template HTML page](https://github.com/jaketrent/html-webpack-template). I need to have a starting HTML page that loads the js bundle created by Webpack. It's better to have this page generated as part of the build system rather than to have a special start HTML file that I manage myself.
1. Setup Webpack with Hello World example not from tutorial - https://webpack.github.io/docs/usage.html. Also, note to turn on source-map in devtool to have better error messages in the browser's console - http://cheng.logdown.com/posts/2016/03/25/679045 explains why I use that option, https://webpack.github.io/docs/configuration.html#devtool shows the setting. Also, I enable stats: 'errors-only' to quiet WebPack's output to only relevant errors in the build console.
   1. [This page](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload) states that the root component must not be a stateless, functional component in order for hot reloading to work. This was a frustrating issue during framework development. 
1. Setup NPM scripts for building with webpack and running webpack dev server - https://docs.npmjs.com/files/package.json
1. Follow Pro React's guide for setting up Babel compilation of ES6 and React components through Webpack. See section "Babel", subsections "Installation and configuration" and "Babel configuration file" of http://www.pro-react.com/materials/appendixA/.
    1. Unfortunately, I need to put Babel's config file, .babelrc, in project root. Look at "Lookup behavior" section of https://babeljs.io/docs/usage/babelrc/ for an explanation of the file location.
    1. I need both react and react-dom packages as React's components for interacting with the DOM have been refactored out of the core React package.
1. [Optional Step] Add the Babel ES6 polyfill to ensure full compatibility across the maximum number of browsers. You can turn this off by removing 'babel-polyfill' from each entry point. It makes the build significantly larger, increasing a basic hellow world bundle from 1.55 kB to 257 kB. See https://babeljs.io/docs/usage/polyfill/ for documentation on the polyfill.
1. Add the React Hot Loader so that when changes on made to the website during development, the server automatically replaces the React components. I followed a combination of https://webpack.github.io/docs/webpack-dev-server.html and http://gaearon.github.io/react-hot-loader/getstarted/ . I use the webpack-dev-server command with the --inline and --hot commands rather than the custom server.js file from gaearon's page as it accomplishes the same goal with less effort. 
1. Adding in redux, react-redux for connections with react, redux-logger for logging states. Also, adding in react-router for handling routes and react-redux-router for connecting react-router to redux's state. Finally, adding redux-devtools for tools for debugging redux. I'm using these as they provide necessary functionality for a real site and are the libraries used in the standard Redux examples https://github.com/reactjs/redux/blob/master/examples/real-world/package.json . 
1. Adding in redux-thunk for handling async actions such as loading data over the network. I'm doing this as it is the recommend library from redux's documentation http://redux.js.org/docs/advanced/AsyncActions.html .
1. Install ESLint with Airbnb's ES6 and React defaults using https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb. I put the .eslintrc file in the config folder. I also added eslint-loader. This guide was also helpful https://medium.com/@tkssharma/eslint-in-react-babel-webpack-9cb1c4e86f4e#.gi9pd33wt.
    1. If using WebStorm's ESLint tool, add --ignore-pattern config/* to the Extra eslint options to ignore the configuration files.
    1. I added the following custom ESLint configurations to config/.eslintrc
        1. Since I will end all files with .js, I switched the React in only .jsx files rule to an only .js files one - see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md 
        1. I turned on the Mocha and Browser environments so that ESLint doesn't reject valid global variables that aren't defined in my code - see http://eslint.org/docs/user-guide/configuring#specifying-environments 

https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/