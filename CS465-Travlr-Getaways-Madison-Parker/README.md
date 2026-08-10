# CS 465 Module 4 — NoSQL Database, Models, and Schemas

**Student:** Madison Parker  
**Course:** CS 465 Full Stack Development  
**Branch:** `module4`

Module Four moved the trip data into MongoDB and introduced Mongoose as the application data layer. I added the database connection, created the Trip schema, and built a repeatable seed script so the same three trip records could be loaded for testing without creating duplicates.

## Work completed

- Connected the application to the local `travlr` MongoDB database through Mongoose.
- Created a Trip schema with required fields for code, name, length, start date, resort, price, image, and description.
- Indexed the trip code and name fields used for retrieval.
- Added a seed script that clears the old sample data and inserts the three current trip records.
- Verified the `trips` collection in MongoDB and confirmed the customer-facing site still rendered correctly.

This branch establishes MongoDB as the persistent source of truth for the project instead of treating JSON as the final storage layer.

— Madison Parker