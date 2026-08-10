# CS 465 Module 6 — Angular Administrator SPA

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module6`

Module Six added the administrator-facing Angular single-page application to the existing Express, REST API, and MongoDB project. I separated the trip listing into reusable components, centralized API calls in a service, and added forms for creating and editing trip records.

## Work completed

- Created the Angular administrator application.
- Added a trip listing and reusable `TripCardComponent`.
- Added a `TripDataService` that uses `HttpClient` for GET, POST, PUT, and DELETE requests.
- Added reactive forms for creating and editing trips.
- Added backend POST, PUT, and DELETE controller methods and routes.
- Tested the SPA against the Express API and MongoDB rather than relying on local-only state.
- Verified the create and update workflows with a custom trip and confirmed the backend returned HTTP 201 for the successful PUT.

The main benefit of this refactor was separation of concerns. Rendering, form behavior, navigation, and API access are handled by focused components and services instead of one large file. That made later authentication work much easier because the same service boundary could be secured without rewriting the UI.

— Madison Parker