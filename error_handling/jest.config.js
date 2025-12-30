// jest.config.js
module.exports = {
  testEnvironment: 'node',           // Середовище для Node.js
  testMatch: ['**/tests/**/*.test.js'], // Патерн для пошуку тестів
  testTimeout: 10000,                // Timeout для тестів (10 секунд)
  collectCoverage: true,             // Збирати покриття
  coverageDirectory: 'coverage',     // Папка для звітів покриття
  verbose: true                      // Детальний вивід
};