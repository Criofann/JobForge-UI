import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { expect } from "chai"
import { log } from "console"
const roleService = require("../../../service/roleService")



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

            mock.onGet(roleService.URL).reply(200, data)

            var results = await roleService.getAllRoles()
            expect(results[0]).to.deep.equal(role)
        })

        it('should throw exception when 500 error returned from axios', async () => {
            var mock = new MockAdapter(axios);
    
            mock.onGet(roleService.URL).reply(500);
    
            var error;
    
            try {
              await roleService.getAllRoles()
            } catch (e) {
                error = e.message
            }
            
            expect(error).to.equal('Could not get roles')
          })
    })
})
