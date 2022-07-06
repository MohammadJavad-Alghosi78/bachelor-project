import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { LoginFormWrapper } from "../../LoginForm/style";

const TotalRecieptContractor = () => {
  const [opex, setOpex] = useState("");
  const [idcrecBeforeFDP, setIdcrecBeforeFDP] = useState("");
  const [idcrecAfterFDP, setIdcrecAfterFDP] = useState("");
  const [costOfMoney, setCostOfMoney] = useState("");
  const [directCapitalCast, setDirectCapitalCast] = useState("");

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/total-govenment-receipt", {
        opex,
        idcrecBeforeFDP,
        idcrecAfterFDP,
        costOfMoney,
        directCapitalCast,
      })
      .then((response) => {
        const {
          discountedPresentValues,
          npv,
          timeSteps,
          totalCosts,
          totalRevnue,
        } = response.data;
      })
      .catch((error) => console.log(error));
  };

  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <LoginFormWrapper>
          <Form onSubmit={handleSubmit}>
            <LoginFormTitle title="Total Government Reciepts" />
            <LoginFormItem
              controlId="opex"
              label="OPEX:"
              type="text"
              placeholder="Example: 1,000,000, 2,000,000, 1,000,000"
              required
              value={opex}
              onChange={(event) => setOpex(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-before-fdp"
              label="indirect costs before first date production:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={idcrecBeforeFDP}
              onChange={(event) => setIdcrecBeforeFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-after-fdp"
              label="indirect costs after first date production:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={idcrecAfterFDP}
              onChange={(event) => setIdcrecAfterFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="cost-of-money"
              label="cost of money:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={costOfMoney}
              onChange={(event) => setCostOfMoney(event.target.value)}
            />
            <LoginFormItem
              controlId="direct-capital-cast"
              label="direct capital cast:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={directCapitalCast}
              onChange={(event) => setDirectCapitalCast(event.target.value)}
            />
            <LoginFormItem
              controlId="remuneration-fee-recovery"
              label="remuneration fee recovery:"
              type="text"
              placeholder="Example: 5,000,000, 3,000,000, 7,000,000"
              required
              value={directCapitalCast}
              onChange={(event) => setDirectCapitalCast(event.target.value)}
            />
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </LoginFormWrapper>
      </Col>
    </Row>
  );
};

export default TotalRecieptContractor;
