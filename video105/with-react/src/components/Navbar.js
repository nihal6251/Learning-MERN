import React from 'react'

const Navbar = (props) => {
  return (

    <div>
      <div className="logo">{props.logotext}</div>
        <ul>
          <li>home</li>
          <li>about</li>
        </ul>
    </div>
  )
}

export default Navbar
