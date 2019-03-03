import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope, FaLaptopCode, FaGithub} from 'react-icons/fa'
import {TiHeartFullOutline} from "react-icons/ti";
import {Container, Row, Col} from 'reactstrap'

const Footer = () => {
    return (
        <div id="footer" className="sec-footer">
            <Container>
                <Row>
                    <Col>
                    <p className="text-center light-white-font social">
                        <a href="https://www.facebook.com/notabela" title="Facebook" target="facebook"><FaFacebookF color="#3b5998"/></a>
                        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/daniel-obeng-b22759111" title="Linkedin" target="linkedin"><FaLinkedinIn color="#007bb5"/></a>
                        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        <a href="https://github.com/notabela" title="Github" target="github"><FaGithub color="#000000"/></a>
                        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        <a href="https://instragram.com/notabela" title="Instagram" target="instagram"><FaInstagram color="#fb3958"/></a>
                        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        <a href="mailto:daniobeng@gmail.com" title="My pens" target="Email"><FaEnvelope color="#00bf8f"/></a>
                    </p>
                    </Col>
                </Row>
                <Row className="text-center small">
                    <Col>
                        <p><FaLaptopCode color='blue' size="1.2em"/> with <span id="nota-heart"><TiHeartFullOutline color='red' size="1.5em"/></span> by notabela</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer