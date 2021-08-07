import React from "react";
import { Container, Col, Row, } from "react-bootstrap";


const Card = props => {

  console.log(props.userName)
  return (
    <Container>
      <div onClick={props.onSelect} className="cardContainer">
        <Col>
          <img
            className="cardImg"
            alt="img"
            src={props.image}
            style={{ width: "80px ", height: "80px" }}
          />
        </Col>
        <Col  md="auto">
          <Row>
            <p className="id">reportId : {props.reportId}</p>
          </Row>
          <Row>
            <p className="id">user Name : {props.userName}</p>
          </Row>
        </Col>
      </div>
    </Container>
  );
};

export default Card;