import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/python.png";
import { ProjectCard } from "./ProjectCard";
import Carousel from 'react-multi-carousel';

export const Projects = () => {
    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },

    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1

        },
    };
    return (
        <section className='project' id='projects'>
            <Container>
                <h2>Projects</h2>
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <div className='project-bx'>
                                <Carousel responsive={responsive} infinite='true' className='project-slider'>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project} />
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            Lorem Ipsum
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            Lorem Ipsum
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <hr className='project-hr' />
            </Container>

        </section>
    )
}


