import React from 'react'
import LeftButton from './LeftButton'
import PersonName from './PersonName'
import SimpleBar from 'simplebar-react'

import 'simplebar-react/dist/simplebar.min.css'



export default function LeftPage() {
  return (
    //<SimpleBar style={{ maxHeight: 880 }}>
      <div className='bg-[#EBEBEB] mr-10 drop-shadow-lg'>
          <div className='bg-[#993090]'>
              <div className='flex justify-center'>
                  <LeftButton togglename="People" />
                  <LeftButton togglename="Group" />
              </div>
          </div>
          <SimpleBar style={{ maxHeight: 800}}>
            <div className='flex flex-col items-center'>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
                <PersonName name="Taufiq Ahmadi" note="Unkown"/>
            </div>
          </SimpleBar>
      </div>
    // </SimpleBar>
  )
}
