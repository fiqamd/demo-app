import React from 'react'

export default function LeftButton(props) {
  return (
    <button className='bg-white my-3 mx-5 px-9 py-3 text-[#993090] shadow-2xl font-MontReg font-bold rounded-lg hover:bg-[#993090] hover:text-white hover:font-normal'>
        {props.togglename}
    </button> 
    )
}
