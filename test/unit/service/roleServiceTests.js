var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const RoleService = require("../../../service/roleService");

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

            expect(results[0]).to.deep.equal(role)
        })
    })
})
