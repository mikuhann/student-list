import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      <p>Student list component</p>
    </div>
  );
};

export default StudentList;
