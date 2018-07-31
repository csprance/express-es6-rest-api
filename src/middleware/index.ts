import * as express from 'express';

export default ({ config, db }: {config: any, db: any}) => {
  const routes: express.Router  = express.Router();

  // add middleware here

  return routes;
};
