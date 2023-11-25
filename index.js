const jsonServer = require("jsin-server");             //importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8080;                //choose port from here like 8080, 3031


server.use(middleware);
server.use(router);

server.listen(port);