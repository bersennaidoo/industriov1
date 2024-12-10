import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, firefox, Page } from "playwright/test";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await firefox.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("http://localhost:1313/");
    console.log(`captured site title as ${await page.title()}`);
  } catch (error) {
    console.log(`${error}`);
    throw new Error(`${error}`);
  }
});

After(async () => {
  await browser.close();
});

export { page, browser };
