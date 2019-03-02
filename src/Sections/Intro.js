import React from 'react';
import TypedReact from '../Vendor/TypedReact'
import Navigation from './Navigation'

const Intro = () => {

    var options = {
        strings: ["a programmer...", "an engineer?", "a coder..?", "&lt;code/&gt;"],
          typeSpeed: 40,
          backDelay: 900,
          backSpeed: 40
      }

    //var typed = new Typed(".element", options);
    return (
    <div id="home" className="sec-main">
        <Navigation/>
        <img id="profile_img" src="https://i.imgur.com/FeuHqbe.jpg" alt="Daniel" />>
        <h1 className="main-heading">I am <TypedReact options={options}/></h1>
    </div>
    )
}

export default Intro