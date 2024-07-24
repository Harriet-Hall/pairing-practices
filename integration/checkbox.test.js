import mockAxios from "../__mocks__/axios";
import bestPracticesAPIController from "../src/BestPracticesApiController";

describe("test best practices API call", () => {
  let response = bestPracticesAPIController();

  it("calls mockAxios with endpoint", () => {
    expect(mockAxios.get).toHaveBeenCalledWith("/best-practices");
  });

  it("returns 200 response", () => {
      expect(response.status).toBe(200);
  });
});
