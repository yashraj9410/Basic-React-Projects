import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we can create our own element in the form i which the react bnundler convert a html syntax
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:"_blank"},
  'Visit Google here'
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  reactElement       // in this way we can also render a element and also any function that returns Html 
)
