import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Container, Row, Col} from 'reactstrap'

export default class About extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            aboutVisible: false
        }
    }

    onAboutPageVisible = (isVisible) => {

        this.setState({
            aboutVisible: isVisible
        })
    }

    render()
    {
        return(
            <div id="about" className="sec-about">
            <Container>
                <VisibilitySensor onChange={this.onAboutPageVisible}>
                    <h1 className={ this.state.aboutVisible ? "animated pulse" : "" }>A Little about me...</h1>
                </VisibilitySensor>
                <hr className="white-hr"/>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <p className="about-text" ref="about">Hello I'm Daniel<br/>
                        Artist, Developer, Engineer and IT Enthusiast. <br />
                        My dream is to create a better world with &lt;code/&gt;<br/> <br/>
                        <a href="https://github.com/notabela" target="_blank" rel="noopener noreferrer">Checkout my latest projects on Github</a><br />
                        <a href="https://bit.ly/2XvmUCk" target="_blank" rel="noopener noreferrer">Download my resume</a>
                    </p>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}