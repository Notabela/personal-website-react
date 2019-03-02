import React from 'react';
import {Container, Row, Col} from 'reactstrap'

const Folio = ({sampleWork}) => {
    return (
        <div id="folio" className="sec-folio">
            <Container>
            <h1>Sample Work</h1><hr className="green-hr"/>
            <Row>
                {sampleWork.map( (image, i) => { 
                    return (
                        <Col key={i} md={{ size: image.size }}>
                        <figure className="figure">
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                <img key={i} className="center-block figure-img img-fluid rounded" src={image.url} title='Video Walkthrough' alt='Video Walkthrough' />
                            </a>
                            <figcaption class="figure-caption text-center">{image.caption}</figcaption>
                        </figure>
                        </Col>
                    )
                })}
                </Row>
            </Container> 
        </div>
    )
}

export default Folio