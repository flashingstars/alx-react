import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  const styles = StyleSheet.create({
    table: {
      border: '1px solid',
      width: '100%',
    },
    body: {
      textAlign: 'center',
      border: '1px solid',
    }
  });
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody className={css(styles.body)}>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;