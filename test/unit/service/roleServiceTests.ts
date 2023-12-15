import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import chai from "chai" 
import expect from "chai.expect"
const expect1 = chai.expect;
var RoleService = require("../../../service/roleService");


const role = {
    roleName : "role",
    specification : "ijasndjsanknajn spec entered bla bla",
    capabilityName : "engineering",
    responsibilities : "be very responsible",
    sharepointLink : "https://kainossoftwareltd.sharepoint.com/SitePages/Home.aspx",
}

describe("RoleService", function () {
    describe("getRoles", function () {
        it("Should return roles from response", async () => {
            var mock = new MockAdapter(axios)

            const data = [role]

            mock.onGet(RoleService.URL).reply(200, data)

            var results = await RoleService.getRoles()

            expect1(results[0]).to.deep.equal(role)
        })
    })
})
