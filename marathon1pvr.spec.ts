import {expect,test} from "@playwright/test";
test('Booking a movie ticket',async ({page})=>{
    await page.goto ("https://www.pvrcinemas.com/");
    await page.waitForLoadState("domcontentloaded");
  await page.locator('//div[@class="p-dropdown p-component p-inputwrapper custom-icon"]').click();
  await page.locator('//input[@class="p-inputtext p-component p-autocomplete-input p-autocomplete-input"]').fill("Chennai");
  await page.locator('//li[text() ="Chennai"]').click();
    await page.locator('//span[text()="Cinema"]').click();
    await page.locator('//span[text()="Select Cinema"]').click();
   await page.getByText('PVR Heritage RSL ECR Chennai',{exact:true}).click();
     await page.locator("//span[contains(text(), 'Mon')]").click();
     await page.getByText('JAILER 2',{exact:true}).last().click();
     await page.waitForTimeout(4000);
      await page.getByText('09:05 AM',{exact:true}).last().click();
      await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']").click();
      await page.getByRole('button',{name:"Accept"}).click();
      await page.locator("//span[@id='CC.CLASSIC|A:3']").click();
      await page.locator("//span[@id='CC.CLASSIC|A:4']").click();
     // verify billing amount and seat details
     const seatdetails = page.locator("//div[@class='select-seat-number']");
      await expect(seatdetails).toContainText('A4');
      await expect(seatdetails).toContainText('A3');
    const billing  = page.locator("//div[@class ='grand-prices']").first();
      await expect(billing).toContainText('141.74');
      // verify title of page
      const Title = await page.title();
      console.log(Title);
      await expect(page).toHaveTitle("PVR Cinemas");

    console.log('Seatnumber:',seatdetails);
      console.log('billingamount:',billing);

      await page.locator("//button[@class='sc-bbbBoY kbsOBB btn-proceeded']").click();
} )
