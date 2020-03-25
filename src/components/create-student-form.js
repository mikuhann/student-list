import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InputComponent from './input-component';

const CreateStudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    rollNo: ''
  });

  const handleChange = (event) => setStudent({ ...student, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(student);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputComponent
          controlId='Name'
          label='Name'
          type='text'
          name='name'
          handleChange={handleChange}
        />
        <InputComponent
          controlId='Email'
          label='Email'
          type='Email'
          name='email'
          handleChange={handleChange}
        />
        <InputComponent
          controlId='Roll_no'
          label='Roll no'
          type='text'
          name='rollNo'
          handleChange={handleChange}
        />
        <Button
          variant='danger'
          size='lg'
          block='block'
          type='submit'
        >
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudentForm;
