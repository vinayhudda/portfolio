import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <h2>Experience</h2>

            <Container>
                <hr />
                <Row className='titles align-items-center'>
                    <Col sm={3} className='titles-col'>
                        <Row><h4>Assistant Director</h4></Row>
                        <Row><h5>Moody's Analytics</h5></Row>
                        <Row><h6>July 2024 - Present</h6></Row>
                    </Col>

                    <Col sm={9}>
                        <div className='ul-container'>
                            <ul>
                                <li><b>Enhanced Code Usability : </b>Developed user friendly interfaces using PyQt and Qt Designer, increasing code
                                    accessibility for non - technical team members by 50%.</li>
                                <li><b>Process Automation : </b>Streamlined project workflows by automating Python scrips, reducing
                                    manual effort by 30%.</li>
                                <li><b>Dashboard Development : </b>Built internal dashboard using Streamlit to visualize hurricane event responses
                                    and research insights, improving data accessibiliyt for stakeholders.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>

            <Container>
                <Row className='titles align-items-center'>
                    <Col sm={3} className='titles-col'>
                        <Row><h4>Modeler</h4></Row>
                        <Row><h5>Moody's Analytics</h5></Row>
                        <Row><h6>Mar 2023 - Jun 2024</h6></Row>
                    </Col>

                    <Col sm={9}>
                        <div className='ul-container'>
                            <ul>
                                <li><b>Data Analytics Tools : </b>Developed Python scripts utilizing Pandas/Geopandas to extract and analyze
                                    geospatia statistics, improving data analysis speed by 35%.</li>
                                <li><b>Project Management : </b>Successfully managed and delivered multiple high-priority projects concurrently,
                                    maintaining a 100% on-time delivery rate.</li>
                                <li><b>GitHub : </b>Maintain, document and version control essential project codes.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>

            <Container>
                <Row className='titles align-items-center'>
                    <Col sm={3} className='titles-col'>
                        <Row><h4>Senior Modeling Analyst</h4></Row>
                        <Row><h5>Moody's Analytics</h5></Row>
                        <Row><h6>Jan 2022 - Feb 2023</h6></Row>
                    </Col>

                    <Col sm={9}>
                        <div className='ul-container'>
                            <ul>
                                <li>Built automated framework for coastline extraction and greenhouse farms detection from
                                    multi-band satellite images. Automated the methodology using Google Earth Engine
                                    (JavaScript) and Python (Numpy/GDAL).
                                </li>
                                <li>Developed classification algorithms for aerial imagery analysis using Random Forest, enhancing efficient
                                    extraction of features like swimming pools and tree cover.
                                </li>
                                <li>Efficiently managed project components and engaged in teamwork for competing high-priority crucial projects
                                    on time.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>

            <Container>
                <Row className='titles align-items-center'>
                    <Col sm={3} className='titles-col'>
                        <Row><h4>Modeling Analyst</h4></Row>
                        <Row><h5>Risk Management Solutions</h5></Row>
                        <Row><h6>Feb 2019 - Dec 2021</h6></Row>
                    </Col>

                    <Col sm={9}>
                        <div className='ul-container'>
                            <ul>
                                <li>Automated extraction process for industrial buildings with blue steel tile roofs using remote
                                    sensing techniques and Python libraries.
                                </li>
                                <li>Coordinated with diverse teams to ensure smooth project execution and delivery.
                                </li>
                                <li>Documenting methodologies and processes for effective stakeholder engagements.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>

            <Container>
                <Row className='titles align-items-center'>
                    <Col sm={3} className='titles-col'>
                        <Row><h4>GIS Consultant</h4></Row>
                        <Row><h5>Risk Management Solutions</h5></Row>
                        <Row><h6>Jun 2018 - Jan 2019</h6></Row>
                    </Col>

                    <Col sm={9}>
                        <div className='ul-container'>
                            <ul>
                                <li>Engaged in developing high quality project deliverables delivered on time.
                                </li>
                                <li>Utilized analytical skills to speed up processes.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <br />
                <br />
            </Container>
        </section>
    )
}


