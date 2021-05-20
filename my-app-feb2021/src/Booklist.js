import React from 'react'
import Book from './Book'
import { data } from './data'

// Booklist component
const Booklist = () => {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book} />
        // return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

export default Booklist
