# Starting A Server

Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported ``express`` function must be invoked.

```javascript
const express = require('express');
const app = express();
```

On the first line, we import the Express library with ``require``. When invoked on the second line, it returns an instance of an Express application. This application can then be used to start a server and specify server behavior.

The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request, and then return a response. In order for our server to start responding, we have to tell the server where to *listen* for new requests by providing a port number argument to a method called ``app.listen()``. The server will then listen on the specified [port](https://en.wikipedia.org/wiki/Port_(computer_networking)) and respond to any requests that come into it.

The second argument is a callback function that will be called once the server is running and ready to receive responses.

```javascript
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

In this example, our ``app.listen()`` call will start a server listening on port ``4001``, and once the server is started it will log ``'Server is listening on port 4001'``.

## Instructions

1. Import ``express`` using ``require`` syntax and assign it to an ``express`` variable.

Create an instance of an Express server and save it to a variable named ``app``.

Start the server listening on the port defined by the ``PORT`` variable. When the server has started, log a message to the console that the server is listening for requests.

To actually start your server listening, run the command ``node app.js`` to run your server in [Node](https://nodejs.org/en/). At this point, it won’t do much, but if you’ve completed the steps above, it will log your message to show that the server started successfully.