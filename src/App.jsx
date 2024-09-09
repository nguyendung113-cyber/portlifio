import { useState } from 'react';
import { Navbar } from './component/Navbar/Navbar';
import { Contact } from './component/Contact/Contact';
import { Skill } from './component/Skill/Skill';
import { Aboutme } from './component/AboutMe/Aboutme';


function App() {
  return(

    <div className='tw-bg-black'>
          <Navbar/>
          <Aboutme/>
          <Skill/>
          <Contact/>
    </div>
  )
}

export default App
