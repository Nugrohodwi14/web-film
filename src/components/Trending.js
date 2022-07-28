import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import duneImage from "../assets/images/trending/dune.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return (
        <div>
            <Container>
                <br />

                <div id='trending'>
                    <h1 className='text-white text-center ' > TRENDING MOVIES </h1>
                </div>

                <br />
                <Row>
                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Dune </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={infiniteImage}
                                alt="Infinite Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Infinite </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={everythingImage}
                                alt="Everything Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Everything </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={morbiusImage}
                                alt="Morbius Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Morbius </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={lightyearImage}
                                alt="Lightyear Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Lightyear </Card.Title>
                            <Card.Text className='text-left' >
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className='text-left' >Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>

                    <Col md={4} className="moviesWrapper" >
                        <Card className="bg-dark text-white movieImage p-2 m-1" >
                            <Image
                                src={jokerImage}
                                alt="Joker Movies"
                                className="images"
                            />
                            <Card.Title className='text-center' > Joker </Card.Title>
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

export default Trending;