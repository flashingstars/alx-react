26. Our current selectors are useful but they are not really performant. Imagine a very long list of notifications with multiple filters on the type and on the read status. This would require a lot of resources to compute. Memoized selectors are very powerful in this sense.

Install Redux Reselect and create a new selector named getUnreadNotificationsByType in notificationSelector.js:

	- This selector should combine the state of the filter, and the list of notifications
	- When the filter is set to default, it should return all the unread notifications
	- When the filter is set to urgent, it should return all the unread and urgent notifications
	- Delete getUnreadNotifications

27. In the Notifications component:

	- Update the component to use the new selector you just created
	- Map the component to the Action setNotificationFilter
	- Add two buttons under the text Here is the list of notifications. The first one contains ‼️. On click, it set the filters of notifications to URGENT. The second one contains 💠. On click, it sets the filter of notifications to DEFAULT

28. In Notifications.test.js, add two new tests:

	- Clicking on the first button should call setNotificationFilter with URGENT
	- Clicking on the second button should call setNotificationFilter with DEFAULT

In notificationSelector.test.js:

	- Update the previous tests to work correctly
	- Create a new test to verify that the selector returns unread urgent notifications when the filter is set

Tips:

	- At this point, you should be able to load the notifications panel, filter the list using the two new buttons, and mark items as read

Requirements:

	- Make sure to update the tests to work as expected
