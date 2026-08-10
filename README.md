# CS 465 Full Stack Development Portfolio

## Travlr Getaways — Madison Parker

This branch contains my final CS 465 Travlr Getaways portfolio work. The project began as a customer-facing Express website and was developed across the course into a MEAN-stack application with MongoDB, Express, Angular, and Node.js. The final version includes the public customer site, a MongoDB-backed REST API, an Angular administrator SPA, CRUD operations for trip data, and token-based authentication for administrative changes.

The course work is organized under `CS465-Travlr-Getaways-Madison-Parker/`. I kept separate branches for the major stages of development so the progression of the application can be reviewed instead of only the finished product.

## Branch History

| Branch | Main focus |
|---|---|
| `module1` | Initial Node.js/Express application and static customer website |
| `module2` | MVC routing, controllers, Handlebars views, and partials |
| `module3` | JSON-driven trip data and reusable Handlebars rendering |
| `module4` | MongoDB, Mongoose schema, connection, and repeatable seed process |
| `module5` | RESTful API and refactoring the public site to consume API data |
| `module6` | Angular administrator SPA, reusable components, services, and CRUD |
| `module7` | Registration, login, JWT authentication, and protected write endpoints |
| `final` | Final portfolio version and Module Eight reflection |

---

# Architecture

## Frontend approaches used in the project

The frontend changed significantly as the project developed. The original customer-facing site used static HTML, CSS, and JavaScript served by Express. That approach was useful as a starting point because the supplied Travlr design could be verified before changing the project structure, but the page content was tightly coupled to individual HTML files.

I then refactored the public site into an Express MVC structure using Handlebars. Express routes pass requests to controllers, and the controllers prepare data for the Handlebars views. Shared header and footer markup was moved into partials, and the travel page was changed from repeated static trip markup to one template that renders a collection of trip objects. This kept the customer-facing experience server-rendered while making the code easier to maintain.

The administrator side uses Angular as a single-page application. This is different from the public Express site because the administrator can move between the trip list, add form, edit form, and login view without relying on a complete server-rendered page for every interaction. Angular components manage the UI, services communicate with the Express API, and routing changes the active view inside the SPA. The administrator interface therefore has richer client-side behavior, including reusable trip cards, reactive forms, authentication state, and CRUD controls that change based on whether an administrator is logged in.

The three frontend approaches were useful at different stages. Static HTML gave me a stable baseline, Express and Handlebars introduced server-side organization and reusable templates, and Angular provided the interactive administrative experience required for maintaining the database.

## Why the backend uses MongoDB

MongoDB fit this project because the application already moves trip data through JavaScript objects and JSON. MongoDB stores document-shaped records that map naturally to the JSON returned by the REST API, which reduced the amount of conversion needed between the database, Express controllers, and Angular.

The trip records also have a clear document structure: code, name, length, start date, resort, price per person, image, and description. Mongoose adds structure on top of MongoDB by defining required fields, validation rules, and indexed fields while still keeping the document model straightforward. Using one MongoDB collection also gave both the public site and administrator SPA the same source of truth. A trip changed through the admin application is stored in the same database used when the public application requests trip information.

---

# Functionality

## JSON, JavaScript, and the connection between frontend and backend

JavaScript is the programming language used to implement behavior in this project. It contains functions, control flow, classes, asynchronous operations, framework code, and server logic. JSON is a data-interchange format. It represents values in a structured text form, but it does not contain executable application behavior.

JSON became the common data format between the layers of Travlr Getaways. Early in the project, `trips.json` was used as a prototype data source. Later, the trip records moved into MongoDB and the Express API returned the database results as JSON. The Angular `TripDataService` receives those JSON responses and maps them to the Trip interface used by the SPA. The public Express controller also consumes the API response and passes the resulting trip objects to Handlebars. Because both frontends use the same API data shape, JSON acts as the contract that connects the browser-facing code to the server and database layers.

## Refactoring and reusable UI components

Several refactors during the course improved the project instead of simply adding more code on top of the original files.

The first major refactor was moving from static trip markup to JSON-backed Handlebars rendering. Instead of maintaining three nearly identical blocks of HTML, the travel view uses one loop to render each trip. The next major refactor was moving the data source from a local JSON file into MongoDB and placing REST endpoints between the presentation layer and database. That prevented the customer-facing controller and later Angular SPA from needing their own database-access logic.

The Angular work added another important layer of reuse. Trip rendering was separated into `TripCardComponent`, while `TripListingComponent` became responsible for retrieving and organizing the collection. API access was moved into `TripDataService`, so the listing, add form, edit form, and authentication workflow do not each create their own HTTP logic. In Module Seven, token handling was separated into `AuthenticationService`, and the JWT interceptor became responsible for attaching the Bearer token to authenticated requests.

