import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../world";
import { expect } from "@playwright/test";

Given("the customer wants to shop online", function () {
  // Write code here that turns the phrase above into concrete actions
});

When("customer visits home page", async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.goto("http://localhost:1313/")
});

Then("the customer should see h2", async function () {
  // Write code here that turns the phrase above into concrete actions
  await expect(page).toHaveTitle(/Hi/);
});


