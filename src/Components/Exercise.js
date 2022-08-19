import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';
import ExerciseMainData from './ExerciseMainData'
function Exercise() {

  const[profileSection,setProfileSection]=useState("")
  return (
    <>
    <Header  profileSection={profileSection} setProfileSection={setProfileSection}/>
    <ExerciseMainData 
     profileSection={profileSection} setProfileSection={setProfileSection}/>
    <Footer/>
    </>
  )
}

export default Exercise