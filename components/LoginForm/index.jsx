// * node_modules
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// * Components
import LoginFormItem from "./LoginFormItem";
import LoginFormTitle from "./LoginFormTitle";
import LoginErrorModal from "./LoginErrorModal";

// * Design System
import { Button, Form } from "react-bootstrap";

// * Styles
import { LoginFormWrapper } from "./style";

// * Component
const LoginForm = () => {
  const router = useRouter();
  // * States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowErrorModal, setIsShowErrorModal] = useState(false);

  // * Handlers
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = axios
      .post("/api/login", { email, password })
      .then((response) => {
        if (response.status === 200) localStorage.setItem("token", "abcdef");
        router.replace("/");
      })
      .catch((err) => {
        localStorage.removeItem("token");
        setIsShowErrorModal(true);
      });
  };

  // JSX
  return (
    <>
      <LoginErrorModal
        show={isShowErrorModal}
        handleClose={() => setIsShowErrorModal(false)}
      />
      <LoginFormWrapper>
        <Form onSubmit={handleSubmit}>
          <LoginFormTitle title="Login" />
          <LoginFormItem
            controlId="email"
            label="Email address"
            type="email"
            placeholder="Enter your email please ..."
            required
            value={email}
            onChange={handleChangeInput}
          />
          <LoginFormItem
            controlId="password"
            label="Password"
            type="password"
            placeholder="Enter your password please ..."
            required
            value={password}
            onChange={handleChangeInput}
          />
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </LoginFormWrapper>
    </>
  );
};

export default LoginForm;
