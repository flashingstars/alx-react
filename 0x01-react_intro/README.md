# REACT INTRO

## This folder has answers to questions covering the following topics

- How to create basic Javascript application using React
- How to use the package _create-react-app_ to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme's Shadow rendering to test your application
- How to use React with Webpack & Babel

## Here are the questions

0. __Create a basic app named__ _dashboard_ __using__ _create-react-app_ __in your__ _task\_0_ __directory__

You will need a favicon and the Holberton logo. Download them and add them to the _src/_ directory under _dashboard/_

__Remove the unused files__

	- service-worker
	- index.css
	- App.test.js
__in__ _task\_0/dashboard/src/App.js_, __create a function__ _App_ __that returns:__

	- a header div with a class named _App-header_ containing the Holberton logo and a h1 with the text _School dashboard_
	- a body div with a class named _App-body_ containing at least one paragraph with the text _Login to access the full dashboard_
	- a footer div with a class named _App-footer_ containing at least one paragraph with the text _Copyright 2020 - holberton School_

__Requirements:__

- When running, there should not be any lint error in the console

1. Basic Application

2. __Using your code from the previous task, in__ _task\_1/dashboard/src/utils.js:_

	- Create a function named getFullYear that will return the current year
	- Create a function named getFooterCopy:
		- It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
	- Modify the footer returned in task_1/dashboard/src/App.js to use these two functions

__in__ _task\_1/dashboard/src/Notifications.js_, __create a Notifications element:__

	- It should import React
	- It should export a function
	- The function should return a div with the class Notifications
	- The div should contain a paragraph with the text Here is the list of notifications
	- import the file Notifications.css.

__in__ _task\_1/dashboard/src/Notifications.css__, __style the Notifications class:__

Add a border and some padding around the div
Render the Notifications element:

Modify task_1/dashboard/src/index.js to render the new element (Notifications) in a div named root-notifications
Check that you can see the two elements on the browser, and using the React browser extension
Requirements:

When running, there should not be any lint error in the console