import React from 'react'

export default function AddChoiceDuo() {
  return (
    <div>
        <br />
        <label htmlFor="">min: </label>
        <input className='normal-size normal-height' type="number" placeholder='min'  />
        <label htmlFor=""> max: </label>
        <input className='normal-size normal-height' type="number" placeholder='max'  />
    </div>
  )
}