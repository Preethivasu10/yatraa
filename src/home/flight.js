// FlightsPage.js
import React, { useState } from 'react';
import { Card, Button, Form, Row, Col,Accordion,AccordionItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import './FlightsPage.css'; // Import your CSS file

const FlightsPage = () => {
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });

  const handleAdd = (type) => {
    setTravellers((prevTravellers) => ({
      ...prevTravellers,
      [type]: prevTravellers[type] + 1 > 0 ? prevTravellers[type] + 1 : 0,
    }));
  };

  const handleLess = (type) => {
    setTravellers((prevTravellers) => ({
      ...prevTravellers,
      [type]: prevTravellers[type] > 0 ? prevTravellers[type] - 1 : 0,
    }));
  };

  const totalTravellers = travellers.adults + travellers.children + travellers.infants;

  return (
    <div className='fight'>
        <div className='fight1'>
        <Card style={{ width: '30rem' }} className="card-with-shadow">
      <Card.Body>
        <Card.Title>Book Flight Tickets Online</Card.Title>
        <p></p>
        <Form>
          <Row className="mb-3">
            <Col>
              <Button variant="outline-dark">onroad trip</Button>
            </Col>
            <Col>
              <Button variant="outline-dark">one way</Button>
            </Col>
            <Col>
              <Button variant="outline-dark">multi-city</Button>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>From Country:</Form.Label>
              <Form.Control type="text" placeholder="Select Country From" />
            </Col>
            <Col>
              <Form.Label>To Country:</Form.Label>
              <Form.Control type="text" placeholder="Select Country To" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>From Date:</Form.Label>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Label>To Date:</Form.Label>
              <Form.Control type="date" />
            </Col>
          </Row>

          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Travellers</Accordion.Header>
        <Accordion.Body>
          <Row className="mb-3">
            <Col>
              <Form.Label>Travellers: {totalTravellers} Travellers</Form.Label>
              <Col>
                <Button variant="outline-dark" onClick={() => handleAdd('adults')}>
                  + 
                </Button>Adults
                <Button variant="outline-dark" onClick={() => handleLess('adults')}>
                  - 
                </Button>

                <Button variant="outline-dark" onClick={() => handleAdd('children')}>
                  + 
                </Button>Children
                <Button variant="outline-dark" onClick={() => handleLess('children')}>
                  - 
                </Button>

                <Button variant="outline-dark" onClick={() => handleAdd('infants')}>
                  + 
                </Button> Infants
                <Button variant="outline-dark" onClick={() => handleLess('infants')}>
                  -
                </Button>
              </Col>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Select Your Favorite Seat Class:</Form.Label>
              <div>
                <input type="radio" id="economy" name="seatClass" value="Economy" />
                <label htmlFor="economy">Economy</label>
              </div>
              <div>
                <input type="radio" id="premiumEconomy" name="seatClass" value="Premium Economy" />
                <label htmlFor="premiumEconomy">Premium Economy</label>
              </div>
              <div>
                <input type="radio" id="business" name="seatClass" value="Business" />
                <label htmlFor="business">Business</label>
              </div>
            </Col>

           
          </Row>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <div></div>
          <Col>
              <Form.Label>Additional Services:</Form.Label>
              <div>
                <input type="checkbox" id="bike" name="vehicle1" value="Bike" />
                <label htmlFor="bike"> not stop </label>
              </div>
              <div>
                <input type="checkbox" id="car" name="vehicle2" value="Car" />
                <label htmlFor="car">student fee </label>
              </div>
              <div>
                <input type="checkbox" id="bo<at" name="vehicle3" value="Boat" />
                <label htmlFor="boat"> student fee</label>
              </div>
            </Col>
        </Form>
    <Col>
        <Button style={{ width: '10rem' }}  variant="primary"><Link className="nav-link" to="/sreach"> </Link>check your Rufund</Button>{' '}<Button  href='/sreach' style={{ width: '10rem' }} variant="danger">
        {/* <Link to="/sreach">Check Flights</Link> */}   Check Flights 
</Button>{' '}</Col>
      </Card.Body>
    </Card>
    </div>
    
    </div>

  );
};

export default FlightsPage;
