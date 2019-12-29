import {Given, When, Then, And} from 'cucumber';
const assert = require('assert')
import Login from '../pages/Login.page';
import Employees from '../pages/Employees.Information.page';
import Employee from '../pages/Employee.page';
import  { context } from '../data/Context';
import * as systemLabels from '../constants/system.constants';


Given(/^I'm on the login page$/, function(){
    browser.url('/');
    browser.setWindowSize(1280, 720);
})

When(/^I log in with a default user$/, function(){
    assert(Login.signIn(context.logins.user));
})

Then(/^I'm on create new employee form$/, function(){
    assert(Employees.createNewEmployee());
})

Then(/^I fill out and send the form$/, function(){
    assert(Employee.createEmployee(context.Employees.employee));
})

Then(/^I see the employee details$/, function(){
    assert.equal(Employees.getLeadFromDetails(context.Employees.employee.leaderName), 'Leader name: '+context.Employees.employee.leaderName);
    browser.pause(100);
})

Then(/^the system shows the user in the list of employees$/, function(){
    browser.url(systemLabels.BASE_URL+"/employees");
    Employees.isLeadNamePresentInEmployeeList(context.Employees.employee.leaderName);
})

Given(/^I shall be on the Employees List page$/, function(){
    browser.url(systemLabels.BASE_URL+"/employees");
})

When(/^the system delete the user in the list of employees$/, function(){
    Employees.getAndDeleteRow(context.Employees.employee.leaderName);
})

Then(/^the system does not show the user in the list of employees$/, function(){
    Employees.isLeadNamePresentInEmployeeList(context.Employees.employee.leaderName);
    browser.pause(1000);
    browser.closeWindow();
})