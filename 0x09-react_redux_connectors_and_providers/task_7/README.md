23. In selectors/courseSelector.js, create a selector that will:

	- Get all the course entities from within the reducer
	- Return a List using valueSeq from Immutable

Write a new file courseSelector.test.js, that will verify that the selector is working correctly

24. In actions/courseActionCreators.js:

	- Create a new function named fetchCourses, that will query the API in courses.json (provided in the project description, put it in your dist folder)
	- When the API returns the data, dispatch the action setCourses
In courseActionCreators.test.js, create a test to verify that the fetch is working correctly

25. In CourseList.js, connect the component to:

	- The three action creators: fetchCourses, selectCourse, and unSelectCourse
	- Connect the data to the list of courses using getListCourses selector
	- When the component mount, call the action fetchCourses

Create a new function onChangeRow:

	- It will take two arguments: id (string), checked (boolean)
	- When checked is true, call the action selectCourse with the id
	- When checked is false, call the action unSelectCourse with the id

Modify CourseListRow:

	- Pass a new prop, isChecked, to the component that will pass the isSelected attribute coming from the state of the reducer
	- Pass the onChangeRow function to the component
	- Modify the component to not use its local state anymore

In the file CourseList.test.js, create two new tests:

	- Verify that the action is dispatched when the component is mounted
	- Verify that the two actions are correctly dispatched when the onChangeRow function is called

Tips:

	- At this point, when you load the page and you log in, you should be able to see the list of courses. Make sure that everything is working correctly using the developer tools or using the Redux tool
	- When checking or unchecking a row, you should see the state in the Redux tool updated. You should also see the change on the UI
	- Be careful that the API is sending Strings instead of Number for the IDs. You will probably need to adapt your reducers and tests
	- Delete the CourseShape file now

Requirements:

	- Make sure to update the tests to work as expected
