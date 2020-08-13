# Getting A Single Expression

Routes become much more powerful when they can be used dynamically. Express servers provide this functionality with named *route parameters*. Parameters are route path segments that begin with ``:`` in their Express route definitions. They act as [wildcards](https://expressjs.com/en/guide/routing.html#route-parameters), matching any text at that path segment. For example ``/monsters/:id`` will match both``/monsters/1`` and ``/monsters/45``.

Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: ``req.params``. This object’s keys are any parameter names in the route, and each key’s value is the actual value of that field per request.

```javascript
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);
});
```

In this code snippet, a ``.get()`` route is defined to match ``/monsters/:name`` path. When a GET request arrives for ``/monsters/hydra``, the callback is called. Inside the callback, ``req.params`` is an object with the key ``name`` and the value ``hydra``, which was present in the actual request path. The appropriate monster is retrieved by its name from the ``monsters`` object and sent back to the client.

## Instructions

1. Create a GET /expressions/:id get route that you will use to send back a single expression. You can use req.params object and the pre-written helper function ``getElementById(id, array)`` to find the correct expression before sending it back.

For instance, to find ID ``560`` from ``expressions``, you would call ``getElementById(560, expressions);``. This function returns the element object if it exists and ``undefined`` if it does not.

Don’t forget to restart your server when you make changes to **app.js**. To test the Express Yourself machine, use the box in the upper-left corner to send a GET request for a specified ID.

> Hint
The correct ID of the expression can be found using ``req.params.id``.