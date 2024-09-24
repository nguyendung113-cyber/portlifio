import { useState } from 'react';
import { Navbar } from './component/Navbar/Navbar';
import { Contact } from './component/Contact/Contact';
import { Skill } from './component/Skill/Skill';
import { Aboutme } from './component/AboutMe/Aboutme';
import { MyProject } from './component/MyProject/MyProject';



function App() {

  return(

    <div className='tw-bg-black'>
          {/* Thanh điều hướng  */}
          <Navbar/>

          {/* Giới thiệu bản thân */}
          <Aboutme/>

          {/* Các kỹ năng có thể sử dụng */}
          <Skill/>

          {/* Các dự án đã thực hiện */}
          <MyProject/>

          {/* Cách thức liên hệ */}
          <Contact/>

    </div>
  )
}

export default App
