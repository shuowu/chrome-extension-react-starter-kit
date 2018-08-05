import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const main = () => {
  // Add main tag into dom
  const el = document.createElement('div')
  el.setAttribute('id', 'chrome-extension-starter-kit')
  document.body.appendChild(el)

  ReactDOM.render(<App />, el)
}

main()
