const{ firefox } = require('playwright');

( async () =>{
    //function code
    const browser = await firefox.launch({headless:false, slowMo: 200});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    //check the second checkbox.
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    await checks[1].check();
    await checks[0].uncheck();

    //select the second radio button.
    const radio = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radio[1].check();

    await browser.close();
})();