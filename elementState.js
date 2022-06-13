const{ chromium } = require('playwright');

( async () =>{
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');


    //print the elements state
    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitButton = await page.$('#submit');
    
    console.log(await firstName.isDisabled(), '<- Is First Name disabled?');
    console.log(await firstName.isEnabled(), '<- Is First Name Enabled?');
    console.log(await firstName.isEditable(), '<- Is First Name Editable?');
    console.log(await sportsCheck.isChecked(), '<- Is Sports Checks Checked?');
    console.log(await sportsCheck.isVisible(), '<- Is Sports Checks Visible?');
    console.log(await submitButton.isHidden(), '<- Is Submit button hidden?');
    console.log(await submitButton.isVisible(),  '<- Is Submit button visible?');

    await browser.close();
})();