# Other HTTP Methods

[HTTP Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) defines a number of different method verbs with many use cases. So far, we have been using the ``GET`` request which is probably the most common of all. Every time your browser loads an image, it is making a ``GET`` request for that file!

This course will cover three other important HTTP methods: ``PUT``, ``POST``, and ``DELETE``. Express provides methods for each one: ``app.put()``, ``app.post()``, and ``app.delete()``.

PUT requests are used for updating existing resources. In our Express Yourself machine, a PUT request will be used to update the name or emoji of an expression already saved in our database. For this reason, we will need to include a unique identifier as a route parameter to determine which specific resource to update.

## Instructions

1. For now, open a PUT /expressions/:id route with an empty ``(req, res, next)`` callback function. We will fully implement its functionality in the next exercise.