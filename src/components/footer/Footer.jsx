import { BiChevronRight } from "react-icons/bi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <Container className="my-4">
        <Row className="py-5">
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <div className="metor">
              <h2 className="mb-4">UNIVERSITY</h2>
              <p>
                UNIVERSITY OF KALYANI <br />
                NADIA, KALYANI <br />
                WEST BENGAL <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> gmfaizy2002@gmail.com
                <br />
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <div className="usefull">
              <h2 className="mb-4">Categories</h2>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Education
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                International
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Learning
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Masonry
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Traning
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <div className="service">
              <h2 className="mb-4">Useful Links</h2>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Web Design
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Web Development
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Product Management
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Marketing
              </p>
              <p>
                <i>
                  <BiChevronRight />
                </i>
                Graphic Design
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <div className="Our">
              <h2 className="mb-4">Join Our Newsletter</h2>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              {/* <div className="search-container">
                <Form className='from'>
                  <Form.Control className='input' type="email" name="email" />
                  <Button className='click' type="submit" value="Subscribe">Subscribe</Button>
                </Form>
              </div> */}

              <div className="search-container d-flex">
                <Form className="from">
                  <Form.Control
                    className="input me-2"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </Form>
                <Button className="click" type="submit" value="Subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
