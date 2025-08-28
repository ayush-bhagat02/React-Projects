import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherUser = "{alone coder}"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  // <App />
  reactElement
)
