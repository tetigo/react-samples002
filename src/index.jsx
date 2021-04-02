import React from 'react'
import ReactDOM from 'react-dom'

// JSX Rules
// return single element
//  div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting
function Greeting() {
  return (
    <div>
      <h2>John Doe</h2>
      <p>This is the message</p>
    </div>
  )
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('p', {}, 'testando'),
//   )
// }

ReactDOM.render(<Greeting />, document.getElementById('root'))
