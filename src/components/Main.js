import React from "react";
import Container from "react-bootstrap/Container"; // Importing Container from react-bootstrap
import Row from "react-bootstrap/Row"; // Importing Row from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import FilterAccordion from "./Accordion";
// import filter from "./Filter"; // Assuming filter is defined in a separate file
import Cards from "./Cards";

const Main = ({ products , filterDataSize, filterData}) => {
  return (
    <Container fluid>
      <Row>
        <p className="text-start">Home / Men Clothing</p>
        <h3 className="text-start mt-3">Mens Clothing ({products.length})</h3>
        <hr className="w-25 h-5"></hr>
      </Row>
      <Row>
        <Col xs="3">
          <h5 className="text-start">Filter Accordion</h5>
          <FilterAccordion filterDataSize={filterDataSize} filterData={filterData}/>
        </Col>
        <Col
          xs="9"
          style={{ height: "calc(100vh - 150px)", overflowY: "auto" }}
        >
          <h5 className="text-end ">Sorted By</h5>
          <Cards></Cards>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
