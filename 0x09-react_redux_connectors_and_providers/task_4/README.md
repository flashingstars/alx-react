14. Since you have more than one reducer for your application, you will need to combine them into the store.

Create a new file reducers/rootReducer.js, in this file, export a rootReducer:

	- the root should contain every reducer
	- courses maps to courseReducer
	- notifications maps to notificationReducer
	- ui maps to uiReducer

15. In the index.js, create the store using the root reducer instead of only the ui reducer:

	- Any component connected to the state will probably need to be updated since you added a nested level

16. Modify the test suites:

	- In the App.test.js, modify mapStateToProps to correctly work with the new format of the reducer
	- Create a rootReducer.test.js file to test the root reducer’s initial state for the following structure:
```
{
  courses: Map {},
  notifications: Map {},
  ui: Map {}
}
```

Requirements:

	- No errors in the browser’s console
	- All tests should pass
	- Use combineReducer to create the root reducer
