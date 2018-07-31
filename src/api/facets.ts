import * as express from 'express';
import * as ResourceRouter from 'resource-router-middleware';

import facets from '../models/facets';

export default ({ config, db }: { config: any; db: any }) =>
  ResourceRouter({
    /** Property name to store preloaded entity on `request`. */
    id: 'facet',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req: express.Request, id: string | number, callback: any) {
      const facet = facets.find(_facet => _facet.id === id);
      const err = facet ? null : 'Not found';
      callback(err, facet);
    },

    /** GET / - List all entities */
    index({ params }: { params: any }, res: express.Response) {
      res.json(facets);
    },

    /** POST / - Create a new entity */
    create({ body }: { body: any }, res: express.Response) {
      body.id = facets.length.toString(36);
      facets.push(body);
      res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ facet }: { facet: any }, res: express.Response) {
      res.json(facet);
    },

    /** PUT /:id - Update a given entity */
    update({ facet, body }: { facet: any; body: any }, res: express.Response) {
      for (const key in body) {
        if (key !== 'id') {
          facet[key] = body[key];
        }
      }
      res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ facet }: { facet: any }, res: express.Response) {
      facets.splice(facets.indexOf(facet), 1);
      res.sendStatus(204);
    }
  });
