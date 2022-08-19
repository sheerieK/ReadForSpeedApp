import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Practice from './Practice'
import profile from './profile.png'
import ProfilePage from './ProfilePage';
import OptionsSection from './OptionsSection';

function ExerciseMainData({ profileSection, setProfileSection }) {
  //useState of exercise's box section initial phase 
  const [sectionData, setSectionData] = useState("Ready to start your reading journey!!");
  const [optionsSection, setOptionsSection] = useState(<OptionsSection />);
  // const[profileSection,setProfileSection]=useState("")

  //Practice step after clicking stop button at reading time-->>2nd step in box section
  const practice = () => {
    return (
      <div className='bg-slate-800 h-full m-10'>
        <h2 className='m-6'>practice section</h2>

        <form className='ml-10 space-y-3' onSubmit={() => { console.log("submit is called") }}>
          <div className="m-2 my-8">
            <p className="">1. How did Thomas spend his day?</p>
            <input type="radio" id="html" name="fav_language"
            // value={a}
            />
            <label for="html"> (a).Only doing social activities</label><br />
            <input type="radio" id="css" name="fav_language"
            //  value={b} 
            />
            <label for="css"> (b). Only reading, eating and sleeping</label><br />
            <input type="radio" id="javascript" name="fav_language"
            //  value={c} 
            />
            <label for="javascript">(c) Only eating and sleeping</label><br />
            <input type="radio" id="javascript" name="fav_language"
            // value={d}
            />
            <label for="javascript">(d) None of the above</label>
          </div>
          <p>2. Who did Thomas see on his way to school</p>
          <div className='m-2 my-8'>
            <input type="radio" id="html" name="fav_language"
            // value={a} 

            />
            <label for="html">(a). A herschool</label><br />
            <input type="radio" id="css" name="fav_language"
            //  value={b} 
            />
            <label for="css">(b). A poor man</label><br />
            <input type="radio" id="javascript" name="fav_language"
            //  value={c} 
            />
            <label for="javascript">(c). An Old man</label><br />
            <input type="radio" id="javascript" name="fav_language"
            //  value={d} 
            />
            <label for="javascript">(d). A poor woman</label>
          </div>
          <div>
            <p>3. What did Thomas want to ask the old man?</p>
            <input type="radio" id="html" name="fav_language"
            // value={a} 
            />
            <label for="html">(a).The reason for begging</label><br />
            <input type="radio" id="css" name="fav_language"
            // value={b}
            />
            <label for="css">(b).To eat healthy food</label><br />
            <input type="radio" id="javascript" name="fav_language"
            //  value={c} 
            />
            <label for="javascript">(c).To beg as much as he could </label><br />
            <input type="radio" id="javascript" name="fav_language"
            //  value={d} 
            />
            <label for="javascript">(d). To rest instead of begging</label>
          </div>

          <div>
            <p>4. What is the synonym of gasp?</p>
            <input type="radio" id="html" name="fav_language"
            //  value={a} 
            />
            <label for="html">(a).Heeav</label><br />
            <input type="radio" id="css" name="fav_language"
            // value={b} 
            />
            <label for="css">(b).Breatth</label><br />
            <input type="radio" id="javascript" name="fav_language"
            // value={c}
            />
            <label for="javascript">(c).Blow </label><br />
            <input type="radio" id="javascript" name="fav_language"
            // value={d}
            />
            <label for="javascript">(d). Inhale</label>
          </div>
        </form>

        <button className="bg-yellow-300 border-2 rounded px-3 py-1 " onClick={(e) => {
          e.preventDefault();
          //change test mode to result
          setSectionData(finalResult())
          setProfileSection(<ProfilePage />)
          setOptionsSection(<OptionsSection />)
        }}>submit</button>

      </div>
    )
  }
  //static result to show some data 
  const finalResult = () => {
    let res = 3;
    return (<div className='m-20'>
      <h1>result goes here</h1>
      <p>your result is {res}/10</p>
    </div>
    )
  }
  //static data for user to read after clicking 'start' button-->>step 1 in box section 
  const section = () => {
    return (
      <>
        <h1 className="font-bold m-8  text-slate-100">Thomas’ Generosity –</h1>
        <p className='m-12'>"
          When Thomas was fifteen, he was a very intelligent and generous boy. He spent his day only reading,
          eating and sleeping. Other than that, he didn’t do anything. When the teachers of his class asked him
          any question, he would answer it very immediately.
          He always kept himself away from social activities, but once when he was going to his school, he saw a
          very old man begging on the roadside.
          At first, he thought that he should stop there and ask him why he was begging because he was too old
          to do that, instead, he should rest. At the same time, he realized that if he stopped there, he would be
          late for school.
          He thought for a while and went to the old man. He saw that everyone was passing by him but no one
          was giving him alms. After seeing the incident, he took out twenty rupees from his pocket and gave
          them to the beggar. By doing that, he felt very good and reached the school gasping."
        </p>
        <button className='bg-slate-500 text-slate-100 px-3 py-2 hover:bg-slate-700 rounded' onClick={(e) => {
          e.preventDefault();
          setSectionData(practice)
        }}  >stop reading and give test</button>
      </>
    )
  }
  return (<>
    <div className=' bg-slate-800 text-slate-100 mt-20 flex justify-between h-screen '>
      <div className=' bg-slate-800 w-1/5 '>
      

        {optionsSection}
        {<div className='bg-slate-800 text-slate-100 px-4 py-2 mt-4'>

          <button onClick={(e) => {
            e.preventDefault();
            setSectionData(section())
            setOptionsSection("")
            setProfileSection("")
          }}>start</button>
        </div>}
      </div>

      {/* <div className='flex border-2 border-solid-black'>  */}

      <div className='bg-slate-800 items-center text-slate-50  w-3/5 m-6  border-2 border-white rounded-lg shadow-xl h-1/2 overflow-y-auto'>
        {sectionData}

      </div>
      <div className='bg-slate-800 w-1/5  '>

        {profileSection}

      </div>
    </div>

  </>
  )
}

export default ExerciseMainData