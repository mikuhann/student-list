const { errorHandler } = require('../helpers/ErrorHandler');


const asyncMiddleware = (fn) => (req, res, next) => {
  Promise
    .resolve(fn(req, res, next))
    .catch(
      (next) => {
        errorHandler({ statusCode: 500, message: next.message }, res)
      }
    );
};

module.exports = {
  asyncMiddleware,
};
