const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend server is running!`);
});
