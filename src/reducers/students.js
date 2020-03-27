import {
  GET_STUDENTS,
  SET_LOADING,
  CREATE_STUDENT,
} from '../constants/actions';

const initialState = {
  students: null,
  loading: true,
  current: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS: {
      return {
        ...state,
        students: payload,
      };
    }
    case CREATE_STUDENT: {
      return {
        ...state,
        students: [...state.students, payload],
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
