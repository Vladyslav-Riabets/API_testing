const apiService = require("/src/apiService");
const testData = require("/data/testData");
const shapes = require("./helpers/shapes")

describe("GET /users", () => {
  test("TEST 1: should return all users", async () => {
    const response = await apiService.getAllUsers();

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("TEST 2: should return used with id=1", async () => {
    const userId = 1;

    const response = await apiService.getUserById(userId);

    expect(response.status).toBe(200);
    shapes.expectUser(response.data);
  });

  test("TEST 3: should return correct data types", async () => {
    const userId = 1;
    const response = await apiService.getUserById(userId);
    const user = response.data;

    expect(response.status).toBe(200);
    shapes.expectUser(response.data);
  });

  describe("Negative test", () => {
    test("TEST 4: should return 404 for non-existent user", async () => {
      const nonExistentId = 99999;

      try{
        const response = await apiService.getUserById(nonExistentId);
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });
  });
  
});

describe("POST /users", () => {
  test("TEST 5: should create new user", async () => {
    const newUser = testData.validUser;
    const response = await apiService.createUser(newUser);

    expect(response.status).toBe(201);
    shapes.expectUser(response.data);
    expect(response.data.name).toBe(newUser.name);
    expect(response.data.username).toBe(newUser.username);
    expect(response.data.email).toBe(newUser.email);
    expect(response.data.phone).toBe(newUser.phone);
    expect(response.data.website).toBe(newUser.website);
  });
});

describe("POST /posts", () => {
  test("TEST 6: should create new post", async () => {
    const newPost = testData.validPost;
    const response = await apiService.createPost(newPost);

    expect(response.status).toBe(201);
    shapes.expectPost(response.data);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });
});
