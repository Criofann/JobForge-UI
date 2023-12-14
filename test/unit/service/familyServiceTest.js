
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
console.log(process.cwd())
const FamilyService = require('service/familyService')
const { error } = require ('selenium-webdriver');
const JobFamily = {
    roleName: "software engineer",
    jobFamily: "job family"
}
describe('familyService', function (){
    describe('createFamily', function (){
        it('should return id from response', async () => {
            var mock = new MockAdapter(axios);
            mock.onPost(FamilyService.URL).reply(200,1)
            var results = await FamilyService.createFamily(JobFamily)
            expect(1).to.deep.equal(results)


        })
    })
})