import Page from './Base.page';

class LoginPage extends Page{

    get txtUsername() { return $("#user_email") }
    get txtPassword() { return $("#user_password") }
    get btnSignIn() { return $("#new_user > div.form_settings > p:nth-child(4) > input") }
    get lblUser() { return $("#user_information > span") }
    get imgLogo() { return $("#logo_text > h1 > a > img") }
    get flash() { return $("#content > p.flash_notice") }
    get lknEmployeesInformation()  { return $("#menu > li.selected > a") }

    open() {
        super.open('login');
    }


    signIn(user) {
        this.setUsername(user.username);
        this.setPassword(user.password);
        this.submit()
        return true
    }

    setUsername(username){
        this.txtUsername.waitForExist();
        this.txtUsername.setValue(username);
    }

    setPassword(password) {
        this.txtPassword.setValue(password);
    }

    getUsername(){
        return this.lblUser.getText();
    }

    submit() {
        this.btnSignIn.click()
    }

    getLogoDescription(){
        return this.imgLogo.getAttribute("alt");
    }

    getFlashMessage(){
        return this.flash.getText();
    }

    getCurrentCssClassEmployeesInformationMenuTab(){
        return this.lknEmployeesInformation.getAttribute('class');
    }

}

export default new LoginPage()