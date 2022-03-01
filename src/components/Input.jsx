import React from 'react'
import {useState} from 'react'
import "./Navbar.css"

function Input() {
    const[searchTerm,setSearchTerm] =useState("")
  return (
    <div>
    <div className='flex flex-row gap-2 mt-4'>
    <div className="h-12 w-80 ml-2  rounded-xl bgg flex ..." >
                      <img src="Search.png" alt="searchicon" className="pt-4 pl-4 pb-4"/>
                      <input placeholder="Search..." type="text" onChange={event => {setSearchTerm(event.target.value)}} className="ml-2  text-white text-sm bgg outline-none"/>
                  </div>
               <div>
               <img src="vectorr.png" alt=""/>
               </div> 
               
    </div>
    <div className='w-96 flex ml-56 text-white'>Found 25 results</div>
    </div>
  )
}

export default Input