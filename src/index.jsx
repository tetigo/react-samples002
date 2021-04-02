import React from 'react'
import ReactDOM from 'react-dom'

export const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg"
      alt="livro do mil ao milhão"
      width="150px"
    />
  )
}
const Author = () => <h2>Thiago Nigro</h2>
const Title = () => (
  <h3>
    Do Mil ao Milhão.
    <br /> Sem Cortar o Cafezinho.
  </h3>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
