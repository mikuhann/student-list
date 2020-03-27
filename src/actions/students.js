import {
  GET_STUDENTS,
  SET_LOADING,
  CREATE_STUDENT,
} from '../constants/actions';

import * as StudentsApi from '../service/StudentsService';

export const getStudents = () => async (dispatch) => {
  try {
    const students = await StudentsApi.getStudents();

    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });

    dispatch(setLoading());
  } catch (e) {
    console.log(e.message);
  }
};

export const createStudent = (newStudent) => async (dispatch) => {
  try {
    const createdStudent = await StudentsApi.createStudent(newStudent);

    dispatch({
      type: CREATE_STUDENT,
      payload: createdStudent,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
