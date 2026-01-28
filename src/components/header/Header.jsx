import React from 'react'
import Navbar from '../navbar/Navbar'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <Navbar />

        <div className="header-text">
          <h1>Where Precious Metals Meet Global Opportunity</h1>
          <p>
            Providing reliable sourcing and global distribution of high-value
            metals for investors and industry leaders, built on transparency,
            expertise, and trusted global partnerships.
          </p>
        </div>

        <div className="header-cta-container">
          <div className="header-cta-b">
            <p>Company Profile</p>
          </div>
          <div className="header-cta">
            <p>Partner With Us</p>
          </div>
        </div>
      </div>

      {/* Wave + Image */}
 
    </div>
  )
}

export default Header
