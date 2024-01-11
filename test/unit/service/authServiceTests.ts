import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
const authService = require("../../../service/authService");

const token = "3c8084d2-0a48-4f7a-84d5-0b742c617786";
const login = {
    username : "admin",
    password : "admin"
};
describe("AuthService", function () {
    describe("login", function () {
        it("Should return token from response on successfull login", async () => {
            const mock = new MockAdapter(axios);

            const data = [token];

            mock.onPost(authService.URL).reply(200, data);

            const result = await authService.login(login);
            expect(result[0]).to.equal(token);
        });
    });
});
