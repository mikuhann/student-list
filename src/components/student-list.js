import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import StudentTableRow from './student-table-row';

import { selectLoading, selectStudents } from '../constants/selectors';
import { getStudents } from '../actions/students';

const StudentList = () => {
  const students = useSelector(selectStudents);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  if (loading) {
    return <div className='text-center'>
      <strong>Loading...</strong>
    </div>
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Roll No.
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => <StudentTableRow student={student} key={student._id} />)}
      </tbody>
    </Table>
  );
};

export default StudentList;
