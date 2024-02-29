import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Accordion } from 'react-bootstrap';


const HolidaysPage = () => {
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
            <Card.Title>Book Domestic and International Holidays</Card.Title>
            <p></p>
            <Form>
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
                  <Form.Label>Check In:</Form.Label>
                  <Form.Control type="month" />
                </Col>
            
              </Row>
              <Col>
             
             <Button href='apppp' style={{ width: '10rem' }} variant="danger">
               Search 
             </Button>{' '}
           </Col>
              

            </Form>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HolidaysPage;
