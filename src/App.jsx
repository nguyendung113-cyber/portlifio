import { useState } from 'react';
import { Navbar } from './component/Navbar/Navbar';
import { Contact } from './component/Contact/Contact';
import { Skill } from './component/Skill/Skill';
import { Aboutme } from './component/AboutMe/Aboutme';
import { MyProject } from './component/MyProject/MyProject';
import Timeline from './component/Timeline/Timeline';
import Footer from './component/Footer/Footer';



function App() {

  return(

    <div className='bg-primary1'>
          {/* Thanh điều hướng  */}
          <Navbar/>

          {/* Giới thiệu bản thân */}
          <Aboutme/>

          {/* Các kỹ năng có thể sử dụng */}
          <Skill/>

          <Timeline/>


          {/* Các dự án đã thực hiện */}
          <MyProject/>

          {/* Cách thức liên hệ */}
          <Contact/>

          <Footer/>

    </div>
  )
}

export default App
