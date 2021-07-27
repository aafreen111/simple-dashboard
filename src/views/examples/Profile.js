import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
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
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-left">
                  <Col xs="1" className="mb-2 mt-2">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>                   </Col>
                </Row>
              </CardHeader>
              <CardHeader className="bg-white border-0">
                <Row className="align-items-left">
                  <Col xs="8">
                    <h3 className="mb-0">Collaborator Console</h3>
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
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Enter Name"
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
                            htmlFor="input-email"
                          >
                            Organization
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Zeeve"
                            id="input-username"
                            placeholder="Zeeve"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Password
                          </label>
                          <Input 
                          type="password" 
                          name="password" 
                          id="examplePassword" 
                          placeholder="Password" />
                        </FormGroup>
                        <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="m"
                  >
                    Save Changes
                  </Button>
                      </Col>
                      
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
