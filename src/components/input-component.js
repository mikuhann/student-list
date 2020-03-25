import React from 'react';
import Form from 'react-bootstrap/Form';

const InputComponent = ({ controlId, type, label, name, handleChange }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control type={type} name={name} onChange={handleChange} />
    </Form.Group>
  );
};

export default InputComponent;
