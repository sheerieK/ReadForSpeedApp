import React from 'react'
import  {Dialog} from '@mui/material'
import {Link} from 'react-router-dom'
import profile from './profile.png'
import { useState } from 'react'


function ProfilePage({isOpen,setIsOpen}) {
//     //static data to use in profile layout 
 let Name="Sheerie";
 let Level=2;
 //profile section
    
  return (
    //static Data insertion
<>
 <div className='border-2 rounded-xl my-10 mx-2 h-2/3  flex flex-column items-center'>
    <p className='mb-4 '>Profile portion</p>
    <img className=" w-20 border-2 rounded-full"src={profile}/>
     <div className='mt-4'>
        <p>Date:12/2/2022</p>
     <p>{Name}</p>
     <h1>Current Result</h1>
     <p>Technique chosen:{Level}</p>
     <p>wpm:2333444</p>
     <p>Read more.... </p>
     </div>
      </div>
    </>    
  )
//  let [isOpen, setIsOpen] = useState(true)


}

export default ProfilePage