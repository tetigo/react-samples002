import React from 'react'

const Book = ({ img, title, author }) => {
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

export default Book
