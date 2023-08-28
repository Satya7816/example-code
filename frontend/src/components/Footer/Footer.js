import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-section footer-section1'>
          <img src="https://o.remove.bg/downloads/43805e76-0764-4e85-af45-6c58f4b1aeec/download-removebg-preview.png" alt='Small Pic' className='footer-image' 
 />
        </div>
        <div className='footer-section footer-section2'>
          <center>
          {new Date().getFullYear()} &copy; Copyright Raj Reddy Center For Tecnology And Society All Rights Reserved </center>
        </div>
      </div>
    </div>
  )
}