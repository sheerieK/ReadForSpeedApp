import React from 'react'
import {Link} from 'react-router-dom'
import profile from './profile.png'
import ProfilePage from './ProfilePage'
import { Dialog } from '@mui/material'
import { useState } from 'react'

function Header({profileSection, setProfileSection}) {
 
  return (
    // <div className='bg-black'>

 <header className='bg-slate-900 text-slate-50  py-3 fixed top-0 left-0 right-0 text-2xl  min-w-full h-18'>
  <div className='flex justify-between'>
  <Link to="/Home">📚Read for speed</Link>
  <div className='flex px-5 justify-between'>
  <button>ContactUs</button>
  <Link to="/Instructions" className='ml-6'>Instructions📖</Link>
  
    <button 
    onClick={()=>{
      console.log("I am clicked");
      setProfileSection(<ProfilePage/>)
    }}
     
    >
   <img className="ml-4 p-1 w-10 h-10 border-2 rounded-full" src={profile}/>
    </button>
   
  </div>
  </div>
 </header>

   
  )
}
export default Header;