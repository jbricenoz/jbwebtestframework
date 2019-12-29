import {Given, When, Then, And} from 'cucumber';
const assert = require('assert')
import  Login from '../pages/Login.page';
import  { context } from '../data/Context';
import * as systemLabels from '../constants/system.constants';


Given(/^I'm on the Login page$/, function(){
    browser.url('/');
    browser.setWindowSize(1920, 1080);
})

When(/^I log in with default user$/, function(){
    assert(Login.signIn(context.logins.user));
})

Then(/^I see the flask message after user authentication$/, function(){
    assert.equal(Login.getFlashMessage(), systemLabels.SIGN_IN_SUCCESSFULLY);
})

Then(/^I see the username in the top right corner of the website$/, function(){
    assert.equal(Login.getUsername(), "Welcome "+context.logins.user.user+", Logout");
})

Then(/^I see the Employees List tab selected$/, function(){
    assert.equal(Login.getCurrentCssClassEmployeesInformationMenuTab(), "selected");
})

Then(/^I see the page logo in the website$/, function(){
    assert.equal(Login.getLogoDescription(), systemLabels.LOGO_DESCRIPTION);
    browser.pause(10000);
    browser.closeWindow()
})