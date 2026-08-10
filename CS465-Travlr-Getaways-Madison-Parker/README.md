# CS 465 Final Portfolio — Travlr Getaways

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `final`

This folder contains the final CS 465 Travlr Getaways source organized for portfolio review. The application was developed across the course from a static customer-facing Express site into a MEAN-stack application with MongoDB, Express, Angular, and Node.js.

## Final application structure

- `travlr/app_server` — Express MVC routes, controllers, Handlebars views, and partials for the customer-facing application.
- `travlr/app_api` — REST controllers, Mongoose models, user authentication, Passport configuration, and protected API routes.
- `travlr/app_admin` — Angular administrator SPA with trip listing, reusable trip cards, add/edit forms, login, authentication service, and JWT interceptor.
- `travlr/data` — repeatable MongoDB seed data for the original Travlr trip records.
- `travlr/postman` — API collections used during REST and security testing in the completed local project.
- `MODULE7_TESTING_RESULTS.md` — concise record of the final authentication and protected CRUD verification.

## Final verified behavior

The completed local project was tested before this portfolio submission. Registration and login each returned HTTP 200 with a JWT. A protected trip POST without a token returned HTTP 401, while the authenticated POST returned HTTP 201. The Angular SPA then successfully updated the test record, and the authenticated DELETE returned HTTP 200. After cleanup, the administrator listing returned to the original three seeded trips.

The repository does not publish the local `.env` file. `.env.example` documents the required `JWT_SECRET` variable without exposing the development secret.

The full Module Eight Architecture, Functionality, Testing, and Reflection responses are in the repository-root `README.md`, with a separate written submission in `MODULE8_JOURNAL_MADISON_PARKER.md`.

— Madison Parker
