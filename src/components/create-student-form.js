import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InputComponent from './input-component';

import { createStudent } from '../actions/students';
import { studentEndpoints } from '../constants/endpoints';

const CreateStudentForm = ({ history }) => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    rollNo: ''
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => setStudent({ ...student, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (student.name === '' && student.email === '') {
      setError(true);

      setTimeout(() => setError(false), 2000);
    } else {
      dispatch(createStudent(student));

      setStudent({
        name: '',
        email: '',
        rollNo: ''
      });

      history.push(studentEndpoints.STUDENTS_LIST);
    }
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
          value={student.name}
          error={error}
        />
        <InputComponent
          controlId='Email'
          label='Email'
          type='Email'
          name='email'
          handleChange={handleChange}
          value={student.email}
          error={error}
        />
        <InputComponent
          controlId='Roll_no'
          label='Roll no'
          type='text'
          name='rollNo'
          handleChange={handleChange}
          value={student.rollNo}
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
