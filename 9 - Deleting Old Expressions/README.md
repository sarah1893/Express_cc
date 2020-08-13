# Deleting Old Expressions

``DELETE`` is the HTTP method verb used to delete resources. Because ``DELETE`` routes delete currently existing data, their paths should usually end with a route parameter to indicate which resource to delete.

Express uses ``.delete()`` as its method for ``DELETE`` requests.

Servers often send a 204 No Content status code if deletion occurs without error.

## Instructions
1. Create a DELETE /expressions/:id route. It should send back a 404 response for a request with an invalid id, and it should delete the proper element from the ``expressions`` array and send a 204 status with a valid id.

To test your functionality, use the DELETE tab in the upper left. Select the ID to delete and send the request.

> Hint
You can use ``getIndexById`` to find the index of the element to delete. ``getIndexById`` will return ``-1`` for a non-existent ID, and the proper index if it exists. Then you can use the [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the element.