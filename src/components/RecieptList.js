import React from 'react'
import { selectReciepts } from "../reducers/RecieptReducer";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row, Tab, Nav, Card, Accordion } from "react-bootstrap";

function RecieptList() {
    let reciepts = useSelector(selectReciepts);
    console.log(reciepts)
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        {reciepts.slice(0).reverse().map((reciept) => {
          return (
            <Accordion.Item eventKey={`${reciept.date}`}>
              <Accordion.Header>
                <h1>{reciept.date}</h1>
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  {reciept.items.map((item) => {
                    return (
                      <Container>
                        <Row>
                          <Col xl={9} lg={8} sm={9} xs={9}>
                            <h4>{item.name}</h4>
                          </Col>
                          <Col xl={3} lg={4} sm={3} xs={3}>
                            <h4>BHD {item.price}</h4>
                          </Col>
                        </Row>
                      </Container>
                    );
                  })}
                  <Row className="border-top my-3">
                    <Col xl={9} lg={8} sm={9} xs={9}></Col>
                    <Col className='p-0 py-2' xl={3} lg={4} sm={3} xs={3}>
                      <h4>BHD {reciept.price}</h4>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

export default RecieptList