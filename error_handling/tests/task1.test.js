const apiService = require('../src/apiService');

describe('TASK 1: Error handling', () => {
    test("should return 404 for non-existent user", async () => {
          const nonExistentId = 99999;
    
          try{
            const response = await apiService.getUserById(nonExistentId);
          } catch (error) {
            expect(error.response.status).toBe(404);
          }
        });
});