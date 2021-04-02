import React from 'react'
import ReactDOM from 'react-dom'

// JSX Rules
// return single element
//  div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting
// function Greeting() {
//   return (
//     <div>
//       <h2>John Doe</h2>
//       <p>This is the message</p>
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('p', {}, 'testando'),
//   )
// }

//Nested Components, React Tools

export const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

export const Person = () => {
  return <h3>John Doe</h3>
}

export const Message = () => {
  return <p>This is the Message</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
