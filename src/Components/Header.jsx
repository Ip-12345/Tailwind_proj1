import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center justify-center gap-3'>
                <img src="./assets/Logo.svg" alt="logo" />
                <button className='bg-gradient-to-l from-orange-300 to-red-300 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Picky is hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-500 gap-6'>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Find Domain</a></li>
                <li><a href='#'>Why Hosterr</a></li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a className='text-gray-500' href='#'>Sign In</a>
                <button className='rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars />
            </div>
        </div>
    )
}

export default Header;