# "Cypress.io" e2e tests with java script
* This project is an example of how to setup and write Cypress.io tests for web application

## Project Description:
* Project setup with Cypress.io and windows 10
* Makes use of Page Objects and json files for testdata management 
* Written in Java script

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* `npm install` to install the project dependencies

## Run tests:
* `cypress open` in project root to start the cypress server
* and select the spec file to run the spec

## Setting up Angularjs and Node app for recording cypress test
* Navigate to https://github.com/narottamgla/protractor-demo-site and clone the repositary in local system
* Navigate to demoapp folder and open index.html
* Make sure below Jquery added to index.html
```javascript
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://www.cemexgo.com/cdn/cypress/cypressRecorder.js"></script>
```
* Navigate to project root and  run ”npm install” from CMD
* Now run “node server.js” command from CMD
* Angular app should started on 3000 port and http://localhost:3000 should show application home page
## Recording test for Angularjs app using Cypress
* Open “http://localhost:3000” and Press F12
* Now open console
* startRecording(), playRecording(), cleanRecording() functions should be visible in application console
* Now run “startRecording()” in browser console
* Navigate to all the navigation menus of protractor demo site started on localhost:3000
* Now run “playRecording()” in browser console
* Cypress test script will be generated in browser console
## Run Recorded tests with cypress
* Navigate to integration Test folder and create recordedSpec.js file
* Copy test step generated in browser console and save file
* Clicking recordedSpec file in cypress console should run spec and messages will be printed in cypress console
