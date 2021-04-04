import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    author: 'Thiago Nigro',
    title: 'Do Mil ao Milhão. Sem Cortar o Cafezinho.',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    author: 'Arthur Conan Doyle',
    title: 'Sherlock Holmes: The Complete Collection (English Edition)',
    img: 'https://m.media-amazon.com/images/I/41zuLOCSbCL.jpg',
  },
  {
    id: 3,
    author: 'J.R.R. Tolkien',
    title: 'O Hobbit + pôster (Português) Capa dura – 15 julho 2019',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/5115VsJpk3L._SX319_BO1,204,203,200_.jpg',
  },
]

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props

  const getAuthor = (author) => {
    console.log(author)
  }

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt="livro do mil ao milhão" width="150px" />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button onClick={() => console.log(title)}>reference example</button>
      <button onClick={() => getAuthor(author)}>more complex example</button>
    </article>
  )
}
export const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
