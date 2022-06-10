const{ chromium } = require('playwright');

( async () =>{
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    //code to type in email textbox.
    const email = await page.$('#email');
    await email.type('hello@mail.team', { delay : 50 });  // Types slower, like a user

    await browser.close();
})();