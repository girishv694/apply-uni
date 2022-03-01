import React from "react";
import {useState} from 'react'
import "./Navbar.css";
import data from './data.json'

function Users() {
  const [users, setUsers] = useState(data.slice(0,30));
  return (
    <div className="w-96 user flex flex-col gap-2 justify-center relative">

   
      <div className=" ex1 w-96 h-full justify-center flex flex-col gap-4 mt-4 pt-80 pb-28  overflow-auto  relative">
        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3 w-4 h-4" alt="" />
            <div className="flex gap-28 ml-2">
              <div className="ml-2">
              
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
        <div className="flex flex-row gap-10 ">
          <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
          <div className="flex gap-28 ml-2">
            <div className="ml-2">
              <p className="text-white text-2xl mt-4 ">Lokesh</p>
              <p className="text-white mb-2">Contacted</p>
            </div>
            <div>
              <img src="vect4.png" className="mt-10" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
      <div className="flex flex-row gap-10 ">
        <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
        <div className="flex gap-28 ml-2">
          <div className="ml-2">
            <p className="text-white text-2xl mt-4 ">Lokesh</p>
            <p className="text-white mb-2">Contacted</p>
          </div>
          <div>
            <img src="vect4.png" className="mt-10" alt="" />
          </div>
        </div>
      </div>
    </div>


    <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28 ml-2">
        <div className="ml-2">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28 ml-2">
        <div className="ml-2">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28 ml-2">
        <div className="ml-2">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28 ml-2">
        <div className="ml-2">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>


  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28 ml-2">
        <div className="ml-2">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>


  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28">
        <div className="">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2 ">
    <div className="flex flex-row gap-10 ">
      <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
      <div className="flex gap-28">
        <div className="">
          <p className="text-white text-2xl mt-4 ">Lokesh</p>
          <p className="text-white mb-2">Contacted</p>
        </div>
        <div>
          <img src="vect4.png" className="mt-10" alt="" />
        </div>
      </div>
    </div>
  </div>


      
      </div>
    </div>
  );
}

export default Users;
