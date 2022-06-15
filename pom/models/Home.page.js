const BasePage = require('./Base.page');

class HomePage extends BasePage{
    constructor(page){
        super(page);

        //locators
        this.loggedUser = '.logged-user-name';
        this.balances = '.balance-value';
    }

    async navigate(){
        await super.navigate('app.html');
    }

    async getUserName(){
        let user = await this.page.$(this.loggedUser);
        return await user.innerText();
    }

    async getBalance(balanceType){
        let balanceArray = await this.page.$$(this.balances);

        if(balanceType == 'total'){
            return (await balanceArray[0].$('span')).innerText();
        }

        else if(balanceType == 'credit'){
            return (await balanceArray[1]).innerText();
        }

        else{
            return (await balanceArray[2]).innerText();
        }
    }
}

module.exports = HomePage;