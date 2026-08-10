# CS 465 Module 5 — RESTful API

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module5`

Module Five added a REST API between the presentation layer and MongoDB. The trip routes moved into `app_api`, and the public Handlebars travel controller was refactored so it requests trip data through `/api/trips` instead of reading directly from a local JSON file or querying MongoDB from the view layer.

## Work completed

- Added the `app_api` structure for routes, controllers, and Mongoose models.
- Implemented `GET /api/trips` to retrieve the full trip collection.
- Implemented `GET /api/trips/:tripCode` to retrieve a trip by code.
- Returned meaningful HTTP status codes for successful requests, missing records, and server errors.
- Refactored the customer travel controller to consume the REST API and pass returned JSON to the Handlebars view.
- Tested the endpoints with Postman before connecting later Angular work to the same API boundary.

This branch separates browser presentation from database access more clearly. The customer site and the later Angular administrator SPA can both use the same API instead of maintaining separate data-access logic.

— Madison Parker