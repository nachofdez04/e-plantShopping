// Import React library
import React from 'react'
// Import ReactDOM for rendering the app
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import global CSS styles
import './index.css'
// Import Provider component from react-redux
// Provider allows all components in the app to access the Redux store
import { Provider } from 'react-redux'
// Import the Redux store from store.js
// This store contains the application state using the reducer defined in CartSlice.jsx
import store from './store.js'

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with Provider */}
    {/* Pass the Redux store as a prop to Provider */}
    {/* This allows all components in the application to access and interact with the global state managed by Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)