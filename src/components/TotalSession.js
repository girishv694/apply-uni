import React from 'react'
import "./Navbar.css"

function TotalSession() {
  return (
    <div className="w-96 flex justify-center">
    <div className=' total total_session h-28  rounded-lg mt-4 pl-10 pr-10'>
    <div className='w-full flex flex-row gap-4'>
    <div className='mt-4'>
    <p className='text-4xl count'>144</p>
    <p className='text-white'>Total Session</p>
    </div>
    <div className='flex flex-col gap-4 mt-4'>
    <p className='text-white '>Uncontacted</p>
    <p className='text-white'>23</p>
    </div>
    <div className='flex flex-col gap-4 mt-4'>
    <p className='text-white'>Contacted</p>
    <p className='text-white'>26</p>
    </div>
    </div>
    </div><br/>
    
    </div>
  )
}

export default TotalSession