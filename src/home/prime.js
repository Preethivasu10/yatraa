import React from 'react';
import { Navbar, Nav, Container, Card, Button, Row, Col,Image ,ListGroup} from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGoogle, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcRupay } from 'react-icons/fa';

import './prime.css';
import { Link } from 'react-router-dom';
// import './visa.css';

const Primepage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACTCAMAAAAN4ao8AAAA9lBMVEX////qIzDqHizpIzDqIC7//f770dPsPknqIC3qHCrpEyTmIzDiIi/pFibqGCr84OHUICzaIS3AHSj71dj1n6T+7/CxGyXpDSDOHyvpABv72tynGiO4HCbIHyrtS1X+9fbtRE/uVV795+j3tLjzh43xdn36ys3vXWb4v8L3sLTrMj70lZrwbHTrLDnsOkXzi5H2p6zpABH4ur3yfoTvWmPxc3v0kpj1nKLLEB/vZm3pqKy4LjjrycynDhvcAxvCNT7RLDfVOUPXaG6+CBvIVV3isLTSRE3gjZK+ABfWfIKvBRbeVF2/QEjemp7ULzrifYPfpai3Q0oUq4tyAAAUsklEQVR4nO1da5uiSLIWBQuw0LpRWdhV4hXxgtpqWeWZ7trt7ZntOXWmd/b8/z9zwCtEREKC+vTZHt8Pu89UIwQvkZGRccnM5f7TYE87F6NRbVxUfrQkPxV6fabJspzXWeP2R8vyE2HB8tIGhuf8aGl+GkwtWdpB6zd/tDw/CZSaJoXAXn60QD8JKpIc5lXr/miBfhIU1TCtUv7iRwv0k6CYB7yefa2j4MzraXDm9TQ483oanHk9Dc68ngZnXk+DM6+nwZnX0+DM62lw5vU0OPN6Gpx5PQ3OvJ4GZ15Pg/9AXv//S+ijKgNef7RA8bBb87JeWE5PyK1tFluTdmc5r48K5Q36tc7EMZMeWm3XCztIANu/e6N6o9uZuBX7yO+gmMVpbzAbdmsXI2/9OKleayzbApI7dabJkmpYtZMkju3iXbs7MhhjumFoWl7eQtX8Pxq1tmPH/Pouv6oX2ADyurtVXtP8u+mGNx+7R8rSmtXeuDsq63oguC+3qm4eFjxLZ3q+PpuaMb93ytskp6a3jyPSHtXJsh+IpUJGdvBFHM2KvN9PGP+XFFRN173G+FAFUYqDbl/XdV8LuI+SNUP3htxBXunvc8cym8d9gbTCOTPPV8hkYvK6VW+RSluR09G6eWHd8hbVzHLb7rNksRhV2MMf5KUBPT5mevhCvVbJLE8UZq/GdGFWNHbRI778WE/+Kf3CernrZrG1vjL0mcHXUvwkJrUJZk0v+u7G6CjmqdnuM40jCQ2NzVHBlV1Ld48wZENvtNKKbd7VdIEBBp6kews02lyoEcbF4RprjnVxVd0/2WoD8apSCsXB0Kw+NQi4qLTLKZVhA5X1oUXvMfR6jUNtbK+vZ+OD1aMTWDGrGdgizxrCU1h1Vs4otg+tPIh+wRbiVWKzg1itdlmeeLKYePnI0D2YV/+ORkfIsJkzKY1VRZBZNzLYHANfY/Wys6oM9Ow20R9RVriW7RZ7rKkh68YkWeqJlF1XN9DrYQNq9rEhVL3MToo5ZIfJJ7NF6G4XmTU/cstOgmXzh1gGfw5CuwjTRrkyxjLjcrBSO3jkyuHqyw4xmjJAr3MXHj6Ul8JxHqP1Qxpr1olxy5KHDgUnf4gN2EC29g93DrJ5e2jsjit0c37gENvDGIWIvZUxGaqUxYvtqccYtpKqurtbzvC0mgmyvuAI7YyOo6wrGOHJy+njO+vPGWgV9ajJEEoIoQJ3e2hpR9EmWae9nAmhVQcgEmExu9gq6tO0tLbibb+qGTqzmK4beTWAwSydtwbX9/ZdmdQK+Q1UWSpEIMmbfykHt46L7kgFiT3jEIQys5K+mpwPwm5BTKu8kqHMYh9lhXmza0hjtVpc9I6AK8XErHxR+vNO+851HKdYXeHWaY2XnkUbUBby9JTm7QbV/7qP4pfi5l+Kjjt96cxHjLteKhRKxjOcje1OvJnRdIt59W5n0HJ9ydcPK7pu62XW5T1Kq4d9j+YFuijl1FUscGyrrFlWbeFUSFfHdGZlSs3zdJTi0+cPEfwCb3d712X0p/J5Lb2BMKgyjPFe8oYv93habdL6ZVYnXUaJro/Dl9168JJ8P81ytlKgFUVlarcVeyNz4BFvx8bUtZ8egb4S7qDZW5bw+/pGo3R5+TYIX6k8c7VV1fVRfNR69dJjD68mZDni/E/QM9iAdz/iZejAk8z6g+QlRnOmI11XPUphP908RvA32s2uLDzkOvnqeukjPAjbPG3VWH8Wm8TYi942kOhGdIKcQxOrpmg761Aiykx6EdN5F2s76XB+erqJgMOr/74vclSTCiter69f92GYBYdWzbroiQ9VLLqcj/BWQZaACWdlsLIH8hkzYfEqF/CranVCYYoPTxF84S8Lmx0j9MJbWq+u/r596QntCWiskS4ejkUH7Xp38PvJomGCKuUKsHqaJFMFTZw68fPi1UMEMbz6bnlt/7V3vD68/mP9G4fM8MjsopfSD8pV4IJVa0RugYPzHFcaQkEmxIc1TBfFRRMntUAq+goXRiyvObNjbe+54fXq6uHp9fvq36jVu6+sgwyx5yJY5MhqNPHhIIOjCynsCzZUsp66dbUH7gK++voNrqOI59W/58b47c2Ab0i+Bm+9pIyrXsvWev8CzKAO5oYh1Du9I3BXIlkiZ4nbNKIaJHs4H1QMyNnjsp5kCYueFuH14eHp5v1XhZwQZNbOmCixR1GnwABBgEoBjEVZFviAXTSi5JjoER8w06a76JLiylfaI5HXXHUVVVk5r2sz8HTz+P4bnqODtVW2GF4AMGLRWnWAkoho6YeAE2SpPN89FBDEJnS+6OtdCKpA3VvTN6RhM3Bz83j/SwMbVw1l/lKgGrWwcgF4qCg+L6txAeHVT0bIMc6aH5tFzZCOl1xFuVDyOQrYDf5PFqknrPa1CK+Pj/c3hLZeZK/jwFO+AW+G7A40FQhIxSV9ntZT2T48yquBjXsxGtAS0dfAeKh7b8Dn9f7+mtDWQ2hFM5MBdV9B2sfiLSwyyf6Xz1rY4Zajwi3RFWj/ASEP3jUKETPwdHRa0VBDQdYJsrDxLsEMuhByGU83gnCirGkNdEXGuuKxHjEDl5BWuXxondwY8IoS2jb0l2UpTmErKO5vkYEoIZyMV7uhrb2slRnA6poxmxcC5BXfsIV92BjhUb5UNByurBD9mxP9RsfjNVcNmYFHpK7EBJkoO/hTMq829EHkAl9hqyWgrolWQGkWWy/tzrBb89EYzsYvPbfa3C7ZT8VrbvG2NQNYXUVVwa44vUEgesPHsjN+mUyL22h9Mq+4sCgmSoCsa/wCrXo3rMssSHEZ2gqGoQfl0IV6dzYpBrP9qXg1Ly63ZuAKqgIV4EFwFsugdFvXN5JrgeT+f40azwO3khsk85pD4RfGmyybBSCjSqw9t6gORhYzyPrndWrO6Ef/ekxec723jRm4gT0KyTXqijMr8eqMg1p+S/dG0dcieXWREvIUFgVcuBuFKe7SSKyGA5QflVf7y/XaDFyBh+ZHCUGB5qSWWHOuAtFJXpU5srC0wsKFJz8l5vqixUtGQGsg1g7o35q8Pay8rBJ4SkIow37xMtTx0aEGpwwvo10CVJLM8VeqcytL7cNxeTW/rMwAnLXItMQerX6mgjiaVwVGqDguwRDGyeuUutov5WwVJcflNffna6CucAkb67pWhhkreTmhMVfIJajCWYscUs1G1qoyrXZUXp1XwgyoXox1bXlZK7dgYHsL6BLIVOKgDZ5KzgDFUuaqsiPzav/zCZuBuCXBwMpcxcfjdSrgEqCCZCrq6krZq8qOzGvu2+/YGyhz4y1K+4DqTR6vCl50IQFgPopKhrnSAYWbx+bV/R2tYQkTvkX7kAJRHq8wZEcpLMru4rCeUz6kHvbYvJq+eRV9/9zYOkBy/n2xDwtrCVC/B0Mxx8rooNLSY/Oq/ArNKz991zusTpz/vaZwGMDil2fAK3aybKqsIAWOzWvuv98f4BM4zmsRRevTgc8rGuaw6ijZyRofWMJ+dF6/vwPv1eAs0G1ctZoOMby20GIqUn/yAnQRZ/tveS3meU1nlvXxo+UjaKHnjbij8/rbO5i2GKd/dsHTiFXJuRVIvtqTgNtEH8MrShxEygsV6OGidA1atK0gG9bH0XAxcZ1qtehMe3fjYa3kU0wFuo7OaxXGssq0eUULnvXDdIvVngPRbwPJJ4vOfGT4klPF/DG84sRBWGHRrGXBfDiKigWsssIzLtZV7Or0ZXhRYKBG9+i8Vm6i4qh92rxSTWMaG+F9PRS76Uzajb4GS+LjeIU58YIcUlg0ayEOCHU11DE/PKtUnD+vLsPBwqPz2vx7YgItAKWucWWGinnb+p/rSzkkehyv0UKWIF2/r/AzYf4FhS+K6JvL1jwhmfzp84f7x4edgMfn9Qsoo6KTG7iMW2PjhCDtt8/3jzdXpa3osbwqu1lxWwdR2tXkgkerqM0CjSU59lkrfPp8v+rGeHy4LgT9Hsfm1QS80lF4uNGFT+soqegn9+39/v7+w/39zdVlwec2/l137K1JLZX0TQQArRpQLgMLx5J7xD+9r7sxfGqDr6+emlec5Q+A8nuRrlcOvn0N2h1W0j/ePFzG82qv8wGFLa2l0kYtb2HKBNXN4JA3r40yhHVXxo7bz38cm9c64JXMHcOpQ5UStTXgNWh3eNzK//499upAYfekXu76dGCEEJcAw0StMRRg4NPXrWwr6Y7Oa3MEtrKhErE2uEgyRDZj+Pb69LTpKQmkT+DVrucjtF5erhQWltFKFpy1YBECL0MWhfOwFW7N7dF5BZFNg3JfwSMkrSvyjG+vD5uWkpX8X+N5zU1YhNXL67fA1E/BIJdlOGs1vaihSCjy2sAJujJC0p2aVzL4Cst5mVC52eJ101GyFv/3BF79QRFmNYBPIZy1MGugwkKyhOrKnKAk5Wov3j9Pra8Ur6ByRfARPq9rrNl9TeA1d2fsaF2xevX2LVeBS05cMALWaok5+jWc6127y0q6o/M6kiPN4KS+gkpWwZ0FFyt6dn06ibyao0KYVR//MmElMRFtA61gRCUrBWfblbGR7ti8Qn+gTPhPcGbQxbY2W7xdXoeEf00sUJwYO1rXivT6J5COSsOCQhjBgj0n9AkD/BBeYUW7WOfRQrsM2crrt0RezXoppKyB5UN1YyUsHlBpwT4Op7Bvdwm6iI6+LsjAKz+xGMHCKIVbdd6S+4Hu3i7DrD49wcoGyjUFLb0iiwIfrrxpd9lI9yN4hY3pgryOjW2PzprX5EJle3S5YzUodHyC9XgW4YgA+ypo/KdlaectB11Ex613yWgHBBZbuWAdFJa8JLATWm7yFlLWmxtUj3dBBNBAXCaxqWb/q12Ip1TK49M2T88rDH0YYt0SvhfhOxi7RZTIGs381/We1ZsbWEVO2s5e1FmJSdOHsV8erwTUhuiK0/OaWwJ/QKhzMqTlK3oNkU2HJq8PO1ofQUaTs0J1oi8gk2+AAMMiVF9cZNLMj47PK4hsiLmI0KUX8iLMLztlxfV4dEAFZmuFGk5gopGILIIWZ/UEvIKpAbVkkoA/iqum2+P765ZVooqc1HjYDyrUGoFiYHjxC75XbDUgIZUIr7CWUqSFGhZYC3aC2F+2tKK6MV5ZLuy4F1BY0LtL5CBQPEeWUrUJCvFaASEjkV1uYPcrry4B4vvXdejuHleRcxoKYKImnxhzt7swqEvs6QmDo+k2pRPiFZX8JcfiKrCykk5EEAL9baWs9x/QrIUihBtUyzCjkNSMjLJ11ABEXlCqznEhXvE2RUn7EhAdb6LD6N/v6/QIVFd+axduVlrG2kJUdCTLArO1KpB62kOM1yqSJN6ImQ3UUiwWZvJh/xFo6wdQ1+BLxo2rov5lSa/xly7mEO+eTgqX1ZKtnyLEKzIEkqzDfepDKNZRRp9XnkTg3+9BJg86WRp/cDdLqLpGk184btGU2ILVIoW7RfsjpNgKXIxXau8Xrk4oC1yQrkriXoryx2dCXeNy18RuajLziDM/zF6dKOSndiPKEak1mVGHXdAQ5JXaAkpjXRcLVBng/fpimgMp/PYZq2ue7CvaACY91p+SlZeT2+ZWbRWz2pt55H6fvLGEa6d0b+Zu97xUzIrTW4wnNNWCvBI2TFoXaE33m4Lazdu7ZZk6/EIwObK9z/9+hkXkkhX7YQZksaNs6LpXnw9n7dlzt9bXOS2SRpdjYfAeX8EtvXqjO3xeNmqjPAs6mQsLyuKI8so5PSVv6PlRYzlrj2fP87qn65yta9NtZvDbZ6iuCasdVMq5JyIfNHIHPd28qmiw12fiOwdHYq16xDeNqqpF7aMkymvO4dW/BkeGGet2dF7pqyGUFw/R9Cva+SUhC+BAH1YcFv/W5CDFoIycMK8H7JYuk0neOKD6msQFHtxeThj6ku/X2GLNINT+seK8crazFUDqLU3g5oYiyRX+fsCxiN/RiNgHjXxBrLDivOaqXjZi028dBpuM47Zw2MKeZzl9Q/Nio5cK2kWRvgu2cyl4zbmZjmJgMQONRhEaS6FNd81Geo01CgkppfDBgXwQ4bA0vObcDEeHMJ4XwweKLfAiLlHYeIGaAL2eaPgdke5QIviRilfytIz4J7JOalpRsS29XzuG0k63MYLVFfheU7zPOX5LXNaQjtdctZ7KiqnWIJ2HlaOajgSs6waTsvh316yZ0Cefcnb1D0tI2IGLVLzmmkNLXCf0QurDFImzpNLsRNrsCh4aqLIL0f3sqrWkLnYNZ8nBmgJ0UFJoEecT0E9jwwy7MqIdiTnHYXCgkJEViCAqI76yttsJ29lQMaGoJ5GwtcsKlbYsYAzyrJZBWYleLFSgnQB70k84lkizyuN0X9ypxe3GY1DlItFmarG4U6VDnlayh2xYI/pQ4STcoQ6RtGfyBBtozQ3ecbeyxlh9knpva6XV0HlKy3HWwutTYaeouegz3nNUg2U8/5c6Oib9GVIBqpOlh7ZNC858LjcGYqeGQCjOuM5YpHNZzgetwXqX9oHt2dbUa1Z8XigC023XDAu28Koas7zlJNsW8lQEKfPphznTGXS9TT80s4Kmbqk2dptZbxdIV73r1NSPq+7w4H/V+rJ951a4d3Qbqz7yj/VWuofalVanXv64Fn11B8vrDpwDzoZ+RsdwxGywKYCgWddtTe4mvalTsQ+gdA/bbt46rnNbMe1kvW+6vZ6bjQ/bvHWnrV6v13IPFh0HpQSrWc+IwxQFUbVU53KdQcItIx8j26R1RhgUrXHbQp8hhBY+szBFYOAMDhbEQoMulzhDHNUuETrVRfqyz+DDbFM7Nmqp4i1nANhOp0wFyOT8oedS/FXRdHov7aXHiZDEF7icwcO0WwhOF+BF9FjmuMBfGklHtxu180IrC5LOAD/0LKW/KJz4LU+1slin6BkA1K58IVpLZ1cgG+DhGRHkz7RmhE3VV++NwJnWjIjj1bg4KEPw1wa/5JOJ1PacwQHcHG9nWj+mL+c6Yw9qg+GgCmWU+XzNMwKg2raVZTVm50XWgUAF5rLxsXuesA7HzAoXjmjM65xZPQaUth4U7MqrsxClOadr74z0uG3XPG9Un7cnxbNZPQj/B6mCBQfMpMrUAAAAAElFTkSuQmCC" // Replace with your car image URL
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
            <img
            src="            https://www.yatra.com/prime/static/media/desktop_banner.d8ef26826da9a6277954.png
            " // Replace with your car image URL
            alt="Car"
            style={{ width: '90rem', height: 'auto' }}
          />
