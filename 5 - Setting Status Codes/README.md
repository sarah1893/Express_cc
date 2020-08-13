# Setting Status Codes

Express allows us to set the [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) on responses before they are sent. Response codes provide information to clients about how their requests were handled. Until now, we have been allowing the Express server to set status codes for us. For example, any ``res.send()`` has by default sent a 200 OK status code.

The ``res`` object has a ``.status()`` method to allow us to set the status code, and other methods like ``.send()`` can be chained from it.

```javascript
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});
```

In this example, we’ve implemented a route to retrieve inventory levels from a Monster Store. Inventory levels are kept in the ``monsterStoreInventory`` variable. When a request arrives for ``/monsters-inventory/mothMen``, the route matches and so the callback is invoked. ``req.params.name`` will be equal to ``'mothMen'`` and so our program accesses ``monsterStoreInventory['mothMen']``. Since there are no ``mothMen`` in our inventory,``res.status()`` sets a ``404`` status code on the response, and ``.send()`` sends the response.

## Instructions

1. Let’s make sure that our GET /expressions/:id route handles invalid requests properly, for instance if we request an expression ID that does not exist.

Complete your route so that it sends back the correct expression object if it exists and sends back a 404 response if it does not.

> Hint
Remember that ``getElementById`` returns an object for a valid ID and ``undefined`` for an invalid ID.