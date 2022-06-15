const BasePage = require('./Base.page');

class LoginPage extends BasePage{
    constructor(page){
        super(page);

        //locators
        this.usernameText = '#username';
        this.passwordText = '#password';
        this.loginButton = '#log-in';
    }

    async navigate(){
        await super.navigate('index.html');
    }

    async login(username, password){
        await this.page.fill(this.usernameText, username);
        await this.page.fill(this.passwordText, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;