import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import blog1 from '../../images/Images.1/blog/blog-1.png'
import blog2 from '../../images/Images.1/blog/blog-2.png'
import blog3 from '../../images/Images.1/blog/blog-3.png'
import './Home.css'

const OurService = () => {
    return (
        <div class="my-5 ">
            <h2 class="experiance">| Latest From Blog</h2>
            <h6> Description text here...</h6>
        <CardGroup className="">
            
            <Card>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                <Card.Title>How to handle your kids’ </Card.Title>
                <Card.Text>
                The great explorer have inside any problem, master builder of human happiness one rejects, dislikes[...]
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted mx-5 ">02 Feb 2018  </small>
                <small className="text-danger  mx-5 ">Comment ( 25 ) </small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                <Card.Title>How to handle your kids’ </Card.Title>
                <Card.Text>
                The great explorer of the truth, master builder of human happiness one rejects, dislikes[...]
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted mx-5">02 Feb 2018</small>
                <small className="text-danger mx-5">Comment ( 16 ) </small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                <Card.Title>How to handle the adult person’ </Card.Title>
                <Card.Text>
                The great explorer the pregnacy report, master builder of human happiness one rejects, dislikes[...]
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted mx-5">02 Feb 2018</small>
                <small className="text-danger mx-5">Comment ( 31 ) </small>
                </Card.Footer>
            </Card>
        </CardGroup>
        </div>
    );
};

export default OurService;