const apiService = require('../src/apiService');

describe('TASK 2: Custom headers and params', () => {
  test('should check request with custom headers and parameters', async () => {
    const response = await apiService.getAllPosts({
      headers: {
        Authorization: 'Bearer fake-token',
        'x-api-key': 'qa-test-key',
        'x-requested-id': '123',
        Accept: 'application/json',
      },
      params: {
        userId: 2,
        id: 11,
      },
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    const post = response.data[0];

    expect(post).toHaveProperty('userId', 2);
    expect(post).toHaveProperty('id', 11);
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });
});
