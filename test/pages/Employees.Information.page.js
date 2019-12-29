import Page from './Base.page';
import { context } from '../data/Context';

class EmployeesPage extends Page {

    get lknCreateNewEmployee() { return $('//*[@id="content"]/p/a') }
    get tblEmployees() { return $('#content > table > tbody'); }
    get lblLeadName() { return $('#content > p:nth-child(6)') }


    open() {
        super.open('employees');
    }



    createNewEmployee() {
        this.lknCreateNewEmployee.click();
        return true;
    }

    getLeadFromDetails(leadName) {
        return this.lblLeadName.getText();
    }

    isLeadNamePresentInEmployeeList(leadName) {
        var table = browser.$('#content > table > tbody');
        table.$$('.//tr/td').map(function (element) {
            if (element.getText() == leadName) {
                return true;
            } else {
                return false;
            }
        })
    }

    getAndDeleteRow(leadName) {
        var table = browser.$('#content > table > tbody');
        var tblLength = table.$$('.//tr').length - 1;
        for (var i = 1; i < tblLength; i++) {
            var tbl2 = browser.$('//*[@id="content"]/table/tbody/tr[' + i + ']');
            tbl2.$$('.//td[4]').map(function (element) {
                if (element.getText() == leadName) {
                    console.log('CCC');
                    console.log('Your employee is on the row: ' + i + ' and the lead name is: ' + element.getText());
                    browser.$('//*[@id="content"]/table/tbody/tr[' + i + ']/td[9]').click();
                    browser.acceptAlert();
                }
            })
        }
    }
}

export default new EmployeesPage()