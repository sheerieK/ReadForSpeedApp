import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from "./Components/Footer"
import Main from './Components/Main';
import Exercise from './Components/Exercise';

import { useState } from 'react'

import ProfilePage from './Components/ProfilePage';


function App() {
  const[profileSection,setProfileSection]=useState("some")
  const[isOpen,setIsOpen]=useState(false)
  return (
   <>
    <Header profileSection={profileSection} setProfileSection={setProfileSection} isOpen={isOpen} setIsOpen={setIsOpen} />
   <Main isOpen={isOpen} setIsOpen={setIsOpen}/>
   
   
   <Footer/> 
     <Exercise  profileSection={profileSection} setProfileSection={setProfileSection} /> 
 
</>
  
  );
}



export default App;
