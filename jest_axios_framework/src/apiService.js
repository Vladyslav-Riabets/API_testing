const httpClient = require('./httpClient');

class ApiService {
    
    async get (url, params = {}) {
        const response = await httpClient.get(url, {params});
         return response;
    }

    async post (url, data = {}) {
        const response = await httpClient.post(url, data);
        return response;
    }

    async getAllUsers() {
        return this.get('/users');
    }

    async getUserById(id) {
        return await this.get(`/users/${id}`);
    }

    async createUser(userData) {
        return await this.post('/users', userData);
    }

    async createPost(postData) {
        return await this.post('/posts', postData);
    }
}

module.exports = new ApiService();