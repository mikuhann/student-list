import {
  GET_STUDENTS,
  SET_LOADING,
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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
