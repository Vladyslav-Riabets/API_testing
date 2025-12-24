const shapes = {
  expectPost(post) {
    expect(post).toBeDefined();

    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');

    expect(post.userId).toEqual(expect.any(Number));
    expect(post.id).toEqual(expect.any(Number));
    expect(post.title).toEqual(expect.any(String));
    expect(post.body).toEqual(expect.any(String));
  },

  expectUser(user) {
    expect(user).toBeDefined();

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');

    expect(user.id).toEqual(expect.any(Number));
    expect(user.name).toEqual(expect.any(String));
    expect(user.username).toEqual(expect.any(String));
    expect(user.email).toEqual(expect.any(String));
  }
};

module.exports = shapes;
