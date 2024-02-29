import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaHeadset, FaMoneyCheckAlt } from 'react-icons/fa';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from 'react-bootstrap/TabContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Card, Button, Form, Row, Col, Accordion } from 'react-bootstrap';

function EmailContent() {
  return (
    <Card style={{ width: '30rem' }} className="card-with-shadow">
    <Card.Body>
      <Card.Title>Email Domestic and International Holidays</Card.Title>
      <p></p>
      <Form>
     <Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Check In:</Form.Label>
            <Form.Control type="month" />
          </Col>
      
        </Row>
        <Col>
       
       <Button style={{ width: '10rem' }} variant="danger">
         Search 
       </Button>{' '}
     </Col>
        

      </Form>
      
    </Card.Body>
  </Card>
  );
}
 
function ContactContent() {
  return(
    <Card style={{ width: '30rem' }} className="card-with-shadow">
    <Card.Body>
      <Card.Title>Email Domestic and International Holidays</Card.Title>
      <p></p>
      <Form>
     <Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Check In:</Form.Label>
            <Form.Control type="month" />
          </Col>
      
        </Row>
        <Col>
       
       <Button style={{ width: '10rem' }} variant="danger">
         Search 
       </Button>{' '}
     </Col>
        

      </Form>
      
    </Card.Body>
  </Card>
  )
}

function PhoneSupportContent() {
  return (
    <Card style={{ width: '30rem' }} className="card-with-shadow">
    <Card.Body>
      <Card.Title>Email Domestic and International Holidays</Card.Title>
      <p></p>
      <Form>
     <Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Check In:</Form.Label>
            <Form.Control type="month" />
          </Col>
      
        </Row>
        <Col>
       
       <Button style={{ width: '10rem' }} variant="danger">
         Search 
       </Button>{' '}
     </Col>
        

      </Form>
      
    </Card.Body>
  </Card>
  )
}

function ClaimRefundContent() {
  return (
    <Card style={{ width: '30rem' }} className="card-with-shadow">
    <Card.Body>
      <Card.Title>Email Domestic and International Holidays</Card.Title>
      <p></p>
      <Form>
     <Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row><Row className="mb-3">
      <Col>
        
        <Form.Control type="text" placeholder="Select Country From" />
      </Col>
      
    </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Check In:</Form.Label>
            <Form.Control type="month" />
          </Col>
      
        </Row>
        <Col>
       
       <Button style={{ width: '10rem' }} variant="danger">
         Search 
       </Button>{' '}
     </Col>
        

      </Form>
      
    </Card.Body>
  </Card>
  )
}

function ToggleableTabs() {
  const [activeTab, setActiveTab] = useState('email');

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className='tabs'>
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="toggleable-tabs"
      >
        <Tab eventKey="email" title={<><FaEnvelope style={{ fontSize: '50px', color: 'red' }} /> Email</>}>
          <TabContent>{activeTab === 'email' && <EmailContent />}</TabContent>
        </Tab>
        <Tab eventKey="contact" title={<><FaHeadset style={{ fontSize: '50px', color: 'red' }} /> Contact</>}>
          <TabContent>{activeTab === 'contact' && <ContactContent />}</TabContent>
        </Tab>
        <Tab eventKey="phoneSupport" title={<><FaPhone style={{ fontSize: '50px', color: 'red' }} /> Phone Support</>}>
          <TabContent>{activeTab === 'phoneSupport' && <PhoneSupportContent />}</TabContent>
        </Tab>
        <Tab eventKey="claimRefund" title={<><FaMoneyCheckAlt style={{ fontSize: '50px', color: 'red' }} /> Claim Refund</>}>
          <TabContent>{activeTab === 'claimRefund' && <ClaimRefundContent />}</TabContent>
        </Tab>
      </Tabs>
      <Row  style={{ fontSize: '50px', background:"light", margin:'20px', padding:'20px',textAlign:"center" }}>
        <Col>
      <DropdownButton  variant="light" title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light" title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
   
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
   
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    </Row>
    <Row  style={{ fontSize: '50px', color: 'red', margin:'20px', padding:'20px'}}>
        <Col>
      <DropdownButton  variant="light" title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton>
   </Col>
    <Col>
   
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    <Col>
   
    <DropdownButton variant="light"  title="Select an Option">
      
      <Dropdown.Item eventKey="8">Button 8</Dropdown.Item>
    </DropdownButton></Col>
    
    </Row>
    
    
    </div>

    
  );
}

export default ToggleableTabs;
