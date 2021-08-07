import React from "react";
import { Container, Col, Row, Image, Media } from "react-bootstrap";
import InputText from "../UI/InputText"

const Information = props => {
  return (
    <Container>
      
        <Row>
          <Col>
        <Image
            class="rounded mx-auto d-block"
            src={props.image}
            thumbnail
            height={200}
            width={200}
          />
          </Col>
          <Col>
          <div className="topTextContainer">
            <h6>info1:</h6>

            <InputText>{props.info1}</InputText>

            <h6>info2:</h6>

            <InputText>{props.info2}</InputText>

            <h6>info3:</h6>

            <InputText>{props.info3}</InputText>
            </div>
          </Col>
        </Row>
      
      <Col>
        <Row>
        <h6>info4:</h6></Row>
        <Row>
          <InputText>{props.info4}</InputText>
        </Row>
        <Row>
        <h6>info5:</h6></Row>
        <Row>
          <InputText>{props.info5}</InputText>
        </Row>
        <Row>
        <h6>info6:</h6></Row>
        <Row>
          <InputText>{props.info6}</InputText>
        </Row>
      </Col>
    </Container>
  );
};

export default Information;
