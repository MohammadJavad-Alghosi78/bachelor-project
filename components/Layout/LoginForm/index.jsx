import React from "react";
import { Button, Form } from "react-bootstrap";
import LoginFormItem from "./LoginFormItem";
import LoginFormTitle from "./LoginFormTitle";
import { LoginFormWrapper } from "./style";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submited");
  };
  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <LoginFormTitle title="Login" />
        <LoginFormItem
          controlId="email"
          label="Email address"
          type="email"
          placeholder="Enter your email please ..."
          required
        />
        <LoginFormItem
          controlId="password"
          label="Password"
          type="password"
          placeholder="Enter your password please ..."
          required
        />
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