<img
            src="  https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/9769a975-777e-4fd7-9151-a3df1dafe2cb/Yatra+Prime+02.jpg          
            " // Replace with your car image URL
            alt="Car"
            style={{ width: '90rem', height: 'auto' }}
          />
          
           <Row style={{ backgroundColor: "lightcoral" }} >
    <Row>
        <Col md={6}>
            <Card style={{ width: '70rem', alignContent: "center" }} className='carddd1 '>
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
                            <Button className="form-control mb-2 mx-2" variant="danger">Apply for Visa</Button>
                        </div>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <Card style={{ width: '70rem' }} className='carddd12'>
                <Card.Body>
                    <Card.Title>Add your GST Details (Optional) Claim credit of GST charges. Your taxes may get updated post submitting your GST details.</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Row>


          <Row>
          <footer  className='FOOTR1' style={{ backgroundColor: '#f8f9fa', padding: '20px', marginTop: '20px' }}>
      <Row>
      <Link className="navbar-brand" to="/">
            <img  className="navbar-brand1"src="https://entrackr.com/storage/2024/02/Yatra.png" alt="Your Logo" />
          </Link>
        {/* Left Section - Social Media Icons */}
        <Col xs={6} md={3}style={{ textAlign:'center' }}className="align-items-center "> 
          <h5>Follow Us</h5>
          <div>
            <FaFacebook size={30} style={{ marginRight: '10px' }} />
            <FaInstagram size={30} style={{ marginRight: '10px' }} />
            <FaTwitter size={30} style={{ marginRight: '10px' }} />
            <FaYoutube size={30} style={{ marginRight: '10px' }} />
            <FaGoogle size={30} />
          </div>
        </Col>

        {/* Right Section - Card Logos */}
        <Col  xs={6} md={9} className="d-flex align-items-right justify-content-end">
          <Image src="data:image/png;base64,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" alt="Visa" style={{ height: '40px', marginRight: '10px' }} />
          <Image src="https://analyticsindiamag.com/wp-content/uploads/2013/09/mastercard-1024x618.gif" alt="Mastercard" style={{ height: '40px', marginRight: '10px' }} />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wkphpZuTMydYMFDU8uaZJfbx-bTHXxS6pLdHtnzlYsbIQ9ku1kIqZTku7RhwAjb8qtY&usqp=CAU" alt="American Express" style={{ height: '40px', marginRight: '10px' }} />
          
          {/* Add more card logos as needed */}
        </Col>
      </Row>
      
    </footer>
   
    
    </Row>
         
            </div>


);
}
export default Primepage;