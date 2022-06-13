const{ chromium } = require('playwright');

( async () =>{
    //function code
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('#target'); //'input', to indicate the element
   
    await page.keyboard.type('Hello World!! 2022 QA Automation', {delay: 300});
    await page.keyboard.down('Shift'); //Enable/Pressing the 'Shift' key.

    for(let i=0; i<' QA Automation'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift'); //Disabled/Stop pressing the 'Shift' key;
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' Software', {delay: 200});

    await browser.close();
})();