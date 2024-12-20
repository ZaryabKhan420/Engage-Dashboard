// components/ErrorBoundary.js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Check if the error is a hydration mismatch (or any other error you want to suppress)
    if (error && error.message && error.message.includes("Hydration")) {
      return { hasError: true }; // Mark the error as handled
    }
    return null;
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return null; // Hide the hydration error, you can return any fallback UI here.
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
