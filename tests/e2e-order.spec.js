const { test, expect } = require("@playwright/test");


test('e2e web automation', async ({page}) => {
    test.setTimeout(60 * 1000);
    await page.goto('https://rahulshettyacademy.com/client/',{
        waitUntil: "domcontentloaded",
        timeout: 12000
    })
    

    //login page
    const Email = 'firstTest123@gmail.com'
    await page.locator('input[placeholder="email@example.com"]').fill(Email)
    await page.locator('input[placeholder="enter your passsword"]').fill('@Bb1234567')
    await page.locator('input#login').click()

    //product page
    await page.waitForSelector('div.card-body')
    page.locator('div.card-body', {has: page.locator('b:has-text("ZARA COAT 3")')}).locator('text = Add To Cart').click()
    await page.waitForTimeout(2000);
    page.locator('div.card-body', {has: page.locator('b:has-text("iphone 13 pro")')}).locator('text = Add To Cart').click()
    await page.waitForTimeout(2000);
    page.locator('button[routerlink="/dashboard/cart"]').click()

    //Cart page
    await expect(page.locator('h3:has-text("ZARA COAT 3")')).toBeVisible()
    await expect(page.locator('h3:has-text("iphone 13 pro")')).toBeVisible()
    await page.locator('button:has-text("Checkout")').click()
    

    //Payment page
    await expect(page.locator('div.user__name label')).toHaveText(Email)
    await page.locator('input[placeholder="Select Country"]').pressSequentially('th', { delay: 300});
    await expect(page.locator('section.ta-results')).toBeVisible()

    page.locator('section.ta-results').locator('button:has-text(" Thailand")').click()

    await expect(page.locator('input[placeholder="Select Country"]')).toHaveValue('Thailand')
    await page.locator('input.input.txt').nth(1).fill('123')
    await page.locator('input.input.txt').nth(2).fill('tester')
    await page.locator('a.action__submit').click()
    
    
    //success landing page
    await page.waitForSelector('h1.hero-primary')
    await expect(page.locator('h1.hero-primary')).toBeVisible()
    console.log(await page.locator('label.ng-star-inserted').first().textContent())
    console.log(await page.locator('label.ng-star-inserted').last().textContent())
    const orderID1 = await page.locator('label.ng-star-inserted').first().textContent()
    const orderID2 = await page.locator('label.ng-star-inserted').last().textContent()
    await page.locator('label[routerlink="/dashboard/myorders"]').click()

    //Oeder History page
    await expect(orderID1).toContain(await page.locator('tbody th').nth(1).textContent())
    await expect(orderID2).toContain(await page.locator('tbody th').nth(0).textContent())
    
});