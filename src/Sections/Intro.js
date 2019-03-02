import React from 'react';
import TypedReact from '../Vendor/TypedReact'
import Navigation from './Navigation'

const Intro = ({captions}) => {

    var options = {
          strings: captions,
          typeSpeed: 40,
          backDelay: 900,
          backSpeed: 40
      }

    return (
    <div id="home" className="sec-main">
        <Navigation/>
        <img id="profile_img" src="https://i.imgur.com/FeuHqbe.jpg" alt="Daniel" />>
        <h1 className="main-heading">I am <TypedReact options={options}/></h1>
    </div>
    )
}

export default Intro