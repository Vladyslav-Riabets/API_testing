# jest_axios_framework

A minimal Jest + Axios API testing framework that targets the JSONPlaceholder demo API. It includes a small API service layer, reusable response shape assertions, and sample GET/POST tests with test data.

## Project structure and file responsibilities

- `src/httpClient.js` - Axios instance with base URL, default headers, timeout, and request/response logging via interceptors.
- `src/apiService.js` - Small service wrapper exposing `get`/`post` helpers and endpoint-specific methods (`getAllUsers`, `getUserById`, `createUser`, `createPost`).
- `tests/first.test.js` - Test suite covering GET `/users`, GET `/users/:id`, and POST `/users` and `/posts` flows (including a negative 404 case).
- `tests/helpers/shapes.js` - Shared Jest assertions for response body shape validation (user and post models).
- `data/testData.js` - Static test fixtures for valid user and post payloads.
- `jest.config.js` - Jest configuration (Node environment, verbose output, timeout, coverage collection, test match pattern).
- `package.json` - Project metadata, dependencies, and test scripts.
- `coverage/` - Jest coverage output (generated after tests run).
- `screenshots/` - Saved screenshots of test execution output.

## Scripts

- `npm test` - Run all tests once.
- `npm run test:watch` - Run tests in watch mode.

## Notes

- The base API is `https://jsonplaceholder.typicode.com` (configured in `src/httpClient.js`).
- Tests expect JSONPlaceholder behavior (for example, POST requests return a created object with an `id`).
