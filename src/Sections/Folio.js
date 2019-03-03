import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import VisibilitySensor from 'react-visibility-sensor'

export default class Folio extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            folioVisible: false
        }
    }

    onFolioPageVisible = (isVisible) => {

        this.setState({
            folioVisible: isVisible
        })
    }

    render()
    {
        return (
            <div id="folio" className="sec-folio">
                <Container>
                <VisibilitySensor onChange={this.onFolioPageVisible}>
                    <h1 className={ this.state.folioVisible ? "animated tada" : "" }>Sample Work</h1>
                </VisibilitySensor>
                <hr className="green-hr"/>
                <Row>
                    {this.props.sampleWork.map( (image, i) => { 
                        return (
                            <Col key={i} md={{ size: image.size }} className="text-center">
                            <figure className="figure">
                                <a href={image.link} target="_blank" rel="noopener noreferrer">
                                    <img key={i} className="center-block figure-img img-fluid rounded" src={image.url} title='Video Walkthrough' alt='Video Walkthrough' />
                                </a>
                                <figcaption className="figure-caption text-center">{image.caption}</figcaption>
                            </figure>
                            </Col>
                        )
                    })}
                    </Row>
                </Container> 
            </div>
        )
    }
}