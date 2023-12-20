import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
const authService = require("../../../service/authService");

const token = "3c8084d2-0a48-4f7a-84d5-0b742c617786";
const login = {
    username : "admin",
    password : "admin"
}
describe("AuthService", function () {
    describe("login", function () {
        it("Should return token from response on successfull login", async () => {
            const mock = new MockAdapter(axios);

            const data = [token];

            mock.onPost(authService.URL).reply(200, data);

            let result = await authService.login(login);
            expect(result[0]).to.equal(token);
        });

        /* it("should throw exception when 500 error returned from axios", async () => {
            const mock = new MockAdapter(axios);
    
            mock.onGet(roleService.URL).reply(500);
    
            let error;
    
            try {
              await roleService.getAllRoles();
            } catch (e) {
                error = e.message;
            }
            
            expect(error).to.equal("Could not get roles");
          }); */
    });
});
