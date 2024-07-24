import mockAxios from 'jest-mock-axios';

mockAxios.get.mockResolvedValue({response:300})
// mockAxios.mockResponse({status: 300})


export default mockAxios;