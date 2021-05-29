import React, { Component } from "react";
import { Card, Row, Col, Button, Container, Badge } from "react-bootstrap";
import Fontawesome from "react-fontawesome";
import "react-fontawesome/";

class Home extends Component {
  render() {
    return (
      <main>
        <Container>
          <Card style={{ background: "#3DA5EE" }} className="m-5 p-5">
            <Row className="mb-5 ">
              <Col>
                <Row className="float-left">
                  <Col>
                    <h4 className="text-white float-left">My Account</h4>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="pull-right">
                  <Col>
                    <Button
                      variant="outline-primary"
                      className="border border-white border-1"
                    >
                      <h4 className="text-white">SWITCH TO TESTING</h4>
                    </Button>
                    <Fontawesome
                      name="cog"
                      className="fas fa-cog text-white ml-3"
                      style={{ fontSize: 20 }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card
                  className="border-2 border-white text-center py-5"
                  style={{ background: "#3DA5EE", height: 150 }}
                >
                  <Fontawesome
                    name="plus"
                    className="text-white"
                    style={{ fontSize: 25 }}
                  />{" "}
                  <br />
                  <h5 className="text-white">Add account</h5>
                </Card>
              </Col>
              <Col>
                <Card
                  className="border-2 border-white pt-4 px-4"
                  style={{ height: 150 }}
                >
                  <h5>
                    <b>My Business Account</b>
                  </h5>
                  <b></b>
                  <Row className="mt-5">
                    <Col>
                      <p>
                        0 <b className="mr-4">EURT</b> 4.9998 <b>XLM</b>
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <Card
                  className="border-2 border-white pt-4 px-4"
                  style={{ height: 150 }}
                >
                  <h5>
                    <b>Personal Safe</b>
                  </h5>
                  <b></b>
                  <Row className="mt-5">
                    <Col>
                      <p>
                        5.9999 <b>XLM</b>
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col>
                <Card
                  className="border-2 border-white "
                  style={{ height: 150 }}
                >
                  <Row>
                    <Col xl="8">
                      <h5 className="pt-4 px-4">
                        <b>Discretionary funds</b>
                      </h5>
                    </Col>
                    <Col className="pt-2 px-4">
                      <Badge pill variant="danger" className="float-right">
                        1
                      </Badge>
                    </Col>
                  </Row>

                  <Row className="mt-5  px-4">
                    <Col>
                      <p>
                        0.5755 <b className="mr-4">EURT</b> 0.2299{" "}
                        <b className="mr-4">USD</b> 673.1150 <b>XML</b>
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>
    );
  }
}

export default Home;
