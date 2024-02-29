import React from 'react';
import { Navbar, Nav, Container, Card, Button, Row, Col,Image ,ListGroup} from 'react-bootstrap';
import './visa.css';

const VisaPage = () => {
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
                        <Nav className=" preethi ml-auto text-right">
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

            <Container className="mt-3">
                <Row>
                    
                    <Col md={6}>
                        <div className="image-container">
                        <img src="https://ns.yatracdn.com/common/images/seo/visa/visa-yatra.jpg" className="img-fluid" alt="First Line" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: '70rem' }} className='cardd1'>
                            <Card.Body>
                                <Card.Title>Applying for a Visa Online</Card.Title>
                                <Col>
                                <div className="d-flex">
        <input type="email" className="form-control mb-2" placeholder="Enter your name" />
        <input type="email" className="form-control mb-2 mx-2" placeholder="Enter your first name" />
        <input type="number" className="form-control mb-2" placeholder="Enter your last name" />
    </div>
</Col>

<Col>
                                <div className="d-flex">
        <input type="email" className="form-control mb-2" placeholder="Enter your name" />
        <input type="email" className="form-control mb-2 mx-2" placeholder="Enter your first name" />
        <Button  className="form-control mb-2 mx-2" variant="danger">Apply for Visa</Button>
    </div>
</Col>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Row>
                        
                        <Col className='pos'>
          <Image style={{ width: '30rem',  height: "800px"}} src="https://imgcld.yatra.com/ytimages/image/upload/v6982582516/Illustrations/300x600_01_5rLUE6.jpg" fluid />
        </Col>
                        
                   
<h3  className='pos0'> Applying for a Visa Online
</h3>
<Col className='pos1' >

<p>No longer do you have to queue at the Indian Visa Application Center (IVAC) to get the Visa forms and then fill them up and once more drop them back in the same office. Life is much more simpler with the advent of an online visa application process where you can apply visa online to your chosen country of travel with the necessary information regarding your visa processing and subsequently your interview dates online. In case you are not able to complete the visa application online form, you can still save your application and return to it at a later time to complete the form. Once your visa online application is submitted, the form is then verified for its authenticity and also to check if any document is not appropriate. Depending on that you may be asked to re-upload your visa application. Typically, a mail regarding re-upload is sent to you within 24 hours of receiving your online visa form.</p>
</Col>
<h3 className='pos00'>Tourist E Visa with Yatra.com</h3>
<Col className='pos2'>
To apply for an E Visa you need to complete the application form online and pay the visa processing charges using your credit card or e-wallet. You only have to deal directly with us with no embassy visits involved. Of course, the application process involves submission of all the necessary documents as mandated by the ministry of the country you are visiting. You end up saving your valuable time as your e-visa is emailed to you. Now all you need to do is present your passport and the visa document upon entering your destination country. Typically, the documents required for applying include the applicant's photograph, details will be mentioned in your visa application form, scanned passport personal detail page and last page of the passport. The e-visa validity option can range from 30 days double entry, 1 year multiple entries to 5 year multiple entries.

With Yatra you can now book a ticket to any international destination of your choice and you will be supported through the visa application process - from readying up your documents to going for the actual visa interview. Some of the countries offering visa-on-arrival to Indian citizens include Dubai, Thailand, Maldives, Bhutan, Cambodia, Indonesia and Sri Lanka.

Apply for Visa online
</Col>
<Row>
<h3  className='pos0000'> Applying for a Visa Online
</h3>
<Col>
<p  className='pos3'> 
Here's defining the various categories of visa depending on your purpose of visit.
Single Entry Visa : A single entry visa is valid for only one visit to the destination country. Whatever the purpose of your visit, you shall be eligible for just one entry through the validity of your visa. For instance your visa validity date has not expired but you have already visited the country once, you shall still not qualify for another trip to the said country.

Multiple Entry Visa : This entitles you to multiple visits to the country through your visa's validity tenure. This means you can re-enter the country several times without applying for a fresh visa as long as your within the validity tenure of your visa. Multiple entry visas are largely preferred by businessmen for they can never be certain of the number of visits it might take to close a business deal.

Tourist Visa : This kind of visa is allocated to tourists alone when the purpose of your visit is travelling only and not engaging in any form of commerce. When you plan on a holiday to a foreign location solo or with your family, you will be applying for a tourist visa. It is still easier to get such visas. Other than the requisite documents, you need to provide a proof of your hotel stays and return flight tickets aside from showing a certain specified amount in your bank account to ensure to the local authorities that you will be in charge of yourself during your visit to their country.

Residence Visa : While a residence visa doesn't give you the permit to take up employment in a given country, it entitles you to stay for an extended period of time in a particular country. A residence permit or a residence visa is given to a foreign national to stay for an extended though definite period of time. In many cases, a person may have family residing in a foreign country and by applying for a residence visa you can stay with them for a prolonged duration, several months on end. Of course, it does not entitle you to seek any sort of employment in the foreign country in the interim.

