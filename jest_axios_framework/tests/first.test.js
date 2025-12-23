const apiService = require('/src/apiService');
const testData = require('/data/testData');

describe("GET /users", () => {
  test("should return all users", async () => {
    const response = await apiService.getAllUsers();

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("should return used with id=1", async () => {
    const userId = 1;

    const response = await apiService.getUserById(userId);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(userId);
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("email");
  });

  test("should return users with correct structure", async () => {
    const response = await apiService.getAllUsers();
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("username");
    }
  });
});

describe("POST /users", () => {
  test("should create new user", async () => {
    const newUser = testData.validUser;
    const response = await apiService.createUser(newUser);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.name).toBe(newUser.name);
    expect(response.data.email).toBe(newUser.email);
  });
});

describe("POST /posts", () => {
  test("should create new post", async () => {
    const newPost = testData.validPost;
    const response = await apiService.createPost(newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });
});
