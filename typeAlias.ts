interface Employee {
    name: string;
    salary: number;
}

type Department = string | number;

type EmployeeRecord = {
    id: number;
    employee: Employee;
    department: Department;
};

let emp1: EmployeeRecord = {
    id: 101,
    employee: {
        name: "Priya",
        salary: 35000
    },
    department: "IT"
};

function displayEmployee(emp: EmployeeRecord): void {
    console.log("ID:", emp.id);
    console.log("Name:", emp.employee.name);
    console.log("Salary:", emp.employee.salary);
    console.log("Department:", emp.department);
}

displayEmployee(emp1);