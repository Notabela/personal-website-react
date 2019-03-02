import React from 'react';
import {Container, Row, Col} from 'reactstrap'

const About = () => {
    return (
        <div id="about" className="sec-about">
            <Container>
                <h1>A Little about me...</h1>
                <hr className="white-hr"/>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <p className="about-text">Hello I'm Daniel<br/> 
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

export default About