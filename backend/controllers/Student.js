const Student = require('../models/Student');
const { errorHandler } = require('../helpers/ErrorHandler');

module.exports = {
  create: async (req, res) => {
    const { name, email, rollNo } = req.body;
    const newUser = new Student({
      name,
      email,
      rollNo,
    });

    await newUser.save();

    return res.status(200).json({
      payload: newUser,
    });
  },
  getAll: async (req, res) => {
    const students = await Student.find();

    if (students.length === 0) {
     return errorHandler({ statusCode: 400, message: 'No students' }, res);
    }

    return res.status(200).json({
      payload: students,
    });
  },
  getStudent: async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) {
      return errorHandler({ statusCode: 400, message: `No student with id: ${id}`}, res);
    }

    return res.status(200).json({
      payload: student,
    });
  },
  updateStudent: async (req, res) => {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id,
      { $set: { ...req.body } },
      { new: true },
      );

    if (!updatedStudent) {
     return errorHandler({ statusCode: 400, message: `No student with id: ${id}` }, res);
    }

    return res.status(200).json({
      payload: updatedStudent,
    });
  },
  deleteStudent: async (req, res) => {
    const { id } = req.params;

    await Student.findByIdAndRemove(id);

    return res.status(200).json({
      message: `Student with id ${id} was successfully deleted`,
    });
  },
};
