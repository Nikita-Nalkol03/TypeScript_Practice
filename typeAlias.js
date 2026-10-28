"use strict";
let emp1 = {
    id: 101,
    employee: {
        name: "Priya",
        salary: 35000
    },
    department: "IT"
};
function displayEmployee(emp) {
    console.log("ID:", emp.id);
    console.log("Name:", emp.employee.name);
    console.log("Salary:", emp.employee.salary);
    console.log("Department:", emp.department);
}
displayEmployee(emp1);
