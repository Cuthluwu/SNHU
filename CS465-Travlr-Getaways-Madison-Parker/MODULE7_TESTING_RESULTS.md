# Module Seven Security Verification

**Madison Parker — CS 465**

The final security workflow was tested with the Express backend on `localhost:3000`, the Angular administrator SPA on `localhost:4200`, MongoDB running locally, and Postman for direct API verification.

| Test | Request / Action | Result |
|---|---|---|
| Register mock administrator | `POST /api/register` | `200 OK` and JWT returned |
| Log in | `POST /api/login` | `200 OK` and JWT returned |
| Attempt protected create without token | `POST /api/trips` | `401 Unauthorized` |
| Create with Bearer token | `POST /api/trips` | `201 Created` |
| Update from authenticated SPA | `PUT /api/trips/M7SECURE1` | `201 Created` response used by the course workflow |
| Delete with Bearer token | `DELETE /api/trips/M7SECURE1` | `200 OK` |
| Final browser verification | authenticated trip listing | Test record removed; original three seeded trips remained |

The 401/201 comparison was the most important security check: the same administrative endpoint rejected the request without a token and accepted it when the request carried a valid JWT. This verified that the server-side authorization layer, not only the visibility of Angular buttons, controlled write access.
