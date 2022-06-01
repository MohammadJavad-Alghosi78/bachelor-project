import React from "react";
import { Form } from "react-bootstrap";

const LoginFormItem = ({
  controlId = "",
  label = "",
  type = "",
  placeholder = "",
  formText = "",
  required = true,
  value = "",
  onChange,
}) => {
  return (
    <Form.Group className="mb-4" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={value}
        onChange={onChange}
        name={controlId}
        required={required}
        type={type}
        placeholder={placeholder}
      />
      <Form.Text className="text-muted">{formText}</Form.Text>
    </Form.Group>
  );
};

export default LoginFormItem;
