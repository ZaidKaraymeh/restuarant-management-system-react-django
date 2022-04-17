import React from 'react'
import { Button, Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDate, setCartDate, setCartNew } from '../reducers/CartReducer';
import { getDateTime } from './HomeScreen';

function LandingScreen() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center" >
        <Button
            className="mx-4"
            onClick={() =>  {
                dispatch(setCartDate(getDateTime()))
                navigate("/home")
        }}
        >
            <h1>New order</h1>
        </Button>
        <Button
            className="mx-4"
            onClick={() => {
                navigate("/reciepts");
            } }
        >
            <h1>Order History</h1>
        </Button>
        <Button
            className="mx-4"
            onClick={() => {
                navigate("/new");
            } }
        >
            <h1>Manage Items</h1>
        </Button>
    </Container>
  )
}

export default LandingScreen