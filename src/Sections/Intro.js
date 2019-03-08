import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import TypedReact from '../Vendor/TypedReact'
import Navigation from './Navigation'

export default class Intro extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            introVisible: false
        }

        this.options = {
            strings: props.captions,
            typeSpeed: 40,
            backDelay: 900,
            backSpeed: 40
        }
    }

    onIntroPageVisible = (isVisible) => {

        if (isVisible)
        {
            this.setState({
                introVisible: isVisible
            })
        }
    }

    render()
    {
        return (
            <div id="home" className="sec-main">
                <Navigation/>
                <VisibilitySensor onChange={this.onIntroPageVisible}>
                    <img id="profile_img" src="https://i.imgur.com/FeuHqbe.jpg" alt="Daniel" className={ this.state.introVisible ? 'animated flipInY' : '' }/>
                </VisibilitySensor>
                <h1 className="main-heading">I am <TypedReact options={this.options}/></h1>
            </div>
        )
    }
}