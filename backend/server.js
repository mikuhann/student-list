const express = require('express');
const cors = require('cors');

const connectDB = require('./config/mongoDB');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: true }));

app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
