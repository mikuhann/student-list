import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const StudentTableRow = ({ student }) => {
  return (
    <tr>
      <td>
        {student.name}
      </td>
      <td>
        {student.email}
      </td>
      <td>
        {student.rollNo}
      </td>
      <td>
        <Button
          className='mx-1'
          size='sm'
          variant='warning'
        >
          <Link className='edit-link' to={`/edit-student/${student._id}`}>
            Edit
          </Link>
        </Button>
        <Button
          className='mx-1'
          size='sm'
          variant='danger'
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
