import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header';

function MainSidebar({setIsOpen}) {
  return (<>
   
    <div className='  m-20  w-1/2  flex flex-column'>
      <div className=' mt-12   '>
        <h2 className='ml-4 mt-6 text-3xl font-bold '>Read and enhance speed📖</h2>
      </div>
      {/* <div className='flex m-4  mt-5 p-5  mb-2'> */}
      <div className=' m-2 p-3 mt-4 min-w-32 flex flex-column border-2 border-slate-50 rounded-lg min-h-4rem'>
        <h2 className=' p-2 text-3xl font-bold font-cursive'>Entry PAGE to go ahead🚶</h2>
        <p className=" mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  </p>
        <div className='flex bg-green-400 mt-4 px-5 py-2 w-20  h-10 rounded-lg text-dark font-bold'>
          <Link to="/SigUpForm" >go further </Link>
         
        </div>
      </div>
      {/* </div> */} 
    </div>
    </>
  )
}
export default MainSidebar