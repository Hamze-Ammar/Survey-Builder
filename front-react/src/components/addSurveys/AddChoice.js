import React from 'react'

export default function AddChoice() {
  return (
    <div>
        <label htmlFor="">choice 1: </label>
        <input className='normal-size' type="text" placeholder='choice1' /> <br />
        <label htmlFor="">choice 2: </label>
        <input className='normal-size' type="text" placeholder='choice2' /> <br />
        <label htmlFor="">choice 3: </label>
        <input className='normal-size' type="text" placeholder='choice3' /> <br />
    </div>
  )
}
