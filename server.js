require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const grx = require('./src/routes/grx');

const app = express();
connectDB();

app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);
app.use('/grx', grx);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Connected on Port: ${PORT}`));
server.timeout = 3000;
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
