import React, { useState, useEffect } from 'react';

import { getStudents } from '../service/RequestService';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(async () => {
    setStudents(await getStudents());
  }, []);

  return (
    <div>
      <div>{console.log(students)}</div>
      <p>Student list component</p>
    </div>
  );
};

export default StudentList;
