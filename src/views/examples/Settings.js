import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Profile = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Log Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Number of days to keep logs
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter no. of days to keep logs"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                          
                        </FormGroup>
                      </Col>
                      <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Apply
                  </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">SMTP Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Host
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter Host"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Port
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter Port"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter Password"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Apply
                  </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Notification Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                      <p className="mb-0">Nodes Activity</p>
                      <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Subscribe
                        </Label>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                      <p className="mb-0">Federation Activity</p>
                      <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Subscribe
                        </Label>
                        </FormGroup>
                      </Col>
                      
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">2FA Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            2FA
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            2FA Token
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter new 2FA token"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Account Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter New Username"
                            id="input-username"
                            placeholder="Admin"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Password
                          </label>
                          <Input 
                          type="password" 
                          name="password" 
                          id="examplePassword" 
                          placeholder="Password" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Confirm Password
                          </label>
                          <Input 
                          type="password" 
                          name="password" 
                          id="examplePassword" 
                          placeholder="Re-Enter Password" />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="m"
                  >
                    Save
                  </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
