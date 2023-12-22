const { Builder, By, until } = require("selenium-webdriver");
const chai = require("chai");

describe("Login UI Test", () => {
    it("Should display error for invalid login", async () => {
        let driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("http://localhost:3000/login");

            await driver.findElement(By.id("username")).sendKeys("invalidUser£$%");
            await driver.findElement(By.id("password")).sendKeys("invalidPassword£$%");
            await driver.findElement(By.id("login")).click();

            let errorMessage;
            try {
                errorMessage = await driver.wait(
                    until.elementLocated(By.css(".alert.alert-danger")),
                    10000,
                    "Error message element not found"
                );
                await driver.wait(
                    until.elementIsVisible(errorMessage),
                    10000,
                    "Error message element not visible"
                );
            } catch (error) {
                throw new Error("Error in locating or waiting for error message");
            }

            let errorMessageText = await errorMessage.getText();

            chai.assert.equal(errorMessageText.trim(), "Could not login");
        } finally {
            await driver.quit();
        }
    }, 30000);

    it("Should login with valid details", async () => {
        let driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("http://localhost:3000/login");

            await driver.findElement(By.id("username")).sendKeys("admin");
            await driver.findElement(By.id("password")).sendKeys("admin");
            await driver.findElement(By.id("login")).click();

            let url = await driver.getCurrentUrl();

            chai.assert.isTrue(url.includes("/menu"), "Login not successful");
        } finally {
            await driver.quit();
        }
    }, 30000);
});
