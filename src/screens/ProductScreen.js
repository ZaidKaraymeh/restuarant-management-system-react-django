import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import { setCartPrice, setCartTable, setCartItems, selectItems, selectPrice } from '../reducers/CartReducer.js'
import { useDispatch, useSelector } from "react-redux";
import { burgers } from "./HomeScreen.js";
const getItem = (name) => {
  console.log(name)
  return burgers.find((burger) => burger.name == name)
}

function ProductScreen() {
  let params = useParams();
  let burger = getItem(params.itemName);
  console.log(burger);
  const navigate = useNavigate()

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  let cartPrice = useSelector(selectPrice)
  useEffect(() => {
    setPrice((quantity * parseFloat(burger.price)).toFixed(3));
  }, [quantity]);


  const actionItemCartRepeater = (quantity) => {
    let localItems = items
    for (let index = 0; index < quantity; index++) {
      localItems = [...localItems, burger]
    }
    dispatch(setCartItems(localItems));
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="d-block">
        <Col className="">
          <h1>{burger.name}</h1>
          <Row className="py-2">
            <Col className="d-flex justify-content-center px-0">
              <Button
                className="d-block w-100"
                onClick={() => setQuantity(quantity - 1)}
              >
                <i className="fa-solid fa-minus py-3"></i>
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <h3 className="text-center">{quantity}</h3>
            </Col>
            <Col>
              <Button
                className="d-block w-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                <i className="fa-solid fa-plus py-3"></i>
              </Button>
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <h3>Total: BD {price}</h3>
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Button 
                onClick={() => {
                  dispatch(
                    setCartPrice(
                      parseFloat(price).toFixed(3)
                    )
                  ); 
                  actionItemCartRepeater(quantity);
                  navigate("/home");
                }}
              className="w-100">
                <h3>Add to Cart</h3>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
