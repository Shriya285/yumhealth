// Login_1.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // You can customize styles in this file
import reactLogin from '../assets/img/login.svg';

function Login_1() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
              <span>Login</span>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Row className="mb-3"></Row>

            <Row className="justify-content-center">
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login_1;
