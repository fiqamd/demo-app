import React from 'react'

import{
    UserIcon 
}from '@heroicons/react/solid';

export default function Navbar() {
  return (
    <div className='w-auto h-auto'>
        <div className='my-7'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-MontReg font-bold mx-8 md:text-3xl text-[#993090]'>
                        CHAT WEB APP
                    </h1>
                </div>
                
                <div className='flex mr-12 text-[#993090] text-bold items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                    <h1 className='font-MontReg font-bold ml-2 mr-8 md:text-3xl text-[#993090]'>
                        Username 1
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
    
    </div>
    </div>
    
  )
}
