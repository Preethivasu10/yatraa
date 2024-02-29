// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faUmbrella, faBus, faTaxi, faPassport } from '@fortawesome/free-solid-svg-icons';
import './menu.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Row } from 'react-bootstrap';
import { Container, Col,Button,Image } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import './content.css';

const Header = () => {
  return (
    <div className='maindiv'>
      <header className='header navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img  className="navbar-brand1"src="data:image/png;base64,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" alt="Your Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <nav className="navbar-nav ml-auto">
              <Link className="nav-link" to="/flights">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                </div>
              </Link>
              <Link className="nav-link" to="/hotels">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faHotel} />
                  <span>Hotels</span>
                </div>
              </Link>
              <Link className="nav-link" to="/holidays">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faUmbrella} />
                  <span>Holidays</span>
                </div>
              </Link>
             
              <Link className="nav-link" to="/cabs">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Cabs</span>
                </div>
              </Link>
              <Link className="nav-link" to="/visa">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faPassport} />
                  <span>Visa</span>
                </div>
              </Link>
            </nav>
            <div className="more-dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="moreDropdown">
          <span className="button-text">+ More</span>
          {/* <span className="icon">&#9660;</span> */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#link-1">Option 1</Dropdown.Item>
          <Dropdown.Item href="#link-2">Option 2</Dropdown.Item>
          <Dropdown.Item href="#link-1">Option 1</Dropdown.Item>
          <Dropdown.Item href="#link-2">Option 2</Dropdown.Item>
         
          <Dropdown.Item href="#link-3">Separated link</Dropdown.Item>
          <Dropdown.Item href="#link-2">Option 2</Dropdown.Item>
         
          <Dropdown.Item href="#link-3">Separated link</Dropdown.Item>
          <Dropdown.Item href="#link-3">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
            <Link className="navbar-brand" to="/prime">
            <img  className="navbar-brand1"src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/9769a975-777e-4fd7-9151-a3df1dafe2cb/Yatra+Prime+02.jpg" alt="Your Logo" />
          </Link>
            
            <div className="account-support">
            <div className="more-dropdown">
      <Dropdown >
        <Dropdown.Toggle variant="outline-light" id="moreDropdown">
          <span className="button-text">MY Account</span>
          {/* <span className="icon">&#9660;</span> */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/login">login</Dropdown.Item>
          <Dropdown.Item href="#link-2">Sign Up</Dropdown.Item>
          
          
        </Dropdown.Menu>
      </Dropdown>
    </div>

        
        <Link to="/support">Support</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/visa" target="_blank">
      YatraBusiness
    </Link>
        {/* <Link to="/offers"> Yatra New</Link> */}
      </div>
          </div>
        </div>

      </header>
        <div  className="text-right1">
    <Container className="text-right2">
      <Row className="my-4">
        <Col>
          <Image style={{ width: '50rem' }} src="https://www.yatra.com/ythomepagecms/media/banner/2024/Feb/edd9b5cd7e586f8d1c2a18a929dafe92.png" fluid />
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.yatra.com/ythomepagecms/media/double_banner/2023/Mar/b1cacd5dd469c8ba89676af1eaa96f19.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.yatra.com/ythomepagecms/media/double_banner/2024/Jan/17711016811cc125fd4278782e6fe33f.jpg" thumbnail />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Image style={{ width: '50rem' }} src="https://www.yatra.com/ythomepagecms/media/imagemanager/2024/Jan/4cc7e39c785262bb57c5dc86df9be1ff.jpg" fluid />
        </Col>
      </Row>

      <h1>Hotel Discounts For You</h1>

      <Row className="custom-row">
        <Col xs={4}>
          <Image src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/cbcac707a63f1d3fd6c1f2ae5a9609ee.jpg" thumbnail />
        </Col>
        <Col xs={4}>
          <Image  className="new1" src="https://www.yatra.com/ythomepagecms/media/todayspick/2023/Jun/f711619573498d233030082266fed82d.jpg" thumbnail />
        </Col>
        <Col xs={4}>
          <Image className="new2" src="https://www.yatra.com/ythomepagecms/media/todayspick/2024/Jan/c97341e4d27698e1d54bad64c11f555d.jpg" thumbnail />
        </Col>
      </Row>
      
      <div className='new3'>
      <h2>  Book Domestic and International Flight Tickets</h2>
      <p>Planning a travel? Look no beyond Yatra to book your flight tickets  as it offers you some terrific advantages apart from the availability of cheap air tickets on significant routes through the year. Booking flights is now easier than before as the interface whether app or the website has been made more lucid with abundant add-on features and payment options. In addition to that you can look up the latest ongoing discounts and deals on Yatra’s Offers page under domestic and international flights tab. It would show you exclusive airline discounts, to offers on payment with a specific bank or eWallet. These range from flat-rate discounts, to easy EMI options with no-cost EMI on making your . It is now possible to book a flight on Yatra and enjoy the benefit of free cancellation. Whether it is additional baggage or a meal, reserve it at the time of making the booking and enjoy a hassle-free flight. Here we suggest why it is a good idea to book your flights with Yatra.com:</p>
    <h2>Book Akasa Air on Yatra</h2>
    <p>You can now book with Yatra. Akasa Air is the newest commercial airline on the block based out of Mumbai. Billed as a low-cost carrier,  with its hubs in Bangalore and Mumbai operates a robust network of flights connecting all major metros and several tier 2 and tier 3 cities. The airline presently operates with a fleet of Boeing 737 MAX 8 and Boeing 737 MAX200, with a total of 17 aircraft in service, and plan to more than double its fleet size in the coming five years. The airlines prides itself in plying one of the greenest fleet in the country, courtesy the highly fuel-efficient CFM LEAP-1B engine, and the 737 MAX family of aircraft offering the lowest seat-mile costs on a single-aisle aircraft and an enhanced passenger experience and 50% lesser noise. Add to it the Boeing Sky Interior that comes with ambient LED lighting, window reveals and sculpted sidewalls. Some of Akasa Air’s significant routes comprise Ahmedabad to Delhi, Delhi to Bangalore, Ahmedabad to Mumbai, Ahmedabad to Goa, Ahmedabad to Hyderabad, Ahmedabad to Bangalore, Delhi to Ahmedabad, Delhi to Mumbai, Lucknow to Mumbai, Mumbai to Goa, Mumbai to Delhi, Mumbai to Lucknow, Mumbai to Bangalore, Mumbai to Chennai, Bangalore to Chennai, Bangalore to Goa, Bangalore to Mumbai, Bangalore to Pune, Bangalore to Ahmedabad, Bangalore to Hyderabad, Bangalore to Delhi, Bangalore to Lucknow, Bangalore to Varanasi, Goa to Ahmedabad, Goa to Mumbai, Goa to Hyderabad, Goa to Bangalore, Pune to Bangalore, Hyderabad to Ahmedabad, Hyderabad to Goa, Hyderabad to Bangalore, Lucknow to Bangalore, Varanasi to Bangalore, Agartala to Guwahati, Guwahati to Agartala, Guwahati to Bangalore, Visakhapatnam to Bangalore, Chennai to Bangalore, Chennai to Kochi, Chennai to Mumbai, Kochi to Chennai, Kochi to Bangalore, Bangalore to Kochi, Bangalore to Guwahati and Bangalore to Visakhapatnam among others.</p>
     <h3>Attractive Flight Offers on Yatra.com</h3>
<p>It is the desire of every traveller to get some discount on his air ticket. Ahead of making your booking, browse Yatra’s Offers page for some ongoing offers on  flight ticket booking whether domestic or international. You would come across an array of discounts announced in tie-up with various banks, typically Standard Chartered, Axis Bank, State Bank of India, Yes Bank, Kotak Mahindra Bank, ICICI Bank, American Express, HDFC Bank to name a few. The discounts also pan across UPI payments and payment with eWallets. Yatra offers travellers an option to pay in easy EMIs with no interest on a three or six month duration. Just don’t forget to mention the promo code at the time of making the payment to avail the offer. One of Yatra’s easy EMI options includes the payment with your Citibank credit card and get a flat 12% off on  and flat 10% off on international flights in addition to a no-cost EMI on applying the coupon code. YRCITIEMI is the code to avail the offer. There are easy EMI options on Bank of Baroda as well as ICICI Bank credit cards that offer flat 12% off on  domestic flights  and 10% on international flights, aside from the advantage of a no-cost EMI for three or six months. The respective promo codes being YRBOBCCEMI and YTICICIEMI. Use your AMEX card to pay for your flights and get a flat 16% discount on domestic flights and 12% off on on using the promo code AMEXMONDAYS. Make sure you use an offer within the stipulated time-frame.</p>
<h3>Country’s Biggest Platform for Business Travel</h3>
<p>If you are a frequent business traveller, it makes sense for you to sign up with Yatra and enjoy special benefits such as special airline fares with complimentary meals, no reschedule fee,  hotel booking  offers at negotiated rates that come with rather low cancellation fee. A business traveller on the Yatra platform is provided access to a travel report that helps him track his savings, and thus manage his expenses. And more importantly, reap the benefits of a fast and easy checkout where you can use a centralised wallet with no reimbursement hassle.</p>
<h3>Multiple Payment Options for Flight Booking</h3>
<p>You have the option of paying with multiple modes on your air ticket booking. The payment gateway offers you the option to pay with credit and debit cards, netbanking, eWallets, UPI whether you make full payment or on EMI basis. This flexibility makes it easy to close your flight booking, and not make you feel restricted, such as when the mode of payment you have chosen is not listed in the options.</p>

</div>
<div className='new4'>
<h1>Flight Booking FAQs</h1>

<h3>Q. What are the advantages of online flight booking?</h3>
<p>A: Online flight booking offers several advantages for travelers, which is why it has become the preferred method of booking flights for many people. Here are some of the key advantages:
    <ol>
        <li><strong>Convenience:</strong> Allows you to search for and book flights from the comfort of your own home or wherever you have internet access.</li>
        <li><strong>Wide Range of Options:</strong> Online booking platforms typically provide access to a vast range of flight options, airlines, and destinations.</li>
        <li><strong>Cost Savings:</strong> Helps travelers to find competitive fares and take advantage of special deals, discounts, and promotions.</li>
        <li><strong>Seat Selection and Customization:</strong> Many online booking systems allow you to choose your preferred seats, meal options, and add-on services.</li>
        <li><strong>Easy Price Comparison:</strong> Makes it easy to compare prices and amenities across multiple airlines and travel websites.</li>
        <li><strong>Secure Payment Options:</strong> Reputable online booking platforms offer secure payment methods, ensuring that your personal and financial information is protected.</li>
        <li><strong>Accessibility:</strong> Online flight booking is accessible to travelers worldwide, allowing people from different locations and time zones to make reservations and plan their trips.</li>
    </ol>
</p><h1>Flight Booking FAQs</h1>

<h3>Q. What are the advantages of online flight booking?</h3>
<p>A: Online flight booking offers several advantages for travelers, which is why it has become the preferred method of booking flights for many people. Here are some of the key advantages:
    <ol>
        <li><strong>Convenience:</strong> Allows you to search for and book flights from the comfort of your own home or wherever you have internet access.</li>
        <li><strong>Wide Range of Options:</strong> Online booking platforms typically provide access to a vast range of flight options, airlines, and destinations.</li>
        <li><strong>Cost Savings:</strong> Helps travelers to find competitive fares and take advantage of special deals, discounts, and promotions.</li>
        <li><strong>Seat Selection and Customization:</strong> Many online booking systems allow you to choose your preferred seats, meal options, and add-on services.</li>
        <li><strong>Easy Price Comparison:</strong> Makes it easy to compare prices and amenities across multiple airlines and travel websites.</li>
        <li><strong>Secure Payment Options:</strong> Reputable online booking platforms offer secure payment methods, ensuring that your personal and financial information is protected.</li>
        <li><strong>Accessibility:</strong> Online flight booking is accessible to travelers worldwide, allowing people from different locations and time zones to make reservations and plan their trips.</li>
    </ol>
</p>
<h3>Q. How can I book flight tickets online?</h3>
<p>A: With the help of Yatra.com, you can easily book both domestic flight tickets and international air tickets in simple steps within a few seconds. Find the steps below:
    <ol>
        <li><strong>Visit the Yatra Website or App:</strong> Open your web browser and go to the Yatra website or download the Yatra mobile app if you haven't already.</li>
        <li><strong>Create or Log into Your Account:</strong> If you don't have a Yatra account, you may need to sign up by providing your email address and creating a password. If you already have an account, log in using your credentials.</li>
        <li><strong>Enter Your Travel Details:</strong> On Yatra, you'll find a flight booking section. Enter your departure city or airport, arrival city or airport, travel dates (departure and return), and the number of passengers (adults, children, infants).</li>
        <li><strong>Click on "Search Flights" or Similar:</strong> After entering your travel details, click on the "Search Flights" button or a similar option. Yatra will then display a list of available flights that match your criteria.</li>
        <li><strong>Choose Your Flight:</strong> Browse through the list of flight options and use filters to sort the results by price, duration, airline, or other preferences. Click on the flight that suits your needs.</li>
        <li><strong>Review Flight Details:</strong> Carefully review the flight details, including flight times, layovers, and prices. Make sure it matches your travel plans.</li>
        <li><strong>Select Seats and Add-Ons:</strong> Some airlines and booking platforms offer the option to select seats and add extras like baggage, meals, or travel insurance. If you wish to make any selections, do so during this step.</li>
        <li><strong>Enter Passenger Information:</strong> Fill in the required information for all passengers, including their names, contact details, and any necessary identification details.</li>
        <li><strong>Payment and Billing:</strong> Choose your preferred payment method (credit/debit card, net banking, etc.) and enter the necessary payment details. Review the total cost, including taxes and fees.</li>
        <li><strong>Review and Confirm:</strong> Double-check all the information you've entered for accuracy, including passenger details and payment information.</li>
        <li><strong>Complete the Booking:</strong> Click the "Book Now" or "Complete Booking" button to confirm your flight booking. You may receive a booking confirmation email with your e-ticket.</li>
        <li><strong>Check Your Email:</strong> Keep an eye on your email inbox for the booking confirmation and e-ticket. Yatra may also provide additional instructions and details.</li>
        <li><strong>Manage Your Booking (if needed):</strong> If you need to make changes or additions to your booking, you can log in to your Yatra account and access the "My Bookings" section to manage your reservation.</li>
    </ol>
</p>

</div>
<div className='new6'> 
<Button className='new5' variant="outline-dark">
      Customer Testimonial for COVID Refund
    </Button>
    
  
<div className='new7'>
<Col><Image style={{ width: '50rem' }} src="https://d3oqpwy03c1jnz.cloudfront.net/AcuCustom/Sitename/DAM/016/Financial_Advisory_IPO_Clients_Aug_20.svg" fluid /> </Col>
Copyright © 2024 Yatra Online Limited (formerly Yatra Online Private Limited), India. All rights reserved</div>
</div>
    </Container>

    </div>
    </div>
   
  );
};

export default Header;
