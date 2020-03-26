const express = require('express');
const cors = require('cors');

const connectDB = require('./config/mongoDB');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: true }));

routes(app);

app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
