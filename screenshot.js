const{ chromium } = require('playwright');

( async () =>{

    const browser = await chromium.launch({headless:false, slowMo: 200});
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');
    await page.screenshot({path: 'screenshot.png'})

    //Create a screenshot for a specific element.
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'});

    //Whole screeen
    await page.screenshot({path: 'fullscreen.png', fullPage: true});

    await browser.close();
})();