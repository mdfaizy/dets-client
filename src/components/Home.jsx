import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import image from "../assets/image1.jpg";
import Faculty from "./about/Faculty";





function Home() {
  return (
    <>
 
      <Carousel data-bs-theme="dark" className="">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://klyuniv.ac.in/wp-content/uploads/2023/03/web_banner-1.jpg"
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://klyuniv.ac.in/wp-content/uploads/2022/02/Department-of-Engineering-Technological-Studies.jpg"
            alt="First slide"
            style={{ width: "100vw", height: "400px" }}
          />
          <Carousel.Caption>
            <h5>Department of Engineering and Technological Studies</h5>
            <p>Faculty of Engineering Technology Management.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} alt="" style={{ width: "100%", height: "400px" }} />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row >
          <Col className="my-4">
            <h1 className="text-center">YOUR PROGRAM</h1>
           

            <Row className="my-3">
              <Col lg={12} className="text-center">
                {/* <img src={ourProgramImage} className="w-25" /> */}
              </Col>

              <Col lg={12} className="mb-2">
                <p className="mb-0">
                  <b>Engineering Program</b>
                </p>
                <span className="d-block">
                <b>&#42;</b> B.Tech<b>(4Year)</b> 
              </span>
                <span className="d-block">
                <b>&#42;</b> M.Tech<b>(2Year)</b>{" "}
                </span>
              </Col>
              <Col lg={12} className="mb-2">
                <p className="mb-0">
                  <b>Engineering Branch</b>
                </p>
                <span className="d-block">
                  <b>&#42;</b> B.Tech. in Electronics and Instrumentation Engineering   {" "}
                </span>
                <span className="d-block">
                  <b>&#42;</b> B.Tech. in Information Technology{" "}
                </span>
              </Col>

              <Col lg={12} className="mb-2">
                <p className="mb-0">
                  <b>Student Conselling Program</b>
                </p>
                <span className="d-block">
                  <b>&#42;</b> Lack of objective thinking leads students to not
                  make independent dicisions{" "}
                </span>
                <span className="d-block">
                  <b>&#42;</b> The main goal of our program is to help students
                  become self-sufficient
                </span>
                <span className="d-block">
                  <b>&#42;</b> Crafting future course of action through our
                  scientific experience{" "}
                </span>
              </Col>

            </Row>
          </Col>
          {/* <Faculty className='mb-8'/> */}
        </Row>
      </Container>
    
      
      
    </>
  );
}

export default Home;
