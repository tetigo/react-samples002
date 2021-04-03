import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const firstBook = {
  author: 'Thiago Nigro',
  title: 'Do Mil ao Milhão. Sem Cortar o Cafezinho.',
  img:
    'https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg',
}
const secondBook = {
  author: 'Arthur Conan Doyle',
  title: 'Sherlock Holmes: The Complete Collection (English Edition)',
  img: 'https://m.media-amazon.com/images/I/41zuLOCSbCL.jpg',
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="livro do mil ao milhão" width="150px" />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </article>
  )
}

export const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book {...secondBook} />
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
