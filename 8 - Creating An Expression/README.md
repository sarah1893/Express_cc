# Creating An Expression

``POST`` is the HTTP method verb used for creating new resources. Because ``POST`` routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created.

For example, to create a new monster, a client would make a ``POST`` request to ``/monsters``. The client does not know the ``id`` of the monster until it is created and sent back by the server, therefore POST ``/monsters/:id`` doesn’t make sense because a client couldn’t know the unique id of a monster before it exists.

Express uses ``.post()`` as its method for ``POST`` requests. POST requests can use many ways of sending data to create new resources, including query strings.

The HTTP status code for a newly-created resource is 201 Created.

## Instructions

1. Create a POST /expressions route. It should send create and add a new expression to the ``expressions`` array if it is a valid new expression (meaning it has an ``emoji`` and ``name`` key). It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.

You can use the ``createElement(elementType, objectToCreate)`` helper function to create a valid expression. The first argument is the type of element, so it should be ``'expressions'`` in this case. The second argument should be the query object with an ``emoji`` and a ``name`` property. This function will return ``false`` if the ``objectToCreate`` does not contain all necessary key-value pairs, and it will return the newly-created element if ``object to create`` is valid. It does not add the created element to any arrays, you will need to do so yourself.

Don’t forget to restart your server and test as you implement the functionality. To test your route, use the POST tab in the upper left corner. Select a name and emoji and send the request to see if your route works as intended.

> Hint
You can use the ``.push()`` method of the ``expressions`` array to add a new element after it has been created, for example:

```javascript
const newElement = createElement('emoji', {name: 'example', emoji: ':)'});
if (newElement) {
  elements.push(newElement);
}
```