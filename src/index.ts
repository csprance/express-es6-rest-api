import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';

import api from './api';
import initializeDb from './db';
import middleware from './middleware';

const app: express.Application = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: ['Link']
  })
);

app.use(
  bodyParser.json({
    limit: '100kb'
  })
);

// Set env vars
app.set('port', process.env.PORT || 8080);

// connect to db
initializeDb((db: any) => {
  const config = {};
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use('/api', api({ config, db }));

  http.createServer(app).listen(process.env.PORT || 8080, () => {
    console.log(`Started on port ${app.get('port')}`);
  });
});

export default app;