Reusable UI components reduced duplicated markup and made changes more consistent. They also made the project easier to test and reason about because each component or service has a narrower responsibility. For example, the trip card can focus on displaying one trip and emitting edit/delete actions while the listing component focuses on the collection. This separation of concerns became especially useful when authentication was added because the security layer could be integrated with existing services instead of requiring the entire SPA to be rewritten.

---

# Testing

## Methods, endpoints, and security

I came away from this project with a much clearer understanding of the relationship between an HTTP method and an endpoint. The endpoint identifies the resource or operation, while the method communicates what the client intends to do with it. Travlr uses `GET /api/trips` to retrieve all trips, `GET /api/trips/:tripCode` to retrieve a specific trip, `POST /api/trips` to create a trip, `PUT /api/trips/:tripCode` to update a trip, and `DELETE /api/trips/:tripCode` to remove a trip. The authentication API adds `POST /api/register` and `POST /api/login`.

I tested the API directly with Postman before relying on the Angular interface. This made it possible to determine whether a problem came from the server/API or from the frontend. Successful GET requests confirmed retrieval, POST requests confirmed creation, PUT requests confirmed that edited data persisted in MongoDB, and DELETE requests confirmed cleanup. I also checked error behavior rather than only successful requests, including missing data and unauthorized requests.

Security added another requirement to endpoint testing because a request could be structurally correct and still need to be rejected. The final write routes require a valid JWT in the `Authorization: Bearer <token>` header. During the final Module Seven test, registration returned HTTP 200 with a token, login returned HTTP 200 with a token, and a protected POST without an Authorization header returned HTTP 401. I then sent the same type of protected POST with a valid JWT and received HTTP 201. The authenticated SPA successfully updated the test record, and the authenticated DELETE returned HTTP 200. After deletion, the browser showed the original three seeded trips again.

That 401/201 comparison was important because it demonstrated that security was enforced by the Express endpoint itself. Hiding Add, Edit, and Delete buttons in Angular improves the user experience, but it is not sufficient security on its own. The server still has to reject an unauthorized request even if someone attempts to call the API outside the SPA.

---

# Reflection

CS 465 connected several topics that I had previously worked with more independently. Instead of treating frontend development, backend routing, databases, APIs, and security as separate exercises, Travlr Getaways required me to follow one request through the complete application. I had to understand what Angular was sending, how Express routed the request, what the controller expected, how Mongoose queried or changed MongoDB, what HTTP response came back, and how the frontend handled that response.

The troubleshooting was as useful as the implementation. I became more comfortable checking the current working directory, package configuration, server output, database connection, browser behavior, and Postman response instead of making changes at random. The final authentication work reinforced that habit because several layers had to agree: the user record, password verification, token generation, token storage, request interceptor, Authorization header, and protected route middleware.

The strongest skills I developed in this course are full-stack architecture, REST API design, MongoDB/Mongoose integration, Angular component and service design, Express MVC organization, CRUD implementation, JSON data flow, authentication with Passport and JWTs, and systematic endpoint testing. I also gained more practice using Git branches to preserve working stages of a project rather than treating version control as only a place to upload finished files.

From a professional standpoint, this project gives me something more useful than a single isolated code sample. I can explain why the application is divided into layers, how the two frontend experiences differ, how data moves between those layers, why administrative write operations are protected, and how I verified that the security controls actually work. Those are skills I can carry directly into software development work because they involve both implementation and the ability to diagnose how different parts of an application interact.

---

# Final Application Notes

The final source under `CS465-Travlr-Getaways-Madison-Parker/travlr/` does **not** include a committed `.env` file. The repository uses `.env.example` to document the required `JWT_SECRET` variable without publishing the local development secret.

Typical local startup sequence:

```powershell
# Express / API
npm install
npm run seed
npm start

# Angular admin SPA, in a second terminal
cd app_admin
npm install
npm start
```

Local addresses used during development:

- Customer/Express application: `http://localhost:3000`
- Travel page: `http://localhost:3000/travel`
- Angular administrator SPA: `http://localhost:4200`

## Final verified security results

- Register: `200 OK` + JWT
- Login: `200 OK` + JWT
- Protected POST without token: `401 Unauthorized`
- Protected POST with JWT: `201 Created`
- Authenticated update: `201`
- Authenticated delete: `200 OK`
- Final trip listing: original three seeded trips

**Madison Parker**  
CS 465 — Full Stack Development
