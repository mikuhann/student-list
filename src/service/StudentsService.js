import apiService from './ApiService';
import { studentEndpoints } from '../constants/endpoints';

export const getStudents = async () => {
  const res = await apiService.get(studentEndpoints.GET_ALL);

  return res.data.payload;
};

export const createStudent = async (newStudent) => {
  const res = await apiService.post(studentEndpoints.CREATE, newStudent);

  return res.data.payload;
};
