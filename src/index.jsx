import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { data } from './books'
import SpecificBook from './Book'

export const BookList = () => {
  return (
    <section className="booklist">
      {data.map((book) => (
        <SpecificBook {...book} key={book.id} />
      ))}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
