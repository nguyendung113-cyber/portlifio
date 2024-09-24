import { Aboutme } from '../AboutMe/Aboutme';

import { useRef } from 'react';


export const  Navbar = () => {

    const handleScroll = () => {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return(
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary tw-flex tw-justify-center"  data-bs-theme="dark">
          <div className="container-fluid" style={{ maxWidth: 1280}}>
            <a className="navbar-brand" href="">Dũng</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-flex tw-justify-end tw-w-full" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Aboutme">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#MySkill">Skill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#MyProject">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
      </header>
      
);
}




