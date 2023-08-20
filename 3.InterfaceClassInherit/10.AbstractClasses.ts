// Abstract class 
/*
class Employee {
    public id: number;
    public name: string;

    printDetail() {
        console.log((`id: ${this.id}, name: ${this.name}`));
    }
}

class Manager {
    public id: number;
    public name: string;
    public Employee: Employee[];
    printDetails() {
        console.log(`id: ${this.id}, name: ${this.name}, employeeCount: ${this.Employee.length}`);
    }
}
*/

abstract class AbstractEmployee {
    public id: number;
    public name: string;
    abstract getDetails(): string;
    public printDetails() {
        console.log(this.getDetails());
    }

}

class NewEmployee extends AbstractEmployee{
    getDetails(): string {
        return `id: ${this.id}. name: ${this.name}`
    }
}

class NewManager extends NewEmployee{
    public Employees: NewEmployee[];
    getDetails(): string {
        return super.getDetails() +`, Employee Count ${this.Employees.length}`
    };
}

let employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();

let manager = new NewManager();
manager.id = 2;
manager.name = "New manager";
manager.Employees = new Array();
manager.printDetails();