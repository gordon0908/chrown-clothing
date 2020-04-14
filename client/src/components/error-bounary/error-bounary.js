import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // console.log(props, state)
        return { hasError: true }
    }
    componentDidCatch(error) {
        console.log(error);
    }
    render() {
        // console.log(this.state.hasError)
        if (this.state.hasError) return <div className="error">Your page has error</div>

        return this.props.children;
    }
}