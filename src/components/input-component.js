import React from 'react';
import Form from 'react-bootstrap/Form';

const InputComponent = ({ controlId, type, label, name, handleChange, error, value }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        className={error ? 'is-invalid' : '' }
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {error && <div className='invalid-feedback'>
        Fill the field
      </div>}
    </Form.Group>
  );
};

export default InputComponent;
