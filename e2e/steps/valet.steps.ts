import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../world";
import { expect } from "@playwright/test";

Given("There is a valet parking lot", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("I park my car in the Valet Parking Lot for {int} minutes", async function (duration) {
    // When('I park my car in the Valet Parking Lot for {float} minutes', function (float) {
    // Write code here that turns the phrase above into concrete actions
    await page.goto("http://localhost:1313/parking")
  }
);

Then("I will have to pay R {float}", function (price) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
