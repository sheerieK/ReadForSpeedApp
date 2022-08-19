import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Exercise from './Components/Exercise';
import Instructions from './Components/Instructions';
import LeisureReading from './Components/LeisureReading';
import ProfilePage from './Components/ProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Exercise" element={<Exercise/>}/>
      <Route path="Instruction" element={<Instructions/>}/>
      <Route path="leisureReading" element={<LeisureReading/>}/>
       <Route path='ProfilePage' element={<ProfilePage/>}/>
       <Route path='SignUpForm' element={<SignUpForm/>}/> 
       
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
