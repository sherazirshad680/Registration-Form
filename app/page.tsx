"use client"

import { use } from 'react'
// import Image from 'next/image'
import styles from './page.module.css'
// import { text } from 'stream/consumers'

export default function Home() {
  return (
    <div style={{ textAlign: "center", background: 'aqua', }}>
      <h1 style={{ color: "red", textAlign: "center" }}>Registeration Form</h1>
      <br /><br />
      <div style={{ display: "flex", gap: "20px", justifyContent: 'center' }}>
        <div>
          First Name  <input style={{ height: '30px' }} type="text" placeholder='Enter Your First Name' />
        </div>
        <div>
          Last Name < input style={{ height: '30px' }} type="text" placeholder='Enter Your Last Name' />
        </div >
      </div >
      <br /><br />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <p>Enter Your Email</p> <input style={{ width: '27%', height: '30px' }} type="text" placeholder='Enter Your Email' />
      </div>
      <br />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <p>Enter Your Password</p> <input style={{ width: '25%', height: '30px' }} type="text" placeholder='Enter Your Password' />
      </div>
      <br />

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <p>Confirm Your Password</p> <input style={{ width: '24%', height: '30px' }} type="text" placeholder='Confirm Your Password' />
      </div>      <br />

      Gender:
      Male < input type="radio" />
      Female < input type="radio" />
      <br /><br />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input type="checkbox" /> I agree terms and conditions
        < br /><br />
        <input type="checkbox" /> I want to receive the newsletter
        < br /><br />
      </div>
      <br /><br />
      <button style={{ width: '30%', height: '35px', background: 'yellow' }}>Register Now</button>
    </div >
  )
}