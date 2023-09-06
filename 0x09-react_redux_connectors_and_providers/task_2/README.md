7. Let’s implement the LoginRequest / logout actions creators accross the entire application. LoginRequest is calling an API and is Async. Therefore, Redux will not support it. We will need to use a middleware

Install redux-thunk within your project. And in the index.js file, apply the middleware to your store

8. Modify the file App/App.js:

	- Connect the action creator loginRequest and map it to the login prop
	- Modify the component to use the new login function from the props instead of the one within the class
	- Refactor the component to remove any login or logout function and bind

9. Modify the file Footer/Footer.js

	- Create a mapStateToProps function
	- Map the user props to the user within the Redux state
	- Connect the Footer component to the function you created
	- Modify the render function and remove any use of the Context. Instead use the user prop

10. Modify the file Header/Header.js

	- Create a mapStateToProps function
	- Map the user props to the user within the Redux state
	- Connect the Header component to the function you created
	- Connect the Header component to the logout action creator
	- Modify the render function and remove any use of the Context. Instead use the user prop. When the user clicks on the link, it should now dispatch the logout action creator

11. Now that we can have the entire login request and the entire feedback loop, let’s modify a few things within the reducer:

	- When the action LOGIN is passed, set the user within the state to the one passed within the action
	- When the LOGOUT action is passed, make sure to set the user to null

12. Modify the test suites of the different components you modified:

	- In the App.test.js, Footer.test.js, and Header.test.js to import the Stateless components instead of the connected component
	- Remove any use of the mount function, and convert everything to use the shallow function
	- You should remove any use of setState within the tests and pass directly the props to the stateless components
	- Remove any test linked to the login, logout function within App, and Header
	- Add a test in uiReducer to support the new action you just created

Tips:

	- At this point your app should be functional and able to display/hide the drawer, login/logout using the Redux state
	- Remember that the state of uiReducer is using Map from Immutable
	- You can now see that your components logic is simplified. They only respond to props change. The logic is happening within the action creators

Requirements:

	- Do not forget to add defaultProps and PropTypes to any component receiving props
	- No error should be displayed within the console
	- All the tests in the project should pass
