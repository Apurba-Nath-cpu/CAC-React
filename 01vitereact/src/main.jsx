import {createRoot} from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const MyReactElement = {
  type: 'a',
  children: 'Click me to visit google',
  props: {
      href: 'https://google.com',
      target: '_blank',
  }
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = 'chai aur React'

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to visit google',
  anotherUser // evaluated expressions only
)

createRoot(document.getElementById('root')).render(
    // <MyApp/>
    // or
    // MyApp()

    // MyReactElement
    // does not work

    // anotherElement

    ReactElement
    // <App/>
)
