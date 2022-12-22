require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fs = require('fs');

const Grx = require('./src/model/grx');

const connectDB = require('./src/config/db');
const grx = require('./src/routes/grx');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.static('public'));

connectDB().then(() => {
  cron.schedule('*/20 * * * * *', async () => {
    const data = await Grx.find();
    const jsonData = JSON.stringify(data);
    fs.writeFile('database.json', jsonData, 'utf8', () => console.log('file added sucessfully'));
  }).start();
});

app.use('/grx', grx);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Connected on Port: ${PORT}`));
server.timeout = 10000;

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

//   const jsonData = JSON.stringify(data);
//   fs.writeFile('database.json', jsonData, 'utf8', () => console.log('file added sucessfully'));
