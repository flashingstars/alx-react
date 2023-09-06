17. We now know how to connect a simple component to a reducer. Let’s work on connecting a more complex component to the the entire API.

Add the following three action creators to notificationActionCreators.js

	- setLoadingState whose parameter is a boolean. It will send the SET_LOADING_STATE action and the boolean.
	- setNotifications whose parameter is an array. It will send the FETCH_NOTIFICATIONS_SUCCESS action with the data.
	- fetchNotifications (which does not have a parameter). Calling it will dispatch setLoadingState with the boolean set to true
		- It fetches /notifications.json
		- Once the fetch is realized, it will dispatch setNotifications with the data
		- At the end of the query it sets the loading state to false again

18. In the function notificationReducer within notificationReducer.js:

	- Make sure to add a loading attribute to the initial state.
	- Modify the notifications object to have the right initial state when merging the data coming from the API
	- Create a SET_LOADING_STATE case and update the state accordingly
	- Modify the FETCH_NOTIFICATIONS_SUCCESS case to perform a mergeDeep with the data

19. In the Notifications.js component:

	- Map the prop listNotifications to the messages within the notifications state
	- Map the action fetchNotifications to the component
	- In componentDidMount, call fetchNotifications

20. With this new behavior, let’s clean up old functions and test data

	- Delete NotificationItemShape.js
	- Remove the notification list and delete markNotificationAsRead within App.js

21. Modify the test suites to pass the tests:

	- Update notificationReducer.test.js to support the new attributes and default state
	- Clean up App.test.js for the function you just removed
	- Modify Notifications.js and Notifications.test.js to make sure that every tests pass correctly

Add new tests:

	- Add a test in Notifications.test.js to verify that the function fetchNotifications is called when the component is mounted
	- Add a test for setLoadingState, setNotifications, and fetchNotifications to verify that they each create the right actions
	- Add a test for SET_LOADING_STATE to verify that it updates the reducer correctly

Tips:

	- At this point, when you load the page, you should be able to see the list of notifications coming from the API using the developer tools or when clicking on the notifications toggle
	- Use some CSS to make the notifications panel readable
	- Look at valueSeq from Immutable to iterate on your list of notifications without having to use toJS()

Requirements:

	- Make sure to update the different Proptypes so you don’t have any errors in the console
	- Make sure to create the new actions that the action creators are using
