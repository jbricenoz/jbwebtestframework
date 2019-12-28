import Page from './Base.page';

class EmployeesPage extends Page {

    get lknCreateNewEmployee() { return $('//*[@id="content"]/p/a') }
    get tblEmployees() { return $$('#content > table > tbody > tr'); }
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

    getLead(leadName) {
        // console.log($$('#content > table > tbody > tr').length-1);
        var Row = $$('#content > table > tbody > tr');
        var Cells = Row.getElementsByTagName("td");
        console.log(Cells[0].innerTexts);
        // console.log(this.tblEmployees);
        // var table = this.tblEmployees;
        // for (var r = 0, n = table.rows.length; r < n; r++) {
        //     for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        //         if (table.rows[r].cells[c].innerHTML == leadName) {
        //             console.log(table.rows[r].cells[c].innerHTML);
        //         }
        //     }
        // }
    }
}

export default new EmployeesPage()