import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import RecieptList from '../components/RecieptList';

function RecieptsScreen() {
    const navigate = useNavigate()
  return (
    <Container fluid>
      <Row>
        <Col className="my-2" xl={3} lg={4} sm={3}>
          <Button 
          onClick={() => {
                navigate("/")
          }}
          className="w-100">
            <h2>Home</h2>
          </Button>
        </Col>
        <Col className="my-2" xl={9} lg={8} sm={9}>
          <RecieptList />
        </Col>
      </Row>
    </Container>
  );
}

export default RecieptsScreen