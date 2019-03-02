import React, { Component } from 'react';
import Intro from './Sections/Intro'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Folio from './Sections/Folio'
import Footer from './Sections/Footer'

export default class Page extends Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      videoWalkthroughs: this.props.videoWalkthroughs
    }
  }

  render()
  {
    return(
      <div>
        <Intro/>
        <About/>
        <Folio sampleWork={this.state.videoWalkthroughs}/>
        <Contact/>
        <Footer />
      </div>
    )
  }
}
