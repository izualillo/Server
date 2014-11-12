function route(handle, pathname, response, postData) {
  console.log("Ruteando la respuesta para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log("No hay respuesta para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No encontrado");
    response.end();
  }
}

exports.route = route;
