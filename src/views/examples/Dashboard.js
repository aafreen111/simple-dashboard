
import React, { useState } from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";



import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Details</h3>
                  </div>
                </Row>
              </CardHeader>
              <hr className="my-1" />
              <Table className="align-items-center table-flush" responsive>
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>79</td>
                  </tr>
                  <tr>
                    <th scope="row">Name</th>
                    <td>intelcol2</td>
                  </tr>
                  <tr>
                    <th scope="row">Token</th>
                    <td>bffacf..</td>
                  </tr>
                  <tr>
                    <th scope="row">FQDN</th>
                    <td>intelcol2</td>
                  </tr>
                  <tr>
                    <th scope="row">FLM Deps</th>
                    <td>Done</td>
                  </tr>
                  <tr>
                    <th scope="row">Connection</th>
                    <td>Disconnected</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Associated Federation - 1</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Fed Tag</th>
                    <th scope="col">Fed Status</th>
                    <th scope="col">Plan Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Testfed1234</td>
                    <td>Completed</td>
                    <td>keras_cnn_mnist</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
