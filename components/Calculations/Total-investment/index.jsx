import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoginFormItem from "../../LoginForm/LoginFormItem";
import LoginFormTitle from "../../LoginForm/LoginFormTitle";
import { LoginFormWrapper } from "../../LoginForm/style";

const TotalInvestmentForm = () => {
  // States
  const [X, setX] = useState(null); // X
  const [XPrim, setXPrim] = useState(null); // X-prim
  const [expAppCosts, setExpAppConsts] = useState([]); // C_ex&app
  const [directCapitalCosts, setDirectCapitalCosts] = useState([]); // DDC
  const [indirectCosts, setIndirectCosts] = useState([]); // IDC

  // Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // JSX
  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <LoginFormTitle title="Total Investment Form" />
        <LoginFormItem
          controlId="X-prim"
          label="Length of project:"
          type="number"
          placeholder="Example: 10"
          required
          value={XPrim}
          onChange={(event) => setXPrim(event.target.value)}
        />
        <LoginFormItem
          controlId="X"
          label="Length of exploration and appraisal phases:"
          type="number"
          placeholder="Example: 3"
          required
          value={X}
          onChange={(event) => setX(event.target.value)}
        />
        <LoginFormItem
          controlId="expAppCosts"
          label="List of exploration and appraisal costs( X 1,000,000$):"
          type="text"
          placeholder="Example: 1, 0.7, 0.8"
          required
          value={expAppCosts}
          onChange={(event) => setExpAppConsts(event.target.value)}
        />
        <LoginFormItem
          controlId="directCapitalCosts"
          label="List of direct capital costs( X 1,000,000$):"
          type="text"
          placeholder="Example: 1, 0.7, 0.8, 0.6, 1.2, 1, 0.5"
          required
          value={directCapitalCosts}
          onChange={(event) => setDirectCapitalCosts(event.target.value)}
        />
        <LoginFormItem
          controlId="indirectCosts"
          label="List of indirect costs( X 1,000,000$):"
          type="text"
          placeholder="Example: 1, 0.7, 0.8, 0.6, 1.2, 1, 0.5"
          required
          value={indirectCosts}
          onChange={(event) => setIndirectCosts(event.target.value)}
        />
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </LoginFormWrapper>
  );
};

export default TotalInvestmentForm;
