import React from "react";
import "./Navbar.css";
import TotalSession from "./TotalSession";
import Input from "./Input";


function NavBar() {

  const getData = () =>{
    console.log("hiiii")
  }
  return (
    <div>
      <div className="w-96 h-16 navbar  mt-12 flex flex-row gap-2 ">
        <div className="w-full h-full flex flex-col gap-4 ml-1 justify-center">
          <img src="vect3.png" className="h-10 w-10 ml-2" alt="" onClick={getData}/>
        </div>
        <img src="Group 18436.png" className="mr-10" alt="apply" />
      </div>
      <div className="w-full flex space-x-32 mt-8 ml-2">
        <img src="Leads Analytics.png" className="w-48" alt="" />
        <img src="vectorr.png" alt="" />
      </div>
      <TotalSession/>
      <div className="w-96 mt-12">
      <img src="allLead.png" className="ml-4" alt=""/>
      </div>
      <Input/>
      
    </div>
  );
}

export default NavBar;
