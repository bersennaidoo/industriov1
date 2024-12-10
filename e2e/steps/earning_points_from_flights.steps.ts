import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../world";
import { expect } from "@playwright/test";

type FrequentFlyerStatus = {
    Standard: string
}

class FrequentFlyerMember {
    name?: string
    status?: FrequentFlyerStatus
    points?: number

    constructor(name: string, status: FrequentFlyerStatus) {
        this.name = name
        this.status = status
    }

    fly(city: string) {
        if (city === "paris") {
            this.points = 100
        } else if (city === "london") {
            this.points = 200
        } else {
            this.points = 0
        }
    }
}

Given("{string} is a {string} Frequent Flyer member", function (string, string2) {
  this.member = new FrequentFlyerMember(
    string,
    { Standard: string2}
  )
});

When("she flies from Paris and Berlin in Economy class", function () {
  // Write code here that turns the phrase above into concrete actions
  this.member.fly("paris")
});

Then("should earn {int} points", function (int) {
  // Then('should earn {float} points', function (float) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.member.points).toEqual(int)
});
