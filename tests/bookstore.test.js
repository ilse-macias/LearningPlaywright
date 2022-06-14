const {chromium} = require('playwright');


//Describe: It is for 'Test Suites"; a group of the test cases.
describe('UI tests for bookstore using playwright', ()=> {
    jest.setTimeout(10000);
    let browser = null;
    let page = null;
    let context = null;
    let firstRowCells = null;

    //Pre-conditions. Runs before all test
    beforeAll(async()=>{
        browser = await chromium.launch({headless:false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');
    });

    test('Should load the page', async() =>{
        //assertions
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();

    });

    test('Should able to search for eloquent javascript', async() =>{
        await page.fill('#searchBox', 'eloquent');
    });

    test('Should check if book image is okay', async() =>{
        // array  element handle to store all cell element handles
        firstRowCells = await page.$$('.ReactTable  .rt-tr-group:nth-child(1) .rt-td'); 

        // retrieving the element handle with img tag in the first element on the array
        let imgUrl = await firstRowCells[0].$('img');
        expect(await imgUrl.getAttribute('src')).not.toBeNull();
    });

    test(`Should check if title is okay`, async() =>{
        // assertion
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test('Should check if author is okay', async() =>{
        // assertion
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test('Should check if publisher is okay', async() =>{
        // assertion
        expect(await firstRowCells[3].innerText()).toBe('No Starch Press');
    });

    afterAll(async()=>{
       await browser.close();
    });
});