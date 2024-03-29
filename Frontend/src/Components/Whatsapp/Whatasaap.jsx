import React from 'react'
import icon from './icon.png'
import './whatsapp.css'
const Whatasaap = () => {
  return (
    <div className='whatsapp'>
      <div>
        <a href="https://api.whatsapp.com/send?phone=844716867"><img src={icon} width={50} alt="" /></a>
      </div>
    </div>
  )
}

export default Whatasaap
