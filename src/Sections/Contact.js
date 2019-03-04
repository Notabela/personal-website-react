import React from 'react';
import {Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap'
import VisibilitySensor from 'react-visibility-sensor'

export default class Contact extends React.Component 
{
    constructor(props)
    {
        super(props)

        this.state = {
            contactVisible: false
        }
    }
    
    onContactPageVisible = (isVisible) => {

        this.setState({
            contactVisible: isVisible
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        document.querySelector("#contactForm").reset()
        alert("submissions are disabled, please reach out to me via social media/email")
    }

    render()
    {
        return (
            <div id="contact" className="sec-contact">
                <Container>
                <VisibilitySensor onChange={this.onContactPageVisible}>
                    <h1 className={ this.state.contactVisible ? "section-heading animated pulse" : "section-heading" }>Get in Touch</h1>
                </VisibilitySensor>
                <hr className="white-hr"/>
                <Row>
                    <Col lg={{ size: 12}}>
                        <Form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit} noValidate="">
                            <Row className="text-center">
                                <Col md={{ size: 6}}>
                                    <FormGroup>
                                        <Input type="text" className="form-control" placeholder="Your Name" id="name" required={true}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="email" className="form-control" placeholder="Your Email Address" id="email" required={true}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="tel" className="form-control" placeholder="Your Phone Number" id="phone" required={false}/>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 6}}>
                                    <FormGroup>
                                    <textarea className="form-control" placeholder="Your Message *" id="message" required={true} ></textarea>
                                    </FormGroup>
                                </Col>
                                <div className="clearfix"></div>
                                <Col lg={{ size: 12}} className="text-center">
                                    <div id="success"></div>
                                    <Button type="submit" className="btn btn-xl">Send Message</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}