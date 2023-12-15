import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';


const RoleService = require('../../../service/roleService');
const Role = {
    roleName: "software enginner",
    specification: "add spec later",
    capabilityName: "engineering",
    bandName: "band1",
    responsibilities:"responsibilities", 
    sharepointLink:"https://kainossoftwareltd.sharepoint.com/SitePages/Home.aspx"

}
describe('roleService', function (){
    describe('createRole', function (){
        it('should return id from response', async () => {
            var mock = new MockAdapter(axios);
            mock.onPost(RoleService.URL).reply(200,1)
            var results = await RoleService.createRole(Role)
            expect(1).to.deep.equal(results)


        })
    })
})
it('should return invalid from 400 error', async () => {
    var mock = new MockAdapter(axios);

    mock.onPost(RoleService.URL).reply(400, 1)
    var error;

      try {
        await RoleService.createRole(Role);
      } catch (e) {
        var error = e.message
      }

    expect(error).to.deep.equal('Invalid data')
})
it('should return Could not create Role from 500 error', async () => {
    console.log('logging')
    var mock = new MockAdapter(axios);

    mock.onPost(RoleService.URL).reply(500, 1)
    var error;

      try {
        await RoleService.createRole(Role);
      } catch (e) {
        var error = e.message
      }

    expect(error).to.deep.equal('Could not create Role')
})