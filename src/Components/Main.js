import React from 'react'
import MainSidebar from './MainSidebar';
import MainSvg from './MainSvg';
import Header from './Header'

function Main({isOpen,setIsOpen}) {
  return (
    <>
    
    <div className='bg-slate-900 text-slate-50 h-screen flex justify-between  '>
      <MainSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MainSvg/>
    </div>
    </>
  )
}
export default Main;
