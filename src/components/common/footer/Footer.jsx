import { BiChevronRight } from "react-icons/bi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
// import PrivateRoute
import PrivateRoute from "../../core/Auth/PrivateRoute"
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Attach scroll to top function to each link in the footer
  useEffect(() => {
    const links = document.querySelectorAll(".linkStyle");
    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });

    return () => {
      // Clean up event listeners when component unmounts
      links.forEach((link) => {
        link.removeEventListener("click", scrollToTop);
      });
    };
  }, []);

  return (
    <div className="bg-primary text-white">
      <Container className="">
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
            <div
              className="useful"
              style={{ listStyleType: "none", color: "white" }}
            >
              <h2 className="mb-4">Useful Links</h2>
             
                  <p>
                    <i>
                      <BiChevronRight />
                    </i>
                    
                    
                    <Link to="/newadmission" className="linkStyle">
                      New Admission
                    </Link>
                  </p>
                
                  <p>
                    <i>
                      <BiChevronRight />
                    </i>
                    <Link to="/exitfrom" className="linkStyle">
                      EXIT STUDENT
                    </Link>
                  </p>
                  <p>
                    <i>
                      <BiChevronRight />
                    </i>
                    <Link to="/pgcource" className="linkStyle">
                      PG PROGRAM
                    </Link>
                  </p>
                  <p>
                    <i>
                      <BiChevronRight />
                    </i>
                    <Link to="/job" className="linkStyle">
                      JOB
                    </Link>
                  </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12} className="mb-4">
            <div className="service">
              <h2 className="mb-4">Categorys</h2>
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
