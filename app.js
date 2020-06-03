const Hapi = require('hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

      return 'Hello World!';
    }
  });

  server.route({
    method: 'GET',
    path: '/user/{name}',
    handler: (request, h) => {

      const name = request.params.name;
      return 'Hello World! ' + name;
    }
  });

  server.route({
    method: 'GET',
    path: '/home',
    handler: function (request, h) {

      return h.redirect('/');
    }
  });

  server.route({
    method: 'POST',
    path: '/signup',
    handler: function (request, h) {

      const payload = request.payload;
      return `Welcome ${payload.username}!`;
    }
  });

  server.route({
    method: ['PUT', 'POST'],
    path: '/members',
    handler: function (request, h) {

      return 'I did something!';
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();