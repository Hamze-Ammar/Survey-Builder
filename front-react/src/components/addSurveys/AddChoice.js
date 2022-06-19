import React from 'react'

export default function AddChoice() {
  return (
    <div>
        <label htmlFor="">Choice 1: </label>
        <input className='normal-size' style={{'backgroundColor':'white'}} type="text" placeholder='Choice1' /> <br />
        <label htmlFor="">Choice 2: </label>
        <input className='normal-size' style={{'backgroundColor':'white'}} type="text" placeholder='Choice2' /> <br />
        <label htmlFor="">Choice 3: </label>
        <input className='normal-size' style={{'backgroundColor':'white'}} type="text" placeholder='Choice3' /> <br />
    </div>
  )
}
