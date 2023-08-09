import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  render() {
    const styles = StyleSheet.create({
      BodySectionWithMargin: {
        marginBottom: '40px',
      },
    });
    return (
      <div className={css(styles.BodySectionWithMarginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;