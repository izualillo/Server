var server = require("E:server.js");
var router = require("E:router.js");
var requestHandlers = require("E:requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
