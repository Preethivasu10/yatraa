import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Accordion } from 'react-bootstrap';


const HotelPage = () => {
  const [travellersList, setTravellersList] = useState([{ adults: 1, children: 0, infants: 0 }]);

  const handleAdd = () => {
    setTravellersList((prevList) => [...prevList, { adults: 1, children: 0, infants: 0 }]);
  };

  const handleRemove = (index) => {
    setTravellersList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };

  const handleAddTraveller = (index, type) => {
    setTravellersList((prevList) => {
      const newList = [...prevList];
      newList[index][type] = newList[index][type] + 1 > 0 ? newList[index][type] + 1 : 0;
      return newList;
    });
  };

  const handleRemoveTraveller = (index, type) => {
    setTravellersList((prevList) => {
      const newList = [...prevList];
      newList[index][type] = newList[index][type] > 0 ? newList[index][type] - 1 : 0;
      return newList;
    });
  };

  return (
    <div className='fight'>
      <div className='fight1'>
        <Card style={{ width: '30rem' }} className="card-with-shadow">
          <Card.Body>
            <Card.Title>Book on India's Largest Hotel Network</Card.Title>
            <p></p>
            <Form>
              <Row className="mb-3">
                <Col>
                 <Form.Label className="text-light">select city, location, or HotelName</Form.Label>

                  <Form.Control type="text" placeholder="Select Location From" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Check In:</Form.Label>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Label>Check Out:</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Travellers and Rooms</Accordion.Header>
                  <Accordion.Body>
                    {travellersList.map((traveller, index) => (
                      <Row key={index} className="mb-3">
                        <Col>
                          <Form.Label>Travellers: {traveller.adults + traveller.children + traveller.infants} Travellers</Form.Label>
                          <Col>
                            <Button variant="outline-dark" onClick={() => handleAddTraveller(index, 'adults')}>
                              + 
                            </Button>Adults
                            <Button variant="outline-dark" onClick={() => handleRemoveTraveller(index, 'adults')}>
                              - 
                            </Button>

                            <Button variant="outline-dark" onClick={() => handleAddTraveller(index, 'children')}>
                              + 
                            </Button> Children
                            <Button variant="outline-dark" onClick={() => handleRemoveTraveller(index, 'children')}>
                              -
                            </Button>

                            <Button variant="outline-dark" onClick={() => handleAddTraveller(index, 'infants')}>
                              +
                            </Button> Infants
                            <Button variant="outline-dark" onClick={() => handleRemoveTraveller(index, 'infants')}>
                              -
                            </Button>
                          </Col>
                        </Col>
                        

                        <Row className='removebtm'>
                            <Col>
                       <Button  variant="danger" size="sm-4" onClick={() => handleRemove(index)}>

                          Remove
                        </Button>

                        </Col>
                        </Row>
                      </Row>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Col>
                <Form.Label>Additional Services:</Form.Label>
              </Col>
            </Form>
            <Col>
              <Button style={{ width: '10rem' }} onClick={handleAdd} variant="primary">
                Add Rooms
              </Button>{' '}
              <Button href='appp' style={{ width: '10rem' }} variant="danger">
                Search Hotels
              </Button>{' '}
            </Col>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HotelPage;
