import bodyParser from 'body-parser';
import express from 'express';
import connectToDb from './src/db/connect';
import config from './src/config';
import api from './src/packages/router';


const app = express();
connectToDb(config.database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(api)
app.listen(config.port, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`app is listening on port ${config.port}`);
  console.log(config.database)
});

