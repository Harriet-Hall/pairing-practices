import mockAxios from 'jest-mock-axios';

mockAxios.get.mockResolvedValue({status:200})
// mockAxios.mockResponse({status: 300})


export default mockAxios;