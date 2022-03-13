import React from "react";
import { Button, Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LandingScreen from "./screens/LandingScreen";
import RecieptsScreen from "./screens/RecieptsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/reciepts" element={<RecieptsScreen />} />
        <Route path="home/add/:itemName" element={<ProductScreen />} />
        <Route
          path="*"
          element={
            <Container fluid>
              <h1>404 Page not Found</h1>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
