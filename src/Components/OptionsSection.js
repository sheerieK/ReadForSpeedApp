import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom'
function OptionsSection() {
    
  return (

    <div>
         <div className='  '> 
    <div className=' h-full '>
      <form className='bg-slate-100 text-slate-800 mt-20 mx-2 flex  flex-column items-center rounded p-4'>
        
        <div className=' '>
            <p className=' font-sans text-lg font-bold'>Technique:</p>
            <FormControl className="bg-white shadow-2xl w-60" >
              <InputLabel >Age</InputLabel>
              <Select
                // value={age}
                label="m-2"
              // onChange={handleChange}
              >
                <MenuItem value={10}>Beginner</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Expert</MenuItem>
              </Select>
            </FormControl>
        </div>
        
        <div className="m-2">
            <p className=' font-sans text-lg font-bold'>Level:</p>
            <FormControl  className="bg-white  w-60 h-10 rounded-xl" >
              <InputLabel>Level</InputLabel>
              <Select
                // value={Level}
                label="Level"
              >
                <MenuItem value={1}>Beginner</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Expert</MenuItem>
              </Select>
            </FormControl>
        </div>
        
        <div className="m-2"  >
            <p className=' font-sans text-lg font-bold'>Genre</p>
            <FormControl className="bg-white shadow-2xl w-60">
              <InputLabel>Genre</InputLabel>
              <Select     
                >
                <MenuItem >Historical</MenuItem>
                <MenuItem >Comics</MenuItem>
                <MenuItem >Academics</MenuItem>
              </Select>
            </FormControl>
            
        </div>
        {/* // to start reading   */}
        {/* <div className='bg-slate-800 text-slate-100 px-4 py-2 mt-4'>
      <button onClick={(e)=>{e.preventDefault();
        setSectionData(section())

        }}>start</button>
      </div> */}
      </form> 

     <div className='bg-slate-800 text-slate-100 px-4 py-2 mt-4 bottom-0 left-4 '>
     <Link className='border-2 border-slate-100 px-3 py-2' to="/LeisureReading">Leisure reading</Link>
     </div>
    </div>
    </div>
    </div>
  )
}

export default OptionsSection