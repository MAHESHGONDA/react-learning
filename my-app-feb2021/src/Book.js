//book component
import React from 'react'

const Book = (props) => {
  const onTitleClick = (title) => {
    alert(title)
  }
  console.log(props)
  //object destructuring
  const { img, imgAlt, title, authorName } = props
  return (
    <article className='book'>
      <img src={img} alt={imgAlt} />
      <h1 onClick={() => onTitleClick(title)}>{title}</h1>
      <h4>{authorName}</h4>
      <button onClick={() => onTitleClick('more')}>More</button>
    </article>
  )
}

export default Book
