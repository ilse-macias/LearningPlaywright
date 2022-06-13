const{ chromium } = require('playwright');

( async () =>{

    const browser = await chromium.launch({headless:false, slowMo: 200});

    //Create a video requires a context
    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordings"
        }
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    //click on button
    await page.click('button');

    // waiting for loading animation to appear
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', {state: 'hidden'});
    await page.waitForTimeout(100); //can cause flaky tests, use for debuggin' only

    //await browser.close(); //must close if not video does not get saved
})();