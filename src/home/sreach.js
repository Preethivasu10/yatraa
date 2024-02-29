import React from 'react';
import { Navbar, Nav, Card, Row, Col,Image,Dropdown,NavDropdown,Pagination} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './sreach.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SreachPage = () => {
    const slidesData = [
        { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' },
        { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' }, 
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' }, 
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' },
        { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' },
        { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' }, { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' }, { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' }, { day: 'Mon', date: '28', month: 'Feb', price: '$100' },
        { day: 'Tue', date: '1', month: 'Mar', price: '$120' },
        { day: 'Wed', date: '2', month: 'Mar', price: '$110' },
        // Add more slides as needed
      ];
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8, // Set the number of items you want to show at once
        slidesToScroll: 1,
        
      };
      const cardData = [
        {
          title: '5.30pm',
          text: 'With supporting text below as a natural lead-in to additional content.',
          footer: '2 days ago',
        },
        // Add similar objects for the other cards
        // ...
      ];
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img
            src="data:image/png;base64,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" // Replace with your car image URL
            alt="Car"
            style={{ width: '7rem', height: 'auto' }}
          />
                        
                      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-right">
                        <Nav.Link href="#link-1">FLIGHTS</Nav.Link>
                            <Nav.Link href="#link-1">HOTELS</Nav.Link>
                            <Nav.Link href="#link-2">MOVEMENTS</Nav.Link>
                            <Nav.Link href="/home">BUS</Nav.Link>
                            <Nav.Link href="#link-1">CAB</Nav.Link>
                            <Nav.Link href="#link-2">HOLIDAYS</Nav.Link>
                            <Nav.Link href="#link-2">EXPLOTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className='sreach-1' > 
            <Row className="mb-3">
            <Col>
              <Form.Label className='text-light'>From Country:</Form.Label>
              <Form.Control  type="text " className="custom-input bg-gradient" placeholder="Select Country From" />
            </Col>
            <Col>
              <Form.Label className='text-light'>To Country:</Form.Label>
              <Form.Control type="text"  className="custom-input bg-gradient" placeholder="Select Country To" />
            </Col>
            <Col>
              <Form.Label className='text-light'>From Date:</Form.Label>
              <Form.Control  className="custom-input bg-gradient" type="date" />
            </Col>
            <Col>
              <Form.Label className='text-light'>To Date:</Form.Label>
              <Form.Control className="custom-input bg-gradient" type="date" />
            </Col>
            <Col>
              <Form.Label className='text-light'>Travellers:  Travellers</Form.Label>
              <Form.Control type="text"  className="custom-input bg-gradient" placeholder="Select Country To" />
              </Col>
          </Row>
    </div>
    {/* <Navbar bg="light" expand="lg">
                
            </Navbar> */}
            <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <Row>
        <Row className='divpink'>
            <Col>
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className="carousel-content bg-light " style={{ width: '20rem', height:"3px" }}>
          <h6>{`${slide.day}, ${slide.date} ${slide.month} `}</h6>
          <h5>{` ${slide.price}`}</h5>
        </div>
      ))}
    </Slider>
    </Col>
    </Row>
    <div className='divgrey'>
    <Row>
            <Col>
           <buttom> <p>Sort By</p></buttom>

            </Col>
            <Col>
            <p>DEPART</p>
            
            </Col><Col>
            <p>ARRIVE </p>
            
            </Col><Col>
            <p> DURATION</p>
            
            </Col>
    </Row>
    </div>
    </Row>

    <Row>
    <div className='postion1'>
     
    <div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>
          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button  href='/home' variant="primary">Book Now</Button></Col>
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div>
    <div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>
          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button href='/home'  variant="primary">Book Now</Button></Col>
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div><div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>
          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button href='/home' variant="primary">Book Now</Button></Col>
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div><div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>
          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button href='/home'  variant="primary">Book Now</Button></Col>
         
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div><div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>
          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button href='/home' variant="primary">Book Now</Button></Col>
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div><div>
      {cardData.map((data, index) => (
        <Card key={index} className="text mb-3 " style={{ width: '60rem' }}>
          <Card.Header>Use code FESTIVESALE - Get Rs. 280 off(Applicable on Saver and Best Value Fares only)</Card.Header>
          <Card.Body>
       
        <Card.Text>
          <Row>
          <Col><Card.Img variant="top"  style={{ width: '3rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZG039m4QCwsz0uXxCrFg66LMR5nhtROStUtduSHLD-zkTFSNqAED81CgJBPmjBHYmlo&usqp=CAU" alt="Flight Image" /></Col>

          <Col><Card.Title>Indigo</Card.Title></Col>
            <Col>< Card.Title>05:35</Card.Title></Col>
            <Col>< Card.Title>------------</Card.Title></Col>
            <Col> <Card.Title> 08:30</Card.Title></Col>
            <Col><Card.Title> 2h 05m</Card.Title></Col>
            <Col><Card.Title>5000-/</Card.Title></Col>
            <Col> <Button href='/home' variant="primary">Book Now</Button></Col>
          </Row>
          
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
        <a href="#flight-details">Flight Details</a>
      </Card.Footer>

          
        </Card>
      ))}
    </div> 
    
    
    <Row className="custom-roww">
      <Row>
        <Col xs={4}>
          <Image src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/cbcac707a63f1d3fd6c1f2ae5a9609ee.jpg" thumbnail />
        </Col></Row>
        <Row>
        <Col xs={4}>
          <Image  className="new11" src="https://www.yatra.com/ythomepagecms/media/todayspick/2023/Jun/f711619573498d233030082266fed82d.jpg" thumbnail />
        </Col></Row>
        <Row>
        <Col xs={4}>
          <Image className="new22" src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/c97341e4d27698e1d54bad64c11f555d.jpg" thumbnail />
        </Col></Row>
        <Row>
        <Col xs={4}>
          <Image src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/cbcac707a63f1d3fd6c1f2ae5a9609ee.jpg" thumbnail />
        </Col></Row>
        <Row>
        <Col xs={4}>
          <Image  className="new11" src="https://www.yatra.com/ythomepagecms/media/todayspick/2023/Jun/f711619573498d233030082266fed82d.jpg" thumbnail />
        </Col></Row>
        <Row>
        <Col xs={4}>
          <Image className="new22" src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/c97341e4d27698e1d54bad64c11f555d.jpg" thumbnail />
        </Col></Row>
      </Row>
    </div>
    </Row>
    

            </div>
            );
            }

            export default SreachPage;