import ProfileDropdown from "../../pages/profile/ProfileDropdown";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constant";
import {
  Navbar,
  Row,
  Col,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
} from "react-bootstrap";
import style from "./Header.module.css";
import logImg from "../../../assets/log.jpg";
import { useSelector } from "react-redux";
const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.profile.user);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <>
      <Container fluid className={style.header_top_content}>
        <Row>
          <Col>
            <Navbar expand="sm">
              <Container>
                <Navbar.Brand>
                  <img src={logImg} alt="Logo" className={style.logoImage} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className={`mx-auto ${style.left_nav}`}>
                    <Nav.Link as={Link} to="/" className={style.nav_links}>
                      HOME
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className={style.nav_links}>
                      ABOUT
                    </Nav.Link>
                    {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                      <>
                        <Nav.Link
                          as={Link}
                          to="/newstudent"
                          className={style.nav_links}
                          onClick={handleClick}
                        >
                          ADMISSION
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to="/exit"
                          className={style.nav_links}
                          onClick={handleClick}
                        >
                          EXIT STUDENT
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to="/pgcourses"
                          className={style.nav_links}
                          onClick={handleClick}
                        >
                          POSTGRADUATE
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to="/btechjob"
                          className={style.nav_links}
                          onClick={handleClick}
                        >
                          JOB
                        </Nav.Link>
                      </>
                    )}
                    <>
                      <NavDropdown
                        title="REPORT"
                        id="collasible-nav-dropdown"
                        // className={style.nav_links}
                        className={`${style.nav_links}`}
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                      >
                        <NavDropdown.Item className={style.avDropdown_Item}>
                          <Nav.Link as={Link} to="/feedback-post">
                            Feedback Form
                          </Nav.Link>
                          <NavDropdown.Item as={Link} to="get-feedback">
                            View Feedback
                          </NavDropdown.Item>
                          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                            <>
                              <NavDropdown.Item as={Link} to="newstudentreport">
                                New Admission
                              </NavDropdown.Item>

                              <NavDropdown.Item as={Link} to="createpgreport">
                                Pg Report
                              </NavDropdown.Item>

                              <NavDropdown.Item as={Link} to="createjobreport">
                                Job Report
                              </NavDropdown.Item>

                              <NavDropdown.Item as={Link} to="createexitreport">
                                Exit Student
                              </NavDropdown.Item>
                            </>
                          )}
                          <NavDropdown.Divider />
                          <NavDropdown.Item to="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  </Nav>

                  <Nav className="">
                    {" "}
                    {token === null ? (
                      <>
                        <Nav.Link
                          as={Link}
                          to="/account"
                          className={style.nav_links}
                        >
                          Account
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/signupfrom" className={style.nav_links} onClick={handleClick}>SIGN UP</Nav.Link> */}
                      </>
                    ) : (
                      <ProfileDropdown />
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