Work Visa : A work permit visa entitles you to take up residence as well as employment for a definite period in a given foreign country. You could either be hired for a specific period of time from 6 months to 1 year, depending on your contract, to perform a job in a foreign country offering you the subsequent right to take up residence in the interim. But in case your stay is prolonged, you need to apply for renewal of your work permit visa. Several Indian companies have tie-ups abroad with their counterparts, and you could be send to accomplish a task to the said foreign country for a specific period of time under a work permit visa.

Student Visa : A student visa is issued to students enrolled at qualified educational institutes world wide. These are non-immigrant visa that does not require its holder to acquire citizenship. Any student with the prospect of attaining higher education in a foreign country needs to get a student visa from that country. Though most countries issue student visa to foreign students to let them attend school within their territory, students still need to primarily enroll at a post-secondary institute for higher learning. So, for instance, you need to go to the United States to study, you would require a student visa as well as a non-immigrant visa for temporary stay or an immigrant visa for permanent residence.

Transit Visa : For those people who wish to transit through Australia shall not qualify for a transit without a transit visa. You need a transit visa even if you fly out of the same airport in which you arrived and on the same aircraft. You need a transit visa even if you remain in the transit lounge and do not leave the airport. A transit visa in case of Australia allows you a maximum stay of 72 hours. A transit visa is very different from a 3-day visitor visa. A transit visa establishes the principal purpose of visit of the applicant before transiting to another country through theirs. The support documents needed to get a transit visa comprise an income proof, employment proof, evidence of travel outside the said country, among other related documents.

Apply for Visa online
</p>
</Col>
<h3  className='pos000'> Applying for a Visa Online
</h3>
<Col className='pos4'>
<p>Q. What is a visa and why is it important?

A. A Visa is an official certificate of endorsement on your passport giving you the permission to enter, stay and leave a particular country, whether permanently or for a specific period of time. A visa is issued to you by the immigration authorities of the country you intend to travel to after verifying your credentials, the accuracy of your submitted visa form and other necessary documents. Many countries such as UK and USA among others grant you visa only after an in-person interview with the immigration officers. Of all kinds of visas, tourist visas are less hassle and always easy to gain. Where no physical interview is required a visa is even sent to you electronically. Although, the visa is a grant to entry, your actual entry into a foreign country is only subject to approval from the immigration officer at the point of entry.
Q. Do I need a visa for travel?

A. Yes, you do by all means for every international trip you make. Even if you are a passport holder, the absence of a visa to your destination country may not even qualify you to board a flight, far less get to your destination. You need to have a valid visa to travel to any foreign destination. Though some countries like Thailand, Cambodia, Indonesia among others offer visa-on-arrival. In such a case you will have to carry all the essential documents including proofs of your hotel stay, your return flight tickets and presence of a pre-stated amount in your bank account, only then will you be granted a visa-on-arrival. So, for any international travel, you cannot bypass the visa process.
Q. Does it cost to have a visa processed?

A. Yes, there is a visa processing fee charged by the government of the country you are planning to travel to. The sum varies from one country to the next. This processing fee applies to both regular and e-visas. Now, if you plan to get your visa done through an agent, the agent will charge his commission over and above the pre-fixed processing fee that applies in addition to taxes among others.
Q. How long does it take to process a visa?

A. Typically an e-visa takes 72 hours for processing, and in case more documents are required on your visa you will be intimated of the same within 48 hours and you need to comply in the next 72 hours. In case you take any longer than that, your visa application will be deemed cancelled. For a visa within Asia, you can expect it processed in 5 working days, but for a US visa you will have to wait for 3 to 5 weeks for your visa application to be processed. After processing, you can expect a positive response to your application and the consulate will deliver the document in two working days. Generally, it takes about 5 working days for you to receive your passport once your visa interview is a success. But for a US visa this could be about 10 days. A UK visa, on the other hand, is normally processed within 15 days. Though you are advised to apply about a month prior to your date of travel. You can always track your e-visa application status online.
Q. What is a visa on arrival?

A. Visa on Arrival is an authorisation document provided by the consulate or immigration department of the country you are travelling to only after you have arrived at the destination. This saves you the hassle of going through a lengthy visa application form submission process. In a visa-on-arrival too you need to keep all necessary identification documents handy along with photographs so that the immigration desk can quickly put it together and hand you over your visa-on-arrival. Without the necessary id proofs you shall not be entitled to a visa-on-arrival. Countries that offer the facility of visa-on-arrival to Indian citizens include Thailand, Cambodia, Maldives, Bhutan, Sri Lanka, Indonesia, Myanmar, Laos, Macau in Asia. Serbia in Europe, Bolivia and El Salvador in America, Jordan and Armenia in the Middle East and Kenya, Mauritius, Seychelles and Tanzania in Africa among others.
Q. How do I get a travel visa?

