# CS 465 Module 2 — MVC Routing and Handlebars

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module2`

In Module Two, I reorganized Travlr Getaways from the initial Express/static structure into an MVC-oriented application. I separated routes, controllers, and Handlebars views under `app_server` and added reusable header and footer partials so shared markup did not have to be copied into each page.

## Work completed

- Moved server-side routes and views into `app_server`.
- Added controller functions for the home page and travel page.
- Added a dedicated `/travel` router.
- Configured Express to use `app_server/views`.
- Registered Handlebars partials.
- Converted the travel page from static HTML into a Handlebars view.

This branch shows the first major architectural refactor in the project. The public-facing result remained familiar to the customer, but the implementation became easier to maintain because routing, controller logic, and presentation were no longer mixed together.

— Madison Parker