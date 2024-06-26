import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-500'>
        <li>
          <a href='#'>LinkedIn</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>GitHub</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src='./assets/Help-Avatar.svg' alt='help'/>
        <div>
          <p className='font-playfair font-thin'>Have any Questions?</p>
          <a className='font-lato font-medium' href='#'>Talk to an expert</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;