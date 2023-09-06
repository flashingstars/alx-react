# Questions for this folder
0. Reuse the latest dashboard project you worked on in the React course 0x09-React_Redux_reducer and install react-redux

Within the App/App.js file:

	- Create a function named mapStateToProps. This should connect the uiReducer you created and the property isLoggedIn that your component is already using
	- Import connect from Redux, and connect the mapStateToProps to the component

1. In the index.js file:

	- Create a store using createStore from Redux that would contain the uiReducer state
	- Implement a provider passing the store that you created to the main App

2. Export the mapStateToProps function you created if you haven’t already, and in the App.test.js file:

	- Create a new suite to test the function
	- Create a test that verify that the function returns the right object when passing the

```JavaScript
let state = fromJS({
  isUserLoggedIn: true
});
```
Should return { isLoggedIn: true }

Tips:

	- At this point your app is not functional but you should be able to load the page without crashing
	- Remember that the state of uiReducer is using Map from Immutable

Requirements:

	- No error should be displayed within the console
	- All the tests in the project should pass
