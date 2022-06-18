import React from 'react'

export default function Survey(props) {
  return (
    <div className='Survey-box'>
        <h3>{props.title}</h3>
        <p>{props.num_of_questions} questions</p>
    </div>
  )
}
