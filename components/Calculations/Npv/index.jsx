import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { Button, Form } from "react-bootstrap";
import { LoginFormWrapper } from "../../LoginForm/style";

const NpvCp = () => {
  // States
  const [projectYears, setProjectYears] = useState(""); // t
  const [discountRate, setDiscountRate] = useState(""); // r
  const [totalRevenue, setTotalRevenue] = useState([]); // TR
  const [totalCosts, setTotalCosts] = useState([]); // TC

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/npv", {
        projectYears,
        discountRate,
        totalRevenue,
        totalCosts,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  // JSX
  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <LoginFormTitle title="Net Present Value" />
        <LoginFormItem
          controlId="project-years"
          label="Length of project(year):"
          type="number"
          placeholder="Example: 2"
          required
          value={projectYears}
          onChange={(event) => setProjectYears(event.target.value)}
        />
        <LoginFormItem
          controlId="discount-rate"
          label="Discount rate:"
          type="number"
          placeholder="Example: 0.2"
          required
          value={discountRate}
          onChange={(event) => setDiscountRate(event.target.value)}
        />
        <LoginFormItem
          controlId="total-revenue"
          label="List of Total Revenue( X 1,000,000$):"
          type="text"
          placeholder="Example: 1, 0.8, 0.7"
          required
          value={totalRevenue}
          onChange={(event) => setTotalRevenue(event.target.value)}
        />
        <LoginFormItem
          controlId="total-costs"
          label="List of Total costs( X 1,000,000$):"
          type="text"
          placeholder="Example: 0.6, 0.4, 0.5"
          required
          value={totalCosts}
          onChange={(event) => setTotalCosts(event.target.value)}
        />
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </LoginFormWrapper>
  );
};

export default NpvCp;
