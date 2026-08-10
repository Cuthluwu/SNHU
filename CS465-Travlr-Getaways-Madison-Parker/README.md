# CS 465 Module 3 — Static HTML to Templates With JSON

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module3`

Module Three moved the trip content out of the Handlebars markup and into `data/trips.json`. The travel controller reads the JSON file and passes the trip collection to the view, and the Handlebars template uses one `{{#each trips}}` loop to render the trip cards.

## Work completed

- Created a JSON data source for the three sample trips.
- Updated the travel controller to load and parse the JSON file.
- Passed the trip array from the controller into the Handlebars view.
- Replaced repeated trip markup with a reusable Handlebars loop.
- Confirmed Gale Reef, Dawson's Reef, and Claire's Reef still displayed with their images and descriptions.

This was the point where the frontend stopped depending on trip values hard-coded directly into the page. It also established the JSON data shape that was carried into the MongoDB and REST API work in later modules.

— Madison Parker