import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg";
import avangerImage from "../assets/images/superhero/avanger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />

                <div id='superhero'>
                    <h1 className='text-white text-center ' > SUPERHERO MOVIES </h1>
                </div>

                <br />
                <Row>
                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={antmanImage}
                                alt="Antman Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Antman </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={avangerImage}
                                alt="Avanger Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Avanger </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={batmanImage}
                                alt="Batman Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Batman </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={robinhoodImage}
                                alt="Robinhood Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Robinhood </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={spidermanImage}
                                alt="Spiderman Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Spiderman </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={supermanImage}
                                alt="Superman Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Superman </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero;