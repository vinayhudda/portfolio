import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import webdevelopment from '../assets/img/WebDevelopment.png'
import programming from '../assets/img/programming.png'
import python from '../assets/img/python.png'
import uiux from '../assets/img/user-interface.png'
import database from '../assets/img/database.png'


export const Skills = () => {

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
        <section className='skill' id='skills'>
            <Container>
                <div className='skill-bx'>
                    <hr />
                    <h2>Skills</h2>
                    <hr />
                    <Carousel responsive={responsive} infinite='true' className='skill-slider'>
                        <div className='item'>
                            <img src={programming} alt='Image' />
                            <hr />
                            <h5>Full Stack Development</h5>
                            <hr />

                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                        </div>

                        <div className='item'>
                            <img src={python} alt='Image' />
                            <hr />
                            <h5>Python Automation</h5>
                            <hr />
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                        </div>

                        <div className='item'>
                            <img src={uiux} alt='Image' />
                            <hr />
                            <h5>UI/UX Design</h5>
                            <hr />
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                        </div>

                        <div className='item'>
                            <img src={database} alt='Image' />
                            <hr />
                            <h5>Database Handling</h5>
                            <hr />
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                            <span className='bullet-span'><i class="fa-solid fa-chevron-right"></i> My text</span>
                        </div>
                    </Carousel>
                    <hr />
                </div>
            </Container>
        </section>
    )
}


