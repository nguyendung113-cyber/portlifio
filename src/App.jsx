import { useState } from 'react';
import { Navbar } from './component/Navbar/navbar';
import { Portfolio } from './component/Portfolio/Portfolio';
import { Skill } from './component/Skill/Skill';


function App() {
  return(

    <div className='tw-bg-black'>
          <Navbar/>
          <Skill/>
          <Portfolio/>
    </div>
  )
}

export default App
