
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";


const FamilyService = require("../../../service/familyService");

const JobFamily = {
    roleName: "software engineer",
    jobFamily: "job family"
};

describe("familyService", function () {
    describe("createFamily", function () {
        it("should return id from response", async () => {
            const mock = new MockAdapter(axios);
            mock.onPost(FamilyService.URL).reply(200, 1);
            const results = await FamilyService.createFamily(JobFamily);
            expect(1).to.deep.equal(results);
        });
    });
});
it("should return invalid from 400 error", async () => {
    console.log("logging");
    const mock = new MockAdapter(axios);

    mock.onPost(FamilyService.URL).reply(400, 1);
    let error;

      try {
        await FamilyService.createFamily(JobFamily);
      } catch (e) {
        error = e.message;
      }

    expect(error).to.deep.equal("Invalid data");
  });
  it("should return Could not create family from 500 error", async () => {
    console.log("logging");
    const mock = new MockAdapter(axios);

    mock.onPost(FamilyService.URL).reply(500, 1);
    let error;

      try {
        await FamilyService.createFamily(JobFamily);
      } catch (e) {
        error = e.message;
      }

    expect(error).to.deep.equal("Could not create family");
  });

