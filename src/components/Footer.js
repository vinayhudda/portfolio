import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <section className='footer' id='footer'>
            <Container>
                <Row>
                    <Col sm={6} className='footer-column mt-5 mb-3'>
                        <h2>Educational Qualifications</h2>
                        <hr className='footer-separator' />
                        <Row><h5>Master of Science In Geoinformatics (Jun 2016 - Jun 2018)</h5></Row>
                        <Row><h6>TERI School of Advanced Studies </h6></Row>
                        <Row><h6><b>Grade : </b>8/10 CGPA</h6></Row>
                        <Row><h6><b>Key Learnings : </b>Remote Sensing & GIS | Postgres & Geoserver</h6></Row>
                        <br />
                        <Row><h5>Bachelor of Science In Geoinformatics (Jun 2011 - Jun 2014)</h5></Row>
                        <Row><h6>University of Delhi </h6></Row>
                        <Row><h6><b>Grade : </b>67%</h6></Row>
                        <Row><h6><b>Key Learnings : </b>Python | SQL</h6></Row>
                        <hr className='footer-separator' />
                    </Col>
                    <Col sm={6} className='mt-5 mb-3'>
                        <h2>Personal Details</h2>
                        <hr className='footer-separator' />
                        <Row><h6><b>Address : </b>H.No. - 55, Village Zindpur, P.O. Alipur, Delhi - 110036</h6></Row>
                        <Row><h6><b>Email : </b>huddavinay4@gmail.com | vinay.hudda@moodys.com</h6></Row>
                        <Row><h6><b>Linked In : </b>link</h6></Row>
                        <Row><h6><b>Instagram ID : </b>vinay_hudda_007</h6></Row>
                        <Row><h6><b>Github : </b>vhudda</h6></Row>

                        <hr className='footer-separator' />
                    </Col>
                </Row>
                <p>Copyright 2024. All Rights Reserved.</p>
            </Container>
        </section>

    )
}


