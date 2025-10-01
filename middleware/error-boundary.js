// middleware/error-boundary.js
export default function ({ error, redirect, route }) {
  try {
    // Add any route-specific error handling here
    if (process.client && route.path) {
      console.log('Navigating to:', route.path)
    }
  } catch (err) {
    console.error('Middleware error:', err)
    // Don't crash the app on middleware errors
  }
}