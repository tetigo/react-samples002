import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  const author = 'Thiago Nigro'
  const title = 'Do Mil ao Milhão. Sem Cortar o Cafezinho.'
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg"
        alt="livro do mil ao milhão"
        width="150px"
      />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
