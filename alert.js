const{ firefox } = require('playwright');

( async () =>{
    //function code
    const browser = await firefox.launch({headless:false, slowMo: 400});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');

    //code to handle the alerts.
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');

    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('Hello World');
    });
    await page.click('#promButton');

    await browser.close();
})();