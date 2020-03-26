const StudentRoutes = require('./StudentRoutes');

module.exports = (app) => {
  app.use('/students', StudentRoutes);
};
