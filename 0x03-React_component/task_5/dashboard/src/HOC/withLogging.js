import React, { Component } from 'react';

const WithLogging = ({ WrappedComponent}) => {
    const getDisplayName = (WrapperComponent) => WrappedComponent.dispalyName || WrappedComponent.name || "component";

    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

    return class extends Component {
        componentDidMount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    };
};

export default WithLogging;