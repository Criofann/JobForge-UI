var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const FamilyService = require('../../../service/role')
const { error } = require ('selenium-webdriver');
const Role = {
}
describe('roleService', function (){
    describe('createRole', function (){
        it('should return id from response', async () => {
            var mock = new MockAdapter(axios);
            mock.onPost(FamilyService.URL).reply(200,1)
            var results = await FamilyService.createFamily(Role)
            expect(1).to.deep.equal(results)


        })
    })
})