import { test, expect } from "@playwright/test"
import type { Page } from "@playwright/test"

test.describe.configure({ mode: "parallel" })

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/")
})

const TOD0_ITEMS = [
    "buy some cheese",
    "feed the cat",
    "book a doctors appointment"
]

test.describe("New Todo", () => {

    test("it should allow me to add todo items", async ({ page }) => {

        // create a new todo locator / Arrange/Given
        const newTodo = page.getByPlaceholder("Whats needs to be done?")

        // create 1st todo / Act
        await newTodo.fill(TOD0_ITEMS[0], {timeout: 100000})
        await newTodo.press("Enter")

        // Make sure the list only has one todo item / Assert
        await expect(page.getByTestId("todo-title")).toHaveText([
           TOD0_ITEMS[0] 
        ])

        // Create 2nd todo / Act
        await newTodo.fill(TOD0_ITEMS[1])
        await newTodo.press("Enter")

        // Make sure the list now has two todo items / Assert
        await expect(page.getByTestId("todo-title")).toHaveText([
          TOD0_ITEMS[0],
          TOD0_ITEMS[1],  
        ])

        await checkNumberOfTodosInLocalStorage(page, 2)
    })
})

async function createDefaultTodos(page) {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');
  
    for (const item of TOD0_ITEMS) {
      await newTodo.fill(item);
      await newTodo.press('Enter');
    }
  }

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
  }

async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).filter((todo: any) => todo.completed).length === e;
    }, expected);
  }

async function checkTodosInLocalStorage(page: Page, title: string) {
    return await page.waitForFunction(t => {
      return JSON.parse(localStorage['react-todos']).map((todo: any) => todo.title).includes(t);
    }, title);
  }
  