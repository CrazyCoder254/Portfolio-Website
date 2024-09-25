import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-t-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
            <Image
            src="/images/logo.png" 
            alt="GitHub Icon" 
            width={150} 
            height={150} 
            style={{ 
              display: 'block', 
              margin: '0 auto', 
              filter: 'brightness(2)',  
              padding: '5px',           
              borderRadius: '8px'       
            }} 
          /></span>
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer