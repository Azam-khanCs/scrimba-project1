import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav container">
        <div className="nav-brand ">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="brand-name">
            <h3>ReactFacts</h3>
          </div>
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