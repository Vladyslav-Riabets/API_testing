const axios = require('axios');

jest.mock('axios');

describe('Mocked Axios requests', () => {
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('should handle successfull response', async() => {
        
        const mockedPost = {
            userId: 1,
                id: 2,
                title: 'This is title',
                body: 'This is body'
        };
        
        
        axios.get.mockResolvedValue({
            status: 200, 
            data: mockedPost
        });

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');

        expect(response.status).toBe(200);
        expect(response.data).toEqual(mockedPost);
    });

    test('should handle erroro 404', async()=>{

        axios.get.mockRejectedValue({
            response: {
                status: 404,
                data: {error: 'Not Found'}
            }
        });

        try{
            const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts/999');
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.response.data.error).toBe('Not Found');
        }
    });
});