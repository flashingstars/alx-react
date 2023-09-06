3. In the App.js file:

	- Update the mapStateToProps function to also pass to the component the value for displayDrawer. It should be connected to the Reducer attribute isNotificationDrawerVisible
	- Update the render function of the component to use the value displayDrawer coming from the props instead of the state

4. In the App.js file:

	- Connect to the component the actions creators displayNotificationDrawer and hideNotificationDrawer
	- You should use the simplified version for the mapDispatchToProps. No need to import bindActionCreators
	- Modify the render function of the component to use the functions passed within the props instead of the action within the Class component

5. In the App.js file:

	- You can delete the old function handleDisplayDrawer
	- You can delete the old function handleHideDrawer
	- Remove any state property related to the display of the drawer
	- Remove any binding in the constructor
	- You are now passing to your components props. You need to define propTypes and defaultProps

6. You can now refactor the App.test.js file:

	- You don’t need to test the functions handleDisplayDrawer and handleHideDrawer since everything is already tested using the Redux mechanism
	- You need to update the test you previously created to support the new attribute

Tips:

	- At this point your app should be functional and able to display/hide the drawer using the Redux state
	- Remember that the state of uiReducer is using Map from Immutable

