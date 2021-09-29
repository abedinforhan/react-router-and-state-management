import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleEmployee = () => {
  let { id } = useParams();

  const [employeesDetails, setEmployeesDetails] = useState([]);

  const [singleEmployee, setSingleEmployee] = useState({});

  //  data load howa
  useEffect(() => {
    fetch("/employeeDetails.json")
      .then((res) => res.json())
      .then((data) => setEmployeesDetails(data.employee));
  }, []);

  // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundEmployee = employeesDetails.find(
      (employee) => employee.login.id === id
    );
    setSingleEmployee(foundEmployee);
  }, [employeesDetails]);

  return (
    <div>
      <h1>{id}</h1>
      <h2>This is sigle employee {singleEmployee?.name}</h2>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{singleEmployee?.name}</Card.Title>
                <Card.Text>
                     <b> Email : {singleEmployee?.email}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleEmployee;
