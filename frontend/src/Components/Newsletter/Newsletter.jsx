import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Need Expert Seed Advice?</h2>
        <p>Please fill this form to get personalised recommendation</p>
        <div>
        <a href="http://127.0.0.1:5000/" target="_blank" rel="noopener noreferrer">
      <button>Fill form</button>
    </a>
    <a href="http://127.0.0.1:5001/" target="_blank" rel="noopener noreferrer">
      <button>Chat now</button>
    </a>
        </div>
    </div>
  )
}
