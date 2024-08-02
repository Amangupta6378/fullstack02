import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="ms-5"
              width="150px"
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#features">Women</Nav.Link>
            <Nav.Link href="#pricing">Mobile Cover</Nav.Link>
          </Nav>
          <Form inline className="ms-auto">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto"></Col>
            </Row>
          </Form>
        </Container>
        <Link to="/addProduct" className="text-white bg-secondary text-decoration-none text-center w-25 border py-1">
            Add product 
      </Link>
        

        <button className="p-1 border-start ms-2 btn border btn-secondary">Login</button>
        <AiOutlineHeart className="fs-3 ms-3" />
        <AiOutlineShoppingCart className="fs-3 me-5 ms-3 " />
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
