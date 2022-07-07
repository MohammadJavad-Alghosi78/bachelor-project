import axios from "axios";
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
  const [remunerationFeeRecovery, setRemunerationFeeRecovery] = useState("");

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/total-receipt-contractor", {
        opex,
        idcrecBeforeFDP,
        idcrecAfterFDP,
        costOfMoney,
        directCapitalCast,
      })
      .then((response) => {
        const {
          finalOpex,
          finalIdcrecBeforeFDP,
          finalIdcrecAfterFDP,
          finalCostOfMoney,
          finalDirectCapitalCast,
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
              placeholder="Example: 1000000, 2,000000, 1000000"
              required
              value={opex}
              onChange={(event) => setOpex(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-before-fdp"
              label="indirect costs before first date production:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={idcrecBeforeFDP}
              onChange={(event) => setIdcrecBeforeFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="idc-after-fdp"
              label="indirect costs after first date production:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={idcrecAfterFDP}
              onChange={(event) => setIdcrecAfterFDP(event.target.value)}
            />
            <LoginFormItem
              controlId="cost-of-money"
              label="cost of money:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={costOfMoney}
              onChange={(event) => setCostOfMoney(event.target.value)}
            />
            <LoginFormItem
              controlId="direct-capital-cast"
              label="direct capital cast:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={directCapitalCast}
              onChange={(event) => setDirectCapitalCast(event.target.value)}
            />
            <LoginFormItem
              controlId="remuneration-fee-recovery"
              label="remuneration fee recovery:"
              type="text"
              placeholder="Example: 5000000, 3000000, 7000000"
              required
              value={remunerationFeeRecovery}
              onChange={(event) =>
                setRemunerationFeeRecovery(event.target.value)
              }
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
