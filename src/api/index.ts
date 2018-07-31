import * as express from 'express';

import facets from './facets';

const { version } = require('../../package.json');

export default ({ config, db }: { config: any; db: any }) => {
  const api = express.Router();

  // mount the facets resource
  api.use('/facets', facets({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
