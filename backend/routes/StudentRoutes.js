const StudentsRouter = require('express').Router();
const StudentsController = require('../controllers/Student');
const { asyncMiddleware } = require('../middlewares/asyncMiddleware');

StudentsRouter.route('/').get(asyncMiddleware(StudentsController.getAll));
StudentsRouter.route('/:id')
  .get(asyncMiddleware(StudentsController.getStudent))
  .put(asyncMiddleware(StudentsController.updateStudent))
  .delete(asyncMiddleware(StudentsController.deleteStudent));
StudentsRouter.route('/create').post(asyncMiddleware(StudentsController.create));

module.exports = StudentsRouter;
