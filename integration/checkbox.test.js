import mockAxios from "../__mocks__/axios";
import bestPracticesAPIController from "../src/BestPracticesApiController";

describe("test best practices API call", () => {
  

  it("calls mockAxios with endpoint", () => {
    bestPracticesAPIController()
    expect(mockAxios.get).toHaveBeenCalledWith("/best-practices");
  });

  it("returns 200 response", async () => {
      let response = await bestPracticesAPIController();   
      console.log(response);
      
      expect(mockAxios.get).toHaveBeenCalledWith("/best-practices");
      
      expect(response.status).toBe(200);
  });
});
