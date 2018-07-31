Express & TypeScript REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with TypeScript and Express. It is based on the similarrlly named repository developit/express-es6-rest-api.git

- TypeScript support 
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).



Getting Started
---------------

```sh
# clone it
git clone git@github.com:csprance/express-typescript-rest-api.git
cd express-typescript-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
Docker Support
------
```sh
cd express-typescript-rest-api

# Build your docker
docker build -t ts/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 ts/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
