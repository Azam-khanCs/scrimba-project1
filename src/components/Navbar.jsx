import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = (props) => {



  return (
    <div className={`navbar ${props.darkMode ? 'dark' : ''}`}>
      <div className="nav container">
        <div className="nav-brand ">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="brand-name">
            <h3>ReactFacts</h3>
          </div>
        </div>
        <div
          className="toggler"
        >
          <p className={`toggler--light ${props.darkMode ? 'd-none' : ''}`}>Light</p>
          <div
            className="toggler--slider"
            onClick={props.toggleMode}
          >
            <div className="toggler--slider--circle"></div>
          </div>
          <p className={`toggler--dark ${props.darkMode ? '' : 'd-none'}`}>Dark</p>
        </div>
        <div className="nav-link">
          <h4>React Course - Project
            <span className='project'>(1)</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar