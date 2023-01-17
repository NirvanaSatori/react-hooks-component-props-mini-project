import React from 'react'

function Article({title, date, preview}) {
  return (
    <article key={title} >
        <h3>{title}</h3>
        <small placeholder= "January 1, 1970">{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article
