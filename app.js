const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
import connectToDb from './src/db/connect';
import config from './src/config';
import router from './src/router';
import cors from 'cors'
import morgan from 'morgan'
import { handleValidationError } from './src/utils/handleValidationError'

const path = require('path')
const app = express();
connectToDb(config.database);

// 3rd party middleware
app.use(express.static(path.join(__dirname, './src/public/')))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors())
app.use(router())
app.use(handleValidationError)

app.listen(config.port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app is listening on port ${config.port}`);
  console.log(config.database)
});

