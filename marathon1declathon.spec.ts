import test, { expect } from "@playwright/test";
test('declathon page',async({page})=>{
    await page.goto("https://www.decathlon.in/");
    //verify URL
     const URL = page.url();
     console.log(URL);
     await expect(page).toHaveURL("https://www.decathlon.in/");
// verify declathon homepage is displayed
   const homepage = page.locator("//a[@class='shrink-0 cursor-pointer!']");
   await expect (homepage).toBeVisible();
    console.log('homepage displayed successfully');

// verify search box is enabled
     const searchbox = page.locator("//input[@enterkeyhint='search']");
     await expect(searchbox).toBeEnabled();
     console.log("search box is enabled");
//  click on the search box
await page.locator("//input[@enterkeyhint='search']").click();
// enter the product name shoes
await page.locator("//input[@enterkeyhint='search']").fill('shoes');
//selecting from dropdown and click enter
await page.locator("//span[@class='font-medium']").first().click();
//verify the product listing page is displayed or verify search results title
// gettitle
const title = page.getByText('Shoes',{exact:true});
await expect(title).toHaveText('Shoes');
console.log('Shoes');
//product listing page displayed
const listpage = page.locator('//div[@class="-mt-1"]');
await expect(listpage).toBeVisible();
console.log("product listing is displayed");
//filters and selecting
await page.locator('//button[@aria-controls="sport_pratice_en"]').click();
await page.getByText('Running',{exact:true}).click();
await page.locator('//button[@aria-controls="gender_id_en"]').click();
await page.getByText('Men',{exact:true}).last().click();
await page.locator('//button[@aria-controls="indian_size"]').click();
await page.locator('//div[@id="indian_size"]').scrollIntoViewIfNeeded();
await page.getByText('11',{exact:true}).last().click();

// filtered results click in first avaliable product
// Click the first available product matching the exact text
await page.locator("//div[contains(text(),'Men Running Superior Grip Cushion Shoes')]").first().click();
await page.locator("//button[@aria-label='Select size 11']").click();
const cartadd = page.locator("//button[@data-test-id='pdp:add-to-cart-button']").click();
await expect(cartadd);
console.log("shoes has been successfully added to the cart");
})
