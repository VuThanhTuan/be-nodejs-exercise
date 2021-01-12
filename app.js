import bodyParser from 'body-parser';
import express from 'express';
import connectToDb from './src/db/connect';
import config from './src/config';
import router from './src/router';
import cors from 'cors'
import morgan from 'morgan'
import methodOverride from 'method-override'
import compress from 'compression'
import helmet from 'helmet'
import {handleValidationError} from './src/utils/handleValidationError'

const app = express();
connectToDb(config.database);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }))
//
app.use(morgan('dev'))
app.use(cors())
app.use(compress())
app.use(methodOverride())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(router())
app.use(handleValidationError)


app.listen(config.port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app is listening on port ${config.port}`);
  console.log(config.database)
});

