const errorHandler = (err, res) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    status: 'error',
    message: message,
  });
};

module.exports = {
  errorHandler
};
