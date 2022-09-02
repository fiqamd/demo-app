import React from 'react'

import firsticon from '../assets/gamer.png'

export default function personName(props) {
  return (
    <div className='m-3 bg-white p-3 drop-shadow-md text-black h-[80px] w-[300px] rounded-xl'>
    
        <div className='flex items-center'>
            <img src={firsticon} alt="icon" className='h-[60px]' />
            <ul className='px-3 '>
                <li>
                    <h3 className='font-MontReg font-bold text-xl'>
                        {props.name}
                    </h3>
                </li>
                <li>
                    <h6 className='font-MontReg'>
                        {props.note}
                    </h6>
                </li>
            </ul>
        </div>
        
    </div>
  )
}
