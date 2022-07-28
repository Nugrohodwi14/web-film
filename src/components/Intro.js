import {Container, Row, Col, Button} from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
          <Container className='text-white di-flex justify-content-center align-items-center text-center '>
            <Row>
              <Col> 
                <div className='title'> NONTON GRATIS </div>
                <div className='title'> GAK PAKE KARCIS </div>

                <div className='introButton mt-4' >
                    <Button variant='dark'>
                        Lihat Semua List
                    </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro ;