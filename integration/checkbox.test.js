// import MockAxios from "jest-mock-axios";
import mockAxios from "../__mocks__/axios";
import bestPracticesAPIController from "../src/BestPracticesApiController";

describe("test best practices API call", () => {
  it("calls mockAxios", () => {
    bestPracticesAPIController()
    expect(mockAxios.get).toHaveBeenCalled()
  });

});
