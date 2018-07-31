/** resource-router-middleware
 * project: express-typescript-rest-api
 * author: Chris Sprance - csprance
 * description:
 */
import * as express from 'express';

const keyed: any = [
  'get',
  'read',
  'put',
  'update',
  'patch',
  'modify',
  'del',
  'delete'
];
const map: any = {
  index: 'get',
  list: 'get',
  read: 'get',
  create: 'post',
  update: 'put',
  modify: 'patch'
};

export function ResourceRouter(route: any) {
  route.mergeParams = !!route.mergeParams;
  const router: any = express.Router({
    mergeParams: route.mergeParams
  });
  let fn: any;
  let url: any;

  if (route.middleware) router.use(route.middleware);

  if (route.load) {
    router.param(route.id, (req: any, res: any, next: any, id: any) => {
      route.load(req, id, (err: any, data: any) => {
        if (err) return res.status(404).send(err);
        req[route.id] = data;
        next();
      });
    });
  }
  Object.keys(route).forEach((key: any) => {
    fn = map[key] || key as any;
    if (typeof router[fn] === 'function') {
      url = ~keyed.indexOf(key) ? '/:' + route.id : '/';
      router[fn](url, route[key]);
    }
  });

  return router;
}
