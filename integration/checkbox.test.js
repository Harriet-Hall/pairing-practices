import mockAxios from "../__mocks__/axios";
import bestPracticesAPIController from "../src/BestPracticesApiController";

describe("test best practices API call", () => {
    bestPracticesAPIController()

  it("calls mockAxios with endpoint", () => {
    expect(mockAxios.get).toHaveBeenCalledWith("/best-practices")
  });

});
