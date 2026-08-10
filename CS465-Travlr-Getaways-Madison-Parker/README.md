# CS 465 Module 7 — Security and Authenticated Administration

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module7`

Module Seven completed the security layer for the Travlr Getaways administrator SPA. I added local user registration and login, salted password hashing, Passport authentication, one-hour JSON Web Tokens, protected write endpoints, browser token storage, and an Angular HTTP interceptor that attaches the token to authorized API requests.

## Security implementation

- Added a MongoDB user model that stores a random salt and PBKDF2-derived password hash rather than a plain-text password.
- Added `POST /api/register` and `POST /api/login`.
- Configured Passport with a local strategy that authenticates by email and password.
- Generated JWTs that expire after one hour.
- Kept trip GET endpoints public while protecting POST, PUT, and DELETE operations with Bearer-token validation.
- Added an Angular admin login form, authentication service, local token storage, login/logout navigation, and JWT interceptor.
- Limited Add, Edit, and Delete controls to an authenticated administrator session.

## Final security testing

I verified the security flow with Postman and the Angular SPA using the completed local application:

- Registration returned **HTTP 200** with a JWT.
- Login returned **HTTP 200** with a JWT.
- A protected trip POST without an Authorization header returned **HTTP 401**.
- The same protected POST with a valid JWT returned **HTTP 201**.
- The authenticated SPA successfully updated the Module Seven test trip.
- The authenticated DELETE returned **HTTP 200**.
- After the test record was removed, the SPA returned to the original three seeded trips.

The `.env` file is intentionally excluded from Git. Only `.env.example` is kept in the repository so no development JWT secret is published.

— Madison Parker