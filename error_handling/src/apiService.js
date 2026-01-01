const httpClient = require('./httpClient');

class ApiService {
    
    async get (url, config = {}) {
        const response = await httpClient.get(url, config);
         return response;
    }

    async getAllPosts(config = {}) {
        return this.get('/posts', config);
    }

    async getUserById(id) {
        return await this.get(`/users/${id}`);
    }

}

module.exports = new ApiService();