A. When filling up your visa application form you need to establish your purpose of visit, whether it is casually for travel or for business or studies. All travel-related visas qualify as tourist visas which is granted to an individual visiting the country with the sole intention of travelling. To enter the United States, you need to first get a visa which could either be a non-immigrant visa for temporary stay or an immigrant one for permanent residence. The tourist visas are always of the former category for those wishing to enter the United States for purposes of tourism alone, the visa category being B-2. An e-tourist visa could have a one-month validity, a one-year validity, five-year validity or for a continuous stay that does not exceed more than 90 days. For USA, UK, Canada and Japan you can stay continuously provided your stay doesnât exceed beyond 180 days.
Q. What is the process of online visa booking with Yatra.com?

A. For any international ticket booked, Yatra will assist you with the visa application process, by helping you fill up the form, apprising you of the support documents, checking the accuracy of the documents before sending it ahead to the consulate of the country you wish to travel to. It will intimate you of the interview date, if there is one involved, and give you an update of the visa processing status until to finally receive the visa.
Q. How can I track my visa status?

A. In order to check your visa status online you need to go into the enquiry tab of the consulate website of the country you plan to travel to. There you may be required to enter your application id and the passport number. And in case you have submitted your visa forms through an agent website you need to enter your date of birth and your passport number there, and you will get an update on its status.
Q. What are the different types of visa?

A. Tourist visa is granted for 180 days, granting multiple entries, a transit visa allows single entry and is typically valid for 15 days. Business visa can be granted for a maximum of 5 years, making your eligible for multiple entries. An employment visa is usually for a maximum of 2 years or until your employment contract ends. This too is a multiple entry visa. A student visa is granted for 5 years or till the duration of your course, whichever is less. This entitles you to 3 entries per academic year.
Q. What are the documents needed to get a tourist visa?

A. To get a tourist visa you need to hold a valid Indian passport with 6 months or more of validity remaining. A photo id such as a PAN card or a voter id as provided by the Indian government, a proof of your financial standing, your flight return tickets, voucher confirming your hotel stay during your tenure, among other related documents. In case you are staying with a friend, then an official letter of invite from them establishing your residence in the duration of your travel.
Apply for Visa online</p>
</Col>
<h3  className='pos0001'> Popular Visa Destinations</h3>

<h3  className='pos0002'> Popular Visa Types </h3>


<Col className='pos5 bg-light ' style={{ width: '30rem'}} >
<ListGroup >
      <ListGroup.Item disabled>Dubai Visa</ListGroup.Item>
      <ListGroup.Item>Thailand Visa</ListGroup.Item>
      <ListGroup.Item>Sri Lanka Visa</ListGroup.Item>
      <ListGroup.Item>Turkey Visa</ListGroup.Item>
      <ListGroup.Item disabled>Malaysia Visa</ListGroup.Item>
      <ListGroup.Item>Hong Kong Visa</ListGroup.Item>
      <ListGroup.Item>Vietnam Visa</ListGroup.Item>
      <ListGroup.Item>Indonesia Visa</ListGroup.Item>
      <ListGroup.Item disabled>Qatar Visa</ListGroup.Item>
      <ListGroup.Item>Oman Visa</ListGroup.Item>
      <ListGroup.Item>Cambodia Visa</ListGroup.Item>
      <ListGroup.Item>Azerbaijan Visa</ListGroup.Item>
    </ListGroup>
</Col>
<Col className='pos6 bg-light ' style={{ width: '30rem'}} >
<ListGroup >
      <ListGroup.Item disabled>Dubai Visa</ListGroup.Item>
      <ListGroup.Item>Thailand Visa</ListGroup.Item>
      <ListGroup.Item>Sri Lanka Visa</ListGroup.Item>
      <ListGroup.Item>Turkey Visa</ListGroup.Item>
      <ListGroup.Item disabled>Malaysia Visa</ListGroup.Item>
      <ListGroup.Item>Hong Kong Visa</ListGroup.Item>
      <ListGroup.Item>Vietnam Visa</ListGroup.Item>
      <ListGroup.Item>Indonesia Visa</ListGroup.Item>
      <ListGroup.Item disabled>Qatar Visa</ListGroup.Item>
      <ListGroup.Item>Oman Visa</ListGroup.Item>
      <ListGroup.Item>Cambodia Visa</ListGroup.Item>
      <ListGroup.Item>Azerbaijan Visa</ListGroup.Item>
    </ListGroup>
</Col>

</Row>
 </Row>
 <Row className="my-4">
        <Col>
          <Image className='igm7'   style={{ width: '2900px',height:'500px' }} src="https://www.datocms-assets.com/48294/1611758853-11-mailchimp.jpg?auto=format" fluid />
        </Col>
      </Row>
                </Row>

                
            </Container>
        </div>
    );
};

export default VisaPage;
