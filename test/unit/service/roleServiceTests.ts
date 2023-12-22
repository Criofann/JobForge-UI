import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
const roleService = require("../../../service/roleService");

const role = {
    roleName : "AP Software Engineer",
    specification : "As an Apprentice Software Engineer with Kainos, you will work on projects where you can"
        + "make a real difference to people’s lives – the lives of people you know. extensive training"
        + "to set you off on the right foot, you will quickly work as a part of a team in developing"
        + "solutions within our real projects, learning all about our development languages, projects"
        + "and technologies. You will be fully supported by experienced colleagues in the team as"
        + "well as an experienced mentor, who will provide training and mentoring throughout your"
        + "studies. You’ll also get experience across a wide range of teams and projects, with built-in"
        + "rotations to help you learn and work out which element of Software Engineering suits your"
        + "interests and skills best. ",
    capabilityName : "engineering",
    responsibilities : "team-working, problem solving",
    sharepointLink : "https://kainossoftwareltd.sharepoint.com/SitePages/Home.aspx",
};

describe("RoleService", function () {
    describe("getRoles", function () {
        it("Should return roles from response", async () => {
            const mock = new MockAdapter(axios);

            const data = [role];

            mock.onGet(roleService.URL).reply(200, data);

            const results = await roleService.getAllRoles();
            expect(results[0]).to.deep.equal(role);
        });

        it("should throw exception when 500 error returned from axios", async () => {
            const mock = new MockAdapter(axios);
    
            mock.onGet(roleService.URL).reply(500);
    
            let error;
    
            try {
              await roleService.getAllRoles();
            } catch (e) {
                error = e.message;
            }
            
            expect(error).to.equal("Could not get roles");
          });
    });
});
const Role = {
    roleName: "software engineer",
    jobFamily: "engineering",
    specification: "add spec later",
    capabilityName: "engineering",
    bandName: "band1",
    responsibilities:"responsibilities", 
    sharepointLink:"https://kainossoftwareltd.sharepoint.com/SitePages/Home.aspx"

};
describe("roleService", function (){
    describe("createRole", function (){
        it("should return id from response", async () => {
            const mock = new MockAdapter(axios);
            mock.onPost(roleService.URL).reply(200,1);
            mock;
            const results = await roleService.createRole(Role);
            expect(1).to.deep.equal(results);


        });
    });
});
it("should return invalid from 400 error", async () => {
    const mock = new MockAdapter(axios);

    mock.onPost(roleService.URL).reply(400, 1);
    let error;

      try {
        await roleService.createRole(Role);
      } catch (e) {
        error = e.message;
      }

    expect(error).to.deep.equal("Invalid data");
});
it("should return Could not create Role from 500 error", async () => {
    const mock = new MockAdapter(axios);

    mock.onPost(roleService.URL).reply(500, 1);
    let error;

      try {
        await roleService.createRole(Role);
      } catch (e) {
        error = e.message;
      }

    expect(error).to.deep.equal("Could not create Role");
});
