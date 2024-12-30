import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        // <Col size={12} sm={6} md={4}>
        //     <div className="proj-imgbx">
        //         <img src={imgUrl} />
        //         <div className="proj-txtx">
        //             <h4>{title}</h4>
        //             <span>{description}</span>
        //         </div>
        //     </div>
        // </Col>

        <div className='project-item'>
            <img src={imgUrl} alt='Image' />
            <hr />
            <h5>{title}</h5>
            <hr />

            <span>{description}</span>
        </div>
    )
}