const Student = require('../models/Student');

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
};
