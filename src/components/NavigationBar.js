import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom'

const NavigationBar= () => {

    const [ fix, setFix ] = useState(true)

    function setFixed(){
        if(window.scrollY >= 500 ) {
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)

    return (
        <div>
            <Navbar variant="dark"  className= { fix ? "navbar fixed" : "navbar" } > 
                <Container>
                    <Navbar.Brand href="/" > Nugi Film </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending" > Trending </Nav.Link>
                        <Nav.Link href="#superhero" > Superhero </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar ;
