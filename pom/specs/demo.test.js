const {chromium} = require('playwright');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');
//const BasePage = require('../models/Base.page');

describe('Applitools demo page', ()=>{
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;
    
    //SetUp
    beforeAll(async ()=>{
        browser = await chromium.launch({ headless: false, slowMo: 200 });
        context = await browser.newContext();
        page = await context.newPage();

        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    
    it('Should be able to login', async() => {
        await loginPage.login('username','password');
        expect(await page.title()).not.toBeNull();
     })
 
     it('Should be logged in as Jack Gomez', async() => {
        expect(await homePage.getUserName()).toBe('Jack Gomez');
     })
 
     it('Should have total balance of $350',  async() => {
        expect(await homePage.getBalance('total')).toBe('$350');
     })
 
     it('Should have credit available of $17800',  async() => {
         expect(await homePage.getBalance('credit')).toBe('$17,800');
     })
 
     it('Should have due today of $180',  async() => {
         expect(await homePage.getBalance('due')).toBe('$180');
     })

     //Tear Down
     afterAll( async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
});