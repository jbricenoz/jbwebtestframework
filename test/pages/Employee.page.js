import Page from './Base.page';

class EmployeePage extends Page{

    get txtFirstName() { return $("#employee_first_name") }
    get txtLastName() { return $("#employee_last_name") }
    get txtEmail() { return $("#employee_email") }
    get txtIdentification() { return $("#employee_identification") }
    get txtLeaderName() { return $("#employee_leader_name") }
    get ddlYear() { return $("#employee_start_working_on_1i") }
    get ddlMonth() { return $("#employee_start_working_on_2i") }
    get ddlDay() { return $("#employee_start_working_on_3i") }
    get btnCreateEmployee()  { return $("#new_employee > div.actions > input[type=submit]") }


    open() {
        super.open('employee');
    }

    setFirstName(firtsName){
        this.txtFirstName.setValue(firtsName);
    }

    setLastName(lastName){
        this.txtLastName.setValue(lastName);
    }

    setEmail(email){
        this.txtEmail.setValue(email);
    }

    setIdentification(identification){
        this.txtIdentification.setValue(identification);
    }

    setLeaderName(leaderName){
        this.txtLeaderName.setValue(leaderName);
    }

    setStartWorkingOn(date){
        var arr = date.split("-");
        var day = arr[0];
        var month = arr[1];
        var year = arr[2];
        var date = new Date(year, month, day); // 2009-11-10 Year - Month - Day
        this.ddlYear.selectByAttribute("value", year);
        this.ddlMonth.selectByAttribute("value", date.getMonth());
        this.ddlDay.selectByAttribute("value", day);
    }

    submitEmployee(){
        this.btnCreateEmployee.click();
    }

    createEmployee(employee){
        this.setFirstName(employee.firstName);
        this.setLastName(employee.lastName);
        this.setEmail(employee.email);
        this.setIdentification(employee.identification)
        this.setLeaderName(employee.leaderName);
        this.setStartWorkingOn(employee.startWorkingOn);
        this.submitEmployee();
        return true;
    }

}

export default new EmployeePage()