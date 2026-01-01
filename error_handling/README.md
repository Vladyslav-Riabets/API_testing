# Error Handling Project

This folder contains a small Node.js + Jest project that demonstrates API error handling, request logging, and mocking Axios calls.

## Structure and Responsibilities

- `package.json`
  - Project metadata, scripts, and dependencies (`axios`, `jest`).
- `package-lock.json`
  - Locked dependency tree for reproducible installs.
- `jest.config.js`
  - Jest configuration (Node test environment, test matching, timeout, coverage).
- `src/`
  - Application source code.
  - `src/httpClient.js`
    - Axios instance configuration (base URL, timeout, headers).
    - Request/response interceptors for logging and error reporting.
  - `src/apiService.js`
    - Small service wrapper around the HTTP client for API calls.
    - Exposes helpers like `getAllPosts` and `getUserById`.
- `tests/`
  - Jest test suites for tasks.
  - `tests/task1.test.js`
    - Verifies 404 handling when fetching a non-existent user.
  - `tests/task2.test.js`
    - Verifies custom headers and query params with a real request.
  - `tests/task3.test.js`
    - Demonstrates Axios mocking for success and 404 error flows.
- `coverage/`
  - Jest coverage output (generated).
- `screenshots/`
  - Test run screenshots or related artifacts (project assets).
- `node_modules/`
  - Installed dependencies (generated).

## Notes

- Tests hit `https://jsonplaceholder.typicode.com` for live data.
- Run tests with: `npm test`
