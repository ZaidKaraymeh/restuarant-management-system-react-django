import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { selectCart, selectItems, selectPrice, setCartDate, setCartNew } from '../reducers/CartReducer';
import { setRecieptItems } from "../reducers/RecieptReducer";
export const burgers = [
  {
    id: "1",
    name: "SMOKED NOMAD BEEF BURGER",
    price: "6.900",
    category: "burger",
    description: "Lettuce, tomato, caramelized onions, cheddar cheese",
  },
  {
    id: "2",
    name: "BLACK WAGYU BEEF BURGER",
    price: "9.500",
    category: "burger",
    description: "200g Wagyu beef patty, bacon & chipotle mayo",
  },
  {
    id: "3",
    name: "BEYOND MEAT BURGER",
    price: "6.800",
    category: "burger",
    description: "Lettuce, tomato, caramelized onion & vegan cheese",
  },
  {
    id: "4",
    name: "SMOKED BEEF BRISKET BURGER",
    price: "7.000",
    category: "burger",
    description: "Pickles, caramelized onions, cheddar cheese",
  },
  {
    id: "5",
    name: "QUINOA FALAFEL BURGER",
    price: "5.500",
    category: "burger",
    description: "Kale chips & hot sauce",
  },
  {
    id: "11",
    name: "SOFT SHELL CRAB",
    price: "3.500",
    category: "bao",
    description: "Green papaya salad, chilli & lime mayo",
  },
  {
    id: "12",
    name: "SMOKED BEEF SHORT RIB",
    price: "3.800",
    category: "bao",
    description: "BBQ sauce & red chilli",
  },
  {
    id: "13",
    name: "BUTTERMILK CHICKEN BREAST",
    price: "3.000",
    category: "bao",
    description: "Slaw & Korean sauce",
  },
  {
    id: "14",
    name: "VEGAN BRISKET BAO",
    price: "3.000",
    category: "bao",
    description: "BBQ sauce & chilli",
  },
];
const pizzas = [
  {
    id: "6",
    name: "SMOKED NOMAD BEEF BURGER",
    price: "6.900",
    description: "Lettuce, tomato, caramelized onions, cheddar cheese",
  },
  {
    id: "7",
    name: "BLACK WAGYU BEEF BURGER",
    price: "9.500",
    description: "200g Wagyu beef patty, bacon & chipotle mayo",
  },
  {
    id: "8",
    name: "BEYOND MEAT BURGER",
    price: "6.800",
    description: "Lettuce, tomato, caramelized onion & vegan cheese",
  },
  {
    id: "9",
    name: "SMOKED BEEF BRISKET BURGER",
    price: "7.000",
    description: "Pickles, caramelized onions, cheddar cheese",
  },
  {
    id: "10",
    name: "QUINOA FALAFEL BURGER",
    price: "5.500",
    description: "Kale chips & hot sauce",
  },
];
const baos = [
  {
    id: "11",
    name: "SOFT SHELL CRAB",
    price: "3.500",
    description: "Green papaya salad, chilli & lime mayo",
  },
  {
    id: "12",
    name: "SMOKED BEEF SHORT RIB",
    price: "3.800",
    description: "BBQ sauce & red chilli",
  },
  {
    id: "13",
    name: "BUTTERMILK CHICKEN BREAST ",
    price: "3.000",
    description: "Slaw & Korean sauce",
  },
  {
    id: "14",
    name: "VEGAN BRISKET BAO ",
    price: "3.000",
    description: "BBQ sauce & chilli",
  },
];
export function getBurger(product) {
  return burgers.find((burger) => burger === product);
}

export function getDateTime(){
  var dt = new Date();

  // ensure date comes as 01, 09 etc
  var DD = ("0" + dt.getDate()).slice(-2);

  // getMonth returns month from 0
  var MM = ("0" + (dt.getMonth() + 1)).slice(-2);

  var YYYY = dt.getFullYear();

  var hh = ("0" + dt.getHours()).slice(-2);

  var mm = ("0" + dt.getMinutes()).slice(-2);

  var ss = ("0" + dt.getSeconds()).slice(-2);

  var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
  return date_string;
}

function HomeScreen() {
  const total = useSelector(selectPrice)
  const items = useSelector(selectItems)
  const cart = useSelector(selectCart)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  

  return (
    <Container fluid>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="vh-100">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="h3" eventKey="first">
                  BURGERS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="h3" eventKey="second">
                  BAOS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="h3" eventKey="third">
                  CART BHD {total}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className="px-5">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {burgers.map((burger) => {
                    if (burger.category != "burger") return;
                    return (
                      <Col xl={4} className="py-2">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/home/add/${burger.name}`}
                          key={burger.id}
                          >
                          <Card style={{ height: "23rem" }}>
                            <Card.Img
                              variant="top"
                              src={`https://picsum.photos/id/${
                                57 + burger.id
                              }/200/100`}
                              />
                            <Card.Body>
                              <Card.Title as="div" className="h4">
                                {burger.name}
                              </Card.Title>
                              <Card.Text as="div" className="h5">
                                BHD {burger.price}
                              </Card.Text>
                              <Card.Text
                                className="h6"
                                style={{ fontWeight: "normal" }}
                                >
                                {burger.description}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  {burgers.map((burger) => {
                    if (burger.category != "bao") return;
                    return (
                      <Col xl={4} className="py-2">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/home/add/${burger.name}`}
                          key={burger.id}
                          >
                          <Card style={{ height: "23rem" }}>
                            <Card.Img
                              variant="top"
                              src={`https://picsum.photos/id/${
                                5 + burger.id
                              }/200/100`}
                            />
                            <Card.Body>
                              <Card.Title as="div" className="h4">
                                {burger.name}
                              </Card.Title>
                              <Card.Text as="div" className="h5">
                                BHD {burger.price}
                              </Card.Text>
                              <Card.Text
                                className="h6"
                                style={{ fontWeight: "normal" }}
                              >
                                {burger.description}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  {items.map((item) => {
                    // let product = getBurger(item);
                    return (
                      <Container>
                        <Row>
                          <Col clasName="d-flex justify-content-center">
                            <h2>{item.name}</h2>
                          </Col>
                          <Col className="d-flex align-items-center justify-content-center">
                            <h4>BHD {item.price}</h4>
                          </Col>
                        </Row>
                      </Container>
                    );
                  })}
                </Row>
                <Row className="border-top py-4">
                  <Col className="d-flex justify-content-end">{""}</Col>
                  <Col className="d-flex justify-content-center">
                    <h2> BHD {total}</h2>
                  </Col>
                </Row>
                <Row>
                  <Button
                    onClick={()=> {
                      dispatch(setCartDate(getDateTime()))
                      dispatch(setRecieptItems(cart));
                      dispatch(
                        setCartNew({
                          items: [],
                          price: 0,
                          table: 0,
                          date: getDateTime(),
                        })
                      );
                      navigate("/")
                    }}
                  >
                    <h2>Order</h2>
                  </Button>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Outlet />
    </Container>
  );
}

export default HomeScreen
