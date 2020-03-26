const StudentsRouter = require('express').Router();
const StudentsController = require('../controllers/Student');
const { asyncMiddleware } = require('../middlewares/asyncMiddleware');

StudentsRouter.route('/create')
  .post(asyncMiddleware(StudentsController.create));

module.exports = StudentsRouter;